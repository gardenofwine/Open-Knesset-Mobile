
/**
 * The OKnesset namespace.
 */
Ext.namespace('OKnesset');

OKnesset.GAID = "Demo-ID-replace-with-real-id";
OKnesset.appVersion = "3";

OKnesset.log = function(/*args*/) {
	if (OKnesset.debug) {
		console.log.apply(console, arguments);
	}
};

OKnesset.onError = function (code, logMsg, userMsg, silent){
	OKnesset.log(code, logMsg || userMsg);
	if (!silent) {
		Ext.Msg.alert('',userMsg || OKnesset.strings.generalError);
	}
};

Ext.regApplication({
	name : 'OKnesset.app',
	id : "oknesset",
	defaultUrl : 'navigation/push/Homepage/Index',
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
			time.start('Main Launch');
			time.report();
		}

		//The main view, holds all the panels of the application.
		this.viewport = new OKnesset.app.views.Viewport();

		// set the info button handler
		this.viewport.query('#info')[0].setHandler(function(){
			OKnesset.app.controllers.navigation.dispatchDialog('Info/Index/' + this.viewport.getActiveItem().xtype);
		}, this);

		// set the back button handler
		this.viewport.query('#backBtn')[0].setHandler(function() {
			OKnesset.app.controllers.navigation.dispatchBack();
		});

		if (isPhoneGap()) {
			// hide the native splash screen
			navigator.splashscreen.hide();
		}

		if (OKnesset.debug) {
			time.stop('Main Launch');
			time.report('Main Launch');
		}
		// TODO call secondaryLaunch form the afterDisplay event of Ext.Panel
		window.setTimeout(secondaryLaunch, 10);

		var viewport = Ext.ApplicationManager.get("oknesset").viewport;
	    OKnesset.DeviceWidth = viewport.getWidth();
    	OKnesset.DeviceHeight = viewport.getHeight();
	}
});

function secondaryLaunch() {
	if (OKnesset.debug){
		time.start('Secondary Launch');
	}

	localStorage.setItem('version', OKnesset.appVersion);

	if (isPhoneGap()){
		// There are 3 possible ways to get the apiPArser.
		// 1) it is included in the application bundle, and loaded at the end of the body
		// 2) it is loaded form the web, and stored in localStorage
		// 3) it is loaded form localStorage before it is loaded form the web.
		var apiParserJS = localStorage.getItem('API_PARSER');
		if (apiParserJS !== null){
			eval(apiParserJS);
		} 

		// load the api parser
		Ext.Ajax.request({
			url: 'http://open-knesset-mobile.appspot.com/static/V3.0/apiParser.js',
			failure : function(results){
				OKnesset.onError('SERVER', ["Error loding apiParser.js from server.", result]);
			},
			success: function(results){
				eval(results.responseText);
				localStorage.setItem('API_PARSER', results.responseText);
				loadPartiesAndMembersDataIfNeeded();
			}
		});
	} else {
		loadPartiesAndMembersDataIfNeeded();
	}

	var disclaimerDismissed = localStorage.getItem("disclaimerDismissed");
	if (disclaimerDismissed !== 'true') {
		OKnesset.app.controllers.navigation.dispatchDialog('Disclaimer/Index');
	}

	googleAnalytics();

	if (isAndroid()) {
		// For Android, override the back button functionality
		document.addEventListener("backbutton", OKnesset.app.onBackKey, false);
	} 

	if (OKnesset.debug){
		time.stop('Secondary Launch');
		time.report('Secondary Launch');
	}

	function loadPartiesAndMembersDataIfNeeded(){
		getAPIData({
			apiKey:'parties',
			forceLoad : true,
			success:function(data){
				OKnesset.PartyStore.loadData(data);
			},
			failure:function(result){
				console.log("error receiving parties data. ", result);
			}
		});

		getAPIData({
			apiKey:'members',
			forceLoad : true,
			success:function(data){
				OKnesset.MemberStore.loadData(data);
			},
			failure:function(result){
				console.log("error receiving memebers data. ", result);
			}
		});

	}
}

/**
 * For Android only - this function is called when the back button is touched.
 */
OKnesset.app.onBackKey = function () {
	// TODO - if the disclaimer that pops up at first launch is shown, then pressing back should quit the application
	if (Ext.ControllerManager.get("navigation").stack.length <= 1) {
		navigator.app.exitApp();
	} else {
		OKnesset.app.controllers.navigation.dispatchBack();
	}

};

document.addEventListener("deviceready", OKnesset.mainLaunch, false);

function appUpdate(){
	var previosVersion = localStorage.getItem('version');

	if (previosVersion === null){
		// upgrade from v1.0
		localStorage.removeItem('PartyData');
		localStorage.removeItem('PartyDataDate');
		localStorage.setItem("disclaimerDismissed", false);
	} else {
		// new installation
	}
}

appUpdate();