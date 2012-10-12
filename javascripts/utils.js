/**
 * Google analytics related function
 */
function googleAnalytics() {
	if (isPhoneGap()) {
		googleAnalytics = window.plugins.googleAnalyticsPlugin;
		// The oknesset.mobile google analytics Accoutn ID
		googleAnalytics.startTrackerWithAccountID(OKnesset.GAID);
		googleAnalytics.setCustomVariable(1, "appVersion", OKnesset.appVersion,
				2);
		googleAnalytics.trackPageview("/app");
	}
}

function GATrackMember(name) {
	if (isPhoneGap()) {
		googleAnalytics.trackPageview("/app/member/" + name);
	}
}

function GATrackParty(name) {
	if (isPhoneGap()) {
		googleAnalytics.trackPageview("/app/party/" + name);
	}
}

function GATrackBillCanceled(url) {
	if (isPhoneGap()) {
		googleAnalytics.trackEvent(function() {
		}, "bills", "cancelView", url, undefined, true);
	}
}

function GATrackBill(url, callback) {
	if (isPhoneGap()) {
		if (isAndroid()) {
			googleAnalytics.trackPageview("/app/external" + url, {
				dispatch : true
			}, callback, callback);
		} else if (isiOS()) {
			googleAnalytics.trackPageview("/app/external" + url, callback, {
				dispatch : true
			});
		}
	}
}

/**
 * End of google analytics
 */

/**
 * Handle updating the application's data from teh internet (oknesset.org)
 */
function processInitialData(partyData, partyDataDate) {

	//party data
	var partyDataString = JSON.stringify(partyData);
	updatePartyData(partyData);

	localStorage.setItem("PartyDataDate", partyDataDate.getTime());
	localStorage.setItem("PartyData", partyDataString);

	//votes data
	var VotesDataString = JSON.stringify(VotesData);
	updateVotesData(VotesData);

	localStorage.setItem("VotesDataDate", VotesDataDate.getTime());
	localStorage.setItem("VotesData", VotesDataString);

	checkFullDataFromWeb();
}

function loadInitialData() {
	if (localStorage.getItem("PartyData") != null) {
		// load data from localstorage (most updated locally)
		setTimeout(function() {
			var partyData = JSON.parse(localStorage.getItem("PartyData"));
			updatePartyData(partyData);
			checkFullDataFromWeb();
		}, 0);
	} else {
		// set the slimData date, it will be overridden once the partData is
		// loaded
		localStorage.setItem("PartyDataDate", slimDataDate.getTime());
		// load initial data (data shipped with the application)
		if (!isPhoneGap()) {
			processInitialData(partyData, partyDataDate);
		} else {
			Ext.Ajax.request({
				url : 'javascripts/models/partyData.js.jpg',
				callback : function(options, success, response) {
					// for some reason, Ext.Ajax returns success == false when
					// the
					// local request returns
					if (response.responseText != null
							&& response.responseText.length > 0) {
						eval(response.responseText);
						// partyData is evaluated from the
						processInitialData(partyData, partyDataDate);
					} else {
						OKnesset.log('Full data load failure ('
								+ JSON.stringify(response)
								+ ') with status code ' + response.status);
					}
				}
			});
		}
	}
}

function checkFullDataFromWeb() {
	return;
	var partyDataDate = new Date(
			parseInt(localStorage.getItem("PartyDataDate")));
	var now = new Date();

//	OKnesset.log("** now=" + now.getTime() + " PartyDataDate= "
//			+ partyDataDate.getTime());
	OKnesset.log("** now=" + dateToString(now) + " PartyDataDate= "
			+ dateToString(partyDataDate));

	// 24 hours is 1000*60*60*24 = 86,400,000 miliseconds
	if (now.getTime() > partyDataDate.getTime() + 86400000) {
		if (!isPhoneGap()) {
			// fetchFullDataFromWeb();
			processFullDataFromWebByLocalScript();
			return;
		}

		// Check internet connection
		if (navigator.network.connection.type == Connection.ETHERNET
				|| navigator.network.connection.type == Connection.WIFI) {

			OKnesset.log("** updating full data by WIFI");
			fetchFullDataFromWeb();
		} else if (navigator.network.connection.type == Connection.CELL_2G
				|| navigator.network.connection.type == Connection.CELL_3G
				|| navigator.network.connection.type == Connection.CELL_4G) {

			OKnesset.log("** updating full data by 3G");
			var dialogtxt = OKnesset.strings.downloadDataText;
			navigator.notification.confirm(dialogtxt,
					checkFullDataFromWebCallback,
					OKnesset.strings.downloadDataTitle,
					OKnesset.strings.dialogOKCancel);
		} else {
			OKnesset.log("** not updating full data becuase of no internet");
		}
	}

}

