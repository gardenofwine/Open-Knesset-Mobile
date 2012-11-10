//
//  GoogleAnalyticsPlugin.m
//  Gapalytics
//
//  Created by Jesse MacFadyen on 11-04-21.
//  Copyright 2011 Nitobi. All rights reserved.
//

#import "GoogleAnalyticsPlugin.h"
#import "PluginResult.h"


// Dispatch period in seconds
static const NSInteger kGANDispatchPeriodSec = 10;

@implementation GoogleAnalyticsPlugin

- (PGPlugin*) initWithWebView:(UIWebView*)theWebView
{
    self = (GoogleAnalyticsPlugin *)[super initWithWebView:theWebView];
    if (self) {
		triggerCallbackString = nil;
		callbackJavascript = nil;
	}
	
	return self;
}

- (void) startTrackerWithAccountID:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options
{
	NSString* accountId = [arguments objectAtIndex:0];

	[[GANTracker sharedTracker] startTrackerWithAccountID:accountId
										   dispatchPeriod:kGANDispatchPeriodSec
												 delegate:self];

}

- (void) trackEvent:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options
{
	NSString* callbackId = [arguments objectAtIndex:0];

	NSString* category = [options valueForKey:@"category"];
	NSString* action = [options valueForKey:@"action"];
	NSString* label = [options valueForKey:@"label"];
	int value = [[options valueForKey:@"value"] intValue];
	BOOL dispatchNow = [[options valueForKey:@"dispatchNow"] boolValue];

	NSError *error;

	NSLog(@"GoogleAnalyticsPlugin.trackEvent::%@, %@, %@, %d",category,action,label,value);
	PluginResult* result = [PluginResult resultWithStatus: PGCommandStatus_OK];
	NSString *resultString;
	if (![[GANTracker sharedTracker] trackEvent:category
										 action:action
										  label:label
										  value:value
									  withError:&error]) {
		// Handle error here
		NSLog(@"GoogleAnalyticsPlugin.trackEvent Error:: %@",[error localizedDescription]);
		resultString = [result toErrorCallbackString: callbackId];
	} else {
		resultString = 	[result toSuccessCallbackString: callbackId];
	}
	
	if (dispatchNow) {
		[[GANTracker sharedTracker] dispatch];
	}
	
	[self writeJavascript:resultString];

}
// cancel the javascript callback from the hitDispatched method
- (void) assumeDispatchCallbackFailure: (NSString *)callbackId
{
	if (triggerCallbackString != nil){
		[triggerCallbackString release];
		triggerCallbackString = nil;
	}
	if (callbackJavascript != nil){
		[callbackJavascript release];
		callbackJavascript = nil;
	}
	NSLog(@"GoogleAnalyticsPlugin.trackPageview dispatch timeout");
	PluginResult *result = [PluginResult resultWithStatus: PGCommandStatus_ERROR messageAsString:@"Dispatch timeout"]; 
	[self writeJavascript:[result toErrorCallbackString:callbackId]];
}

- (void) cancelHitDispatchedCallback
{
	if (triggerCallbackString != nil){
		[triggerCallbackString release];
		triggerCallbackString = nil;
	}
	if (callbackJavascript != nil){
		[callbackJavascript release];
		callbackJavascript = nil;
	}
}

- (void) trackPageview:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options
{
	NSString* callbackId = [arguments objectAtIndex:0];
	NSString* pageUri = [arguments objectAtIndex:1];
	NSString* dispatch = [options valueForKey:@"dispatch"];
	
	NSError *error;
	// assume success
	PluginResult* result = [PluginResult resultWithStatus: PGCommandStatus_OK]; 

	if ([dispatch boolValue]){
		triggerCallbackString = [pageUri retain];
		callbackJavascript = [[result toSuccessCallbackString:callbackId] retain];
	}

	
	if (![[GANTracker sharedTracker] trackPageview:pageUri
										 withError:&error]) {
		// TODO: Handle error here
		NSLog(@"GoogleAnalyticsPlugin.trackPageview Error:: %@",[error localizedDescription]);
		result = [PluginResult resultWithStatus: PGCommandStatus_ERROR messageAsString:[error localizedDescription]]; 
		if ([dispatch boolValue]){
			[self cancelHitDispatchedCallback];
		}
		return;
	} 
	
	if ([dispatch boolValue]){
//		//NSLog(@"** dispatching now!");
		if (![[GANTracker sharedTracker] dispatch]) {
			[self cancelHitDispatchedCallback];
			
			NSLog(@"GoogleAnalyticsPlugin.trackPageview dispatch Error");
			result = [PluginResult resultWithStatus: PGCommandStatus_ERROR messageAsString:@"Dispatch error"];
			[self writeJavascript:[result toSuccessCallbackString:callbackId]];
		} else {
			// set timer to invoke the callback with an error after a reasonable amount of time
			[self performSelector:@selector(assumeDispatchCallbackFailure:) withObject:callbackId afterDelay:1.0]; 
		}
	} else {
		[self writeJavascript:[result toSuccessCallbackString:callbackId]];
	}
}

- (void) setCustomVariable:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options
{
//	//NSLog(@"** setCustomVariable %@", arguments);

	NSString* index = [arguments objectAtIndex:0];
	NSString* name = [arguments objectAtIndex:1];
	NSString* value = [arguments objectAtIndex:2];
	NSString* scope = [arguments objectAtIndex:3];

	NSError *error;
	if (![[GANTracker sharedTracker] setCustomVariableAtIndex:[index intValue]
														 name:name
														value:value
														scope: [scope intValue]
													withError:&error]  ) {
		NSLog(@"GoogleAnalyticsPlugin.setCustomVariableAtIndex Error:: %@",[error localizedDescription]);

	}
}



- (void)trackerDispatchDidComplete:(GANTracker *)tracker
                  eventsDispatched:(NSUInteger)eventsDispatched
              eventsFailedDispatch:(NSUInteger)eventsFailedDispatch
{
//	NSLog(@"** trackerDispatchDidComplete success %d failure %d", eventsDispatched, eventsFailedDispatch);
	NSString* callback = [NSString stringWithFormat:@"window.plugins.googleAnalyticsPlugin.trackerDispatchDidComplete(%d);",
							eventsDispatched];
	[ self.webView stringByEvaluatingJavaScriptFromString:callback];

}

- (void)hitDispatched:(NSString *)hitString{
	//NSLog(@"** hitDispatched:%@",[hitString stringByReplacingPercentEscapesUsingEncoding:NSUTF8StringEncoding]);
	
	if (triggerCallbackString != nil){
		NSRange triggerTextRange = [[hitString stringByReplacingPercentEscapesUsingEncoding:NSUTF8StringEncoding] rangeOfString:triggerCallbackString];
		if (triggerTextRange.location != NSNotFound){
			[NSObject cancelPreviousPerformRequestsWithTarget:self];
			[self.webView stringByEvaluatingJavaScriptFromString:callbackJavascript];
			//cancel the timeout
			[self cancelHitDispatchedCallback];
		}
	}
}

- (void) dealloc
{
	[[GANTracker sharedTracker] stopTracker];
	[ super dealloc ];
}

@end
