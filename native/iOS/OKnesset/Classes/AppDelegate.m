//
//  AppDelegate.m
//  OKnesset PG1
//
//  Created by Benjamin Weingarten on 8/12/11.
//  Copyright __MyCompanyName__ 2011. All rights reserved.
//

#import "AppDelegate.h"
#ifdef PHONEGAP_FRAMEWORK
	#import <PhoneGap/PhoneGapViewController.h>
#else
	#import "PhoneGapViewController.h"
#endif

@implementation AppDelegate

@synthesize invokeString;
@synthesize playerView;

NSDateFormatter *formatter;
NSString        *dateString;
NSDate *lastTime;


+(void) initialize{
	formatter = [[NSDateFormatter alloc] init];
	[formatter setDateFormat:@"dd-MM-yyyy HH:mm:ss"];
}

- (id) init
{	
	/** If you need to do any extra app-specific initialization, you can do it here
	 *  -jm
	 **/
    return [super init];
}

-(void)setupMovie {
	// Disable audio session so it doesn't interfere with ipod music
	AVAudioSession *session = [AVAudioSession sharedInstance];
	[session setCategory:AVAudioSessionCategoryAmbient error:NULL];
	[session setActive:YES error:NULL];

	// Setup movie view
	NSURL *movieURL = [[NSBundle mainBundle] URLForResource:@"oknesset-splash" withExtension:@"mp4"];
    self.playerView  = [[MPMoviePlayerController alloc] initWithContentURL:movieURL];
	if (self.playerView) {
		[self.playerView setFullscreen:YES];
		[self.playerView setScalingMode:MPMovieScalingModeNone];
		[self.playerView setControlStyle:MPMovieControlStyleNone];
		[self.playerView setMovieSourceType:MPMovieSourceTypeFile];
		[self.playerView setShouldAutoplay:NO];
		[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(movieComplete:)
													 name:MPMoviePlayerPlaybackDidFinishNotification object:self.playerView];
		[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(playMovie:)
													 name:MPMoviePlayerLoadStateDidChangeNotification object:self.playerView];
		
		[self.playerView setContentURL:movieURL];  
		[self.playerView prepareToPlay];
	} else {
		NSLog(@"Failed initiating MPMoviePlayerController");
	}
}
-(void)movieComplete:(NSNotification *)notification {
	UIImage *animationEndImage = [UIImage imageNamed:@"Animation-End"];
	[self.imageView setImage:animationEndImage];
	[self.playerView.view removeFromSuperview];
}

-(void)playMovie:(NSNotification *)notification {
    if (self.playerView.loadState == MPMovieLoadStatePlayable | MPMovieLoadStatePlaythroughOK) {
        [[NSNotificationCenter defaultCenter] removeObserver:self name:MPMoviePlayerLoadStateDidChangeNotification object:notification.object];
		[self.playerView.view setFrame:[self.window frame]];
		[self.window addSubview:self.playerView.view];
		[self.playerView play];     
		
    } else {
		NSLog(@"Failed preparing splash movie. %@", notification);
	}
}

/**
 * This is main kick off after the app inits, the views and Settings are setup here. (preferred - iOS4 and up)
 */
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
	lastTime = [NSDate date];
//	//NSLog(@"** Time at launch is %@", [formatter stringFromDate:lastTime]);
	NSArray *keyArray = [launchOptions allKeys];
	if ([launchOptions objectForKey:[keyArray objectAtIndex:0]]!=nil) 
	{
		NSURL *url = [launchOptions objectForKey:[keyArray objectAtIndex:0]];
		self.invokeString = [url absoluteString];
//		NSLog(@"OKnesset PG1 launchOptions = %@",url);
	}
	
	BOOL result = [super application:application didFinishLaunchingWithOptions:launchOptions];
	[self setupMovie];

//	//NSLog(@"** Time to launch PhoneGap is %f", -1 * [lastTime timeIntervalSinceNow]);
	lastTime = [[NSDate date] retain];

	return result;
}

// this happens while we are running ( in the background, or from within our own app )
// only valid if OKnesset PG1.plist specifies a protocol to handle
- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url 
{
    // must call super so all plugins will get the notification, and their handlers will be called 
	// super also calls into javascript global function 'handleOpenURL'
    return [super application:application handleOpenURL:url];
}

-(id) getCommandInstance:(NSString*)className
{
	/** You can catch your own commands here, if you wanted to extend the gap: protocol, or add your
	 *  own app specific protocol to it. -jm
	 **/
	return [super getCommandInstance:className];
}

/**
 Called when the webview finishes loading.  This stops the activity view and closes the imageview
 */
- (void)webViewDidFinishLoad:(UIWebView *)theWebView 
{
	//NSLog(@"** webViewDidFinishLoad %@. WebView time to load: %f", [formatter stringFromDate:[NSDate date]], -1 * [lastTime timeIntervalSinceNow]);
	[lastTime release];
	lastTime = [[NSDate date] retain];
	// only valid if OKnesset PG1.plist specifies a protocol to handle
	if(self.invokeString)
	{
		// this is passed before the deviceready event is fired, so you can access it in js when you receive deviceready
		NSString* jsString = [NSString stringWithFormat:@"var invokeString = \"%@\";", self.invokeString];
		[theWebView stringByEvaluatingJavaScriptFromString:jsString];
	}
	return [ super webViewDidFinishLoad:theWebView ];
}

- (void)webViewDidStartLoad:(UIWebView *)theWebView 
{
//	[self doSplashAnimation];
	
	[lastTime release];
	lastTime = [[NSDate date] retain];
	//NSLog(@"** webViewDidStartLoad %@", [formatter stringFromDate:lastTime]);
	return [ super webViewDidStartLoad:theWebView ];
}

/**
 * Fail Loading With Error
 * Error - If the webpage failed to load display an error with the reason.
 */
- (void)webView:(UIWebView *)theWebView didFailLoadWithError:(NSError *)error 
{
	return [ super webView:theWebView didFailLoadWithError:error ];
}

/**
 * Start Loading Request
 * This is where most of the magic happens... We take the request(s) and process the response.
 * From here we can re direct links and other protocalls to different internal methods.
 */
- (BOOL)webView:(UIWebView *)theWebView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType
{
	BOOL should =  [ super webView:theWebView shouldStartLoadWithRequest:request navigationType:navigationType ];
	
	
	// A hack to diallow opening of external web content in the Open Knesset applicaiton
	NSURL *url = [request URL];

	if ( [ [url scheme] isEqualToString:@"http"] || [ [url scheme] isEqualToString:@"https"] ) {
		[[UIApplication sharedApplication] openURL:url];
		should = NO;
	}

	return should;
}


- (BOOL) execute:(InvokedUrlCommand*)command
{
	return [ super execute:command];
}

- (void)dealloc
{
	[ super dealloc ];
}

@end