function checkFullDataFromWebCallback(btnIndex) {
	if (btnIndex == 2) {
		fetchFullDataFromWeb();
	}
}

function processFullDataFromWebByLocalScript() {
	OKnessetParser.loadData(function(data) {
		displayFetchCompleteNotification();
		var partyDataString = JSON.stringify(data);
		updatePartyData(data);
		var now = new Date();
		localStorage.setItem("PartyDataDate", now.getTime());
		localStorage.setItem("PartyData", partyDataString);
		OKnesset.log("Data fetch from web complete");
	});
}

function fetchFullDataFromWeb() {
	// load the update script from the web, as it may change according to api
	// changes in oknesset.org
//	Ext.Ajax
//			.request({
//				url : 'http://oknesset-mobile.appspot.com/static/js/mobile/createInitialData.js',
//				success : function(response, options) {
//					eval(response.responseText);
//					OKnesset.log('Oknesset web parser loaded from web');
//					OKnessetParser.loadData(function(data) {
//						displayFetchCompleteNotification();
//						var partyDataString = JSON.stringify(data);
//						updatePartyData(data);
//						var now = new Date();
//						localStorage.setItem("PartyDataDate", now.getTime());
//						localStorage.setItem("PartyData", partyDataString);
//					});
//				},
//				failure : function(response, options) {
//					OKnesset
//							.log('Oknesset web parser failed to load from web ('
//									+ JSON.stringify(response)
//									+ ') with status code '
//									+ response.status
//									+ '. Attempting to laod locally');
					//fetchFullDataFromWebByLocalScript();
//				}
//			});
return;

	function fetchFullDataFromWebByLocalScript() {
		Ext.Ajax.request({
			url : 'javascripts/createInitialData.js',
			callback : function(options, success, response) {
				// for some reason, Ext.Ajax returns success == false when the
				// local request returns
				if (response.responseText != null
						&& response.responseText.length > 0) {
					eval(response.responseText);
					OKnesset.log('Oknesset web parser loaded locally');
					processFullDataFromWebByLocalScript();
				} else {
					OKnesset.log('Oknesset web parser failed to load locally ('
							+ JSON.stringify(response) + ') with status code '
							+ response.status + '. Aborting content update.');
				}
			}
		});
	}

}

function displayFetchCompleteNotification() {
	if (!OKnesset.fetchCompleteOverlay) {
		OKnesset.fetchCompleteOverlay = new Ext.Panel({
			floating : true,
			centered : true,
			width : 300,
			height : 120,
			cls : 'textCenter',
			styleHtmlContent : true,
			html : OKnesset.strings.updateComplete,
			dockedItems : [ {
				dock : 'top',
				xtype : 'toolbar',
				title : OKnesset.strings.oknessetName
			} ]
		});
	}
	OKnesset.fetchCompleteOverlay.show('pop');

	Ext.defer(function() {
		OKnesset.fetchCompleteOverlay.hide();
	}, isPhoneGap() && isAndroid() ? 4000 : 2000);
}

function refreshTopPanel(){
	var stack = Ext.ControllerManager.get("navigation").stack;
    var top = Ext.ControllerManager.get("navigation").top.controller;
    if (refreshIfExists(Ext.ControllerManager.get(top))){
    	return true;
    }


    for (var i = stack.length - 1 ; i >= 0 ; i--){
    	if (refreshIfExists(Ext.ControllerManager.get(stack[i].controller))){
    		return true;
    	}
    }

    return false;

    function refreshIfExists(controller){
    	if (controller.refresh){
    		controller.refresh();
    		return true;
    	} else {
    		return false;
    	}
    }
}

// update the party store with the full data (replace the slimData)
function updatePartyData(fullPartyData) {
	OKnesset.log("-=updatePartyData=-");
	OKnesset.PartyStore.loadData(fullPartyData, false);
	OKnesset.log("Refreshed panel? " + refreshTopPanel());
}


/**
 * End of handle updating the application's data
 */


/**
 *
 * @param date
 * @returns {String}
 */
function dateToString(date) {
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var year = date.getFullYear();
	return "" + day + "/" + month + "/" + year;
}

function getPartyFromPartyStoreByName(name) {
	var partyIndex = OKnesset.PartyStore.findExact('name', name);
	return OKnesset.PartyStore.getAt(partyIndex);

}
