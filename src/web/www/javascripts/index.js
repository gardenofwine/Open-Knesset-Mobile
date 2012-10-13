/**
 * The OKnesset namespace.
 */
Ext.namespace('OKnesset');

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
	defaultUrl : 'navigation/push/AgendaList/Index',
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

		// set the menu panel
        this.viewport.query('#openMenu')[0].setHandler(function(){
            OKnesset.app.views.Viewport.AppMenu.showBy(this);
        });

        OKnesset.app.views.Viewport.menuList.addListener('itemtap',
            	function(that, index, item, e) {
					var record = that.store.getAt(index);
					if (record.data.type === 'page'){
						OKnesset.app.controllers.navigation.dispatchPanel(record.data.page);
					} else if (record.data.type === 'dialog'){
						OKnesset.app.controllers.navigation.dispatchDialog(record.data.page);
					}
					// that = the item in teh list
					that.deselect();
					OKnesset.app.views.Viewport.AppMenu.hide();
				});

		// set the back button handler
        this.viewport.query('#backBtn')[0].setHandler(function() {
        	OKnesset.app.controllers.navigation.dispatchBack();
		});
			// shmulik & yossi
		    // set the agenda button handler
//        this.viewport.query('#agenda')[0].setHandler(function(){
//        	OKnesset.app.controllers.navigation.dispatchPanel('AgendaList/Index');
//        });


		if (isPhoneGap()) {
			// hide the native splash screen
			if (isiOS()) {
				navigator.splashscreen.hide();
			} else if (isAndroid()) {
				prompt("", "oknesset_init:");
			}
		}

		if (OKnesset.debug) {
			time.stop('Main Launch');
			time.report('Main Launch');
		}
		// TODO call secondaryLaunch form the afterDisplay event of Ext.Panel
		window.setTimeout(secondaryLaunch, 10);
	}
});

function secondaryLaunch() {
	if (OKnesset.debug){
		time.start('Secondary Launch');
	}

	// load news XML
	Ext.Ajax.request({
		    url: 'javascripts/models/PlenumAgendaTest.js',
			failure : failXML,
		    success: gotXML
		});

	function gotXML(data){
		console.log("Got XML!");
		console.log(data);
	}
	function failXML(data){
		console.log("Failed XML!");
		console.log(data);
	}


	var disclaimerDismissed = localStorage.getItem("disclaimerDismissed");
	if (disclaimerDismissed !== 'true') {
		OKnesset.app.controllers.navigation.dispatchDialog('Disclaimer/Index');
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
		document.addEventListener("backbutton", OKnesset.app.onBackKey, false);
	}

	// Load the full data of the parties and members into the data stores
	loadInitialData();

	if (OKnesset.debug){
		time.stop('Secondary Launch');
		time.report('Secondary Launch');
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

}

document.addEventListener("deviceready", OKnesset.mainLaunch, false);