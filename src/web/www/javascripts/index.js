/**
 * The OKnesset namespace.
 */

if (typeof OKnesset === 'undefined') {
	var OKnesset = {};
}

OKnesset.GAID = "Demo-ID-replace-with-real-id";
OKnesset.appVersion = "1.0.0";

OKnesset.log = function(string) {
	if (OKnesset.debug) {
		console.log(string);
	}
};

Ext.regApplication({
	name : 'OKnesset.app',
	id : "oknesset",
	defaultUrl : 'navigation/push/PartyList/Index',
	launch : function() {
		// Invoked immediately after the OKnesset.app created.
		this.launched = true;
		this.mainLaunch();
	},
	mainLaunch : function() {
		// For iOS and Android, we must wait until the devicereay event
		// is fired.
		if (isPhoneGap() && (!device || !this.launched)) {
			return;
		}

		if (OKnesset.debug) {
			mainLaunchTime = new Date();
			if (isPhoneGap()) {
				printLoadingTimes();
			}
		}


		//The main view, holds all the panels of the application.
		this.viewport = new OKnesset.app.views.Viewport();
        var backBtn = this.viewport.query('#backBtn')[0];
        backBtn.hide();
        backBtn.setHandler(function() {
			dispatchBack();
		});

		if (isPhoneGap()) {
			// hide the native splash screen
			if (isiOS()) {
				navigator.splashscreen.hide();
			} else if (isAndroid()) {
				prompt("", "oknesset_init:");
			}
		}

		if (OKnesset.debug) {
			mainLaunchTimeEnd = new Date();
			OKnesset.log('sencha touch load time '
					+ (mainLaunchTimeEnd.getTime() - mainLaunchTime.getTime())
					/ 1000);
		}
		// TODO call secondaryLaunch form the afterDisplay event of Ext.Panel
		window.setTimeout(secondaryLaunch, 10);
	}
});

function secondaryLaunch() {
	var secondaryLaunchTimeStart = new Date();
	OKnesset.log("** secondaryLaunch begin "
			+ secondaryLaunchTimeStart.toString());

	var disclaimerDismissed = localStorage.getItem("disclaimerDismissed");
	if (disclaimerDismissed !== 'true') {
		dispatchDialog('Disclaimer/Index');
	}


	// When the applicaiton comes back from the background state on the iOS or
	// Android, check if there are any updates from teh oknesset website.
	OKnesset.resumeCount = 0;
	document.addEventListener("resume", function() {
		window.setTimeout(function() {
			// For Android. the 'resume' event is fired even when the
			// application launches, so we need to ignore this first event
			if (isiOS() || isAndroid() && OKnesset.resumeCount != 0) {
				checkFullDataFromWeb();
			}
			OKnesset.resumeCount++;
		}, 0);
	}, false);

	googleAnalytics();

	if (isAndroid()) {
		// For Android, override the back button functionality
		document.addEventListener("backbutton", onBackKey, false);
	}

	// Load the full data of the parties and members into the data stores
	loadInitialData();

	var secondaryLaunchTimeEnd = new Date();
	OKnesset.log("** secondaryLaunch end. Total time "
			+ (secondaryLaunchTimeEnd.getTime() - secondaryLaunchTimeStart
					.getTime()) / 1000);
}


/**
 * Returns true if the member is a minister, or is the chairperson of the
 * Knesset.
 *
 * @param member
 * @returns {Boolean}
 */
function hasExcuseForNoBills(member) {
	return (member.roles.indexOf(OKnesset.strings.ministerIndicator) != -1 || member.roles === OKnesset.strings.knessetChairman);
}


/**
 * For Android only - this function is called when the back button is touched.
 */
function onBackKey() {
	// TODO - if the disclaimer that pops up at first launch is shown, then pressing back should quit the application
	if (Ext.ControllerManager.get("navigation").stack.length <= 1) {
		navigator.app.exitApp();
	} else {
		dispatchBack();
	}

}

document.addEventListener("deviceready", OKnesset.mainLaunch, false);
