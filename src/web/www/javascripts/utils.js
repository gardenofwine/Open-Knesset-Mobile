function printLoadingTimes() {
	OKnesset.log('### mainLaunch (' + mainLaunchTime.toString()
			+ ').  Phonegap load time '
			+ (phonegapEnd.getTime() - phonegapStart.getTime()) / 1000
			+ ' total scripts load time'
			+ (scriptLoadEndTime.getTime() - scriptLoadStartTime.getTime())
			/ 1000);
	OKnesset.log('### sencha (' + senchaLoadEndTime.toString() + ')load time '
			+ (senchaLoadEndTime.getTime() - senchaLoadStartTime.getTime())
			/ 1000);
	OKnesset.log('### oknesset (' + oknessetLoadEndTime.toString()
			+ ')load time '
			+ (oknessetLoadEndTime.getTime() - oknessetLoadStartTime.getTime())
			/ 1000);
}

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
	var partyDataString = JSON.stringify(partyData);
	updatePartyData(partyData);
	localStorage.setItem("PartyDataDate", partyDataDate.getTime());
	localStorage.setItem("PartyData", partyDataString);
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
				url : 'javascripts/partyData.js.jpg',
				callback : function(options, success, response) {
					// for some reason, Ext.Ajax returns success == false when
					// the
					// local request returns
					if (response.responseText != null
							&& response.responseText.length > 0) {
						loadTime = new Date();
						eval(response.responseText);
						OKnesset.log('Initial data load was performed in '
								+ (loadTime.getTime() - mainLaunchTimeEnd
										.getTime()) / 1000);
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
	var partyDataDate = new Date(
			parseInt(localStorage.getItem("PartyDataDate")));
	var now = new Date();

	// 24 hours is 1000*60*60*24 = 86,400,000
	OKnesset.log("** now=" + now.getTime() + " PartyDataDate= "
			+ partyDataDate.getTime());
	OKnesset.log("** now=" + dateToString(now) + " PartyDataDate= "
			+ dateToString(partyDataDate));

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
	Ext.Ajax
			.request({
				url : 'http://oknesset-mobile.appspot.com/static/js/mobile/createInitialData.js',
				success : function(response, options) {
					eval(response.responseText);
					OKnesset.log('Oknesset web parser loaded from web');
					OKnessetParser.loadData(function(data) {
						displayFetchCompleteNotification();
						var partyDataString = JSON.stringify(data);
						updatePartyData(data);
						var now = new Date();
						localStorage.setItem("PartyDataDate", now.getTime());
						localStorage.setItem("PartyData", partyDataString);
					});
				},
				failure : function(response, options) {
					OKnesset
							.log('Oknesset web parser failed to load from web ('
									+ JSON.stringify(response)
									+ ') with status code '
									+ response.status
									+ '. Attempting to laod locally');
					fetchFullDataFromWebByLocalScript();
				}
			});

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


// update the party store with the full data (replace the slimData)
function updatePartyData(fullPartyData) {
	OKnesset.log("-=updatePartyData=-");
	OKnesset.PartyStore.loadData(fullPartyData, false);
	// getViewport().getActiveItem().items.getAt(0).refresh();
	// A OKnesset that can be refreshed has a refresh function
	// TODO handle case where there is no active item...
	// getViewport().getActiveItem().refresh();
}

/**
 * End of handle updating the application's data
 */



/**
 * Open Bill in browser. open the browser to display the bill in oknesset.org's
 * website
 */
function gotoBill(record) {
	var bill = record.data;
	var url = 'http://www.oknesset.org' + bill.url;
	if (isPhoneGap()) {
		if (isiOS()) {
			// Since in iOS opening the browser exists the application,
			// the user should be prompted if she wishes to do so.
			navigator.notification.confirm(null, function(idx) {
				if (idx == 2) {
					gotoBillCallback(url, bill.url)
				} else {
					// track bill cancel
					GATrackBillCanceled(bill.url)
				}
			}, OKnesset.strings.openBillText, OKnesset.strings.dialogOKCancel);
		} else {// android
			gotoBillCallback(url, bill.url);
		}
	}
	// TODO for web version - open a new browser tab

}

function gotoBillCallback(url, billUrl) {
	// in iOS, this function is called form native code, and it is necessary
	// that the next call to native code via phonegap command would not be
	// executed in the same "thread".
	window.setTimeout(function() {
		GATrackBill(billUrl, function() {
			if (isAndroid()) {
				window.plugins.webintent.startActivity({
					action : WebIntent.ACTION_VIEW,
					url : url
				}, function() {
					// success callback
				}, function() {
					alert(OKnesset.strings.errorOpenBill)
				});
			} else if (isiOS()) {
				document.location = url;
			}
		});
	}, 10);
}
/**
 * End of Open Bill in browser.
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

function getViewport(){
	return Ext.ApplicationManager.get("oknesset").viewport;
}

function historyUrlToObject(historyUrl){
	var params = historyUrl.split("/");
//	var obj = {historyUrl : historyUrl};
	var obj = {};
	if (params[0]){
		obj.controller = params[0];
	}
	if (params[1]){
		obj.action = params[1];
	}
	if (params[2]){
		obj.id = params[2];
	}

	return obj;
}

function objectToHistoryUrl(object){

}

//function getController(historyUrl){
//	return historyUrl.substring(0, historyUrl.indexOf("/"));
//}
//
//function getAction(historyUrl){
//	var d = historyUrl.substring(historyUrl.indexOf("/") + 1, historyUrl.indexOf("/", historyUrl.indexOf("/")+1));
//	return d;
//}

function dispatchPanel(toUrl, historyUrl){
	var dispatchParams = {
	    historyUrl: toUrl,
	    back : historyUrl,
	    //
	    animation: {
	        type: 'slide',
	        direction : 'right'
	    },
	};
	Ext.apply(dispatchParams, historyUrlToObject(toUrl));
	Ext.dispatch(dispatchParams);
}

function dispatchBack(historyUrl){
	var dispatchParams = {
//	    controller: getController(historyUrl),
//	    action: getAction(historyUrl),
	    historyUrl: historyUrl,
	    //
	    animation: {
	        type: 'slide',
	    },
	};
	Ext.apply(dispatchParams, historyUrlToObject(historyUrl));
	Ext.dispatch(dispatchParams);
}