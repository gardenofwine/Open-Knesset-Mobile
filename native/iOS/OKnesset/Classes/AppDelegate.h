//
//  AppDelegate.h
//  OKnesset PG1
//
//  Created by Benjamin Weingarten on 8/12/11.
//  Copyright __MyCompanyName__ 2011. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <MediaPlayer/MediaPlayer.h>
#ifdef PHONEGAP_FRAMEWORK
	#import <PhoneGap/PhoneGapDelegate.h>
#else
	#import "PhoneGapDelegate.h"
#endif

@interface AppDelegate : PhoneGapDelegate {

	NSString* invokeString;
}

// invoke string is passed to your app on launch, this is only valid if you 
// edit OKnesset PG1.plist to add a protocol
// a simple tutorial can be found here : 
// http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html

@property (copy)  NSString* invokeString;
@property (nonatomic, retain) MPMoviePlayerController *playerView;


@end

