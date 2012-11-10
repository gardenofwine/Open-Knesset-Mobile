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

//receives an array of id's and returns a array of objects of the members
function getMembersById(ids) {

	if (ids.push === undefined) {
		//assumming we got only one id
			tmp=[]; tmp.push(ids); ids = tmp;
	}
	  var members = [];
	  var storeCollection = OKnesset.MemberStore.snapshot?OKnesset.MemberStore.snapshot:OKnesset.MemberStore.data;
	  storeCollection.items.forEach(function(member) {
	      for (var i=0;i<ids.length;i++) {
	          id=ids[i];

	          if (member.data !== undefined)
	          {
	              member = member.data;
	          }

	          if (member.id == id) {
			      members.push(member);
			      ids.remove(id);
			      i = ids.length;
			  }
	      }

	      if (ids.length == 0){
	          return members;
	      }
	  });
	  return members;
}


/**
 * options: an object with the following keys:
 *	(string)apiKey, (function)success, (boolean)cache, (function)failure
 */
function getAPIData(options) {
	var requestUrl = OKnessetAPIMapping[options.apiKey].url();

	// if a cached version of the data exists, return it immediately
	var cachedData = _cacheGet(requestUrl);
	if (cachedData != null) {
		//call callback function with cached data
		options.success(cachedData);
		return;
	}

	// make request
	Ext.util.JSONP.request({
	    url: requestUrl,
	    callbackKey : OKnessetAPIMapping[options.apiKey].callbackKey,
	    params : OKnessetAPIMapping[options.apiKey].parameters,
		onFailure : options.failure,
	    callback: function(results){
	    	options.success(OKnessetAPIMapping[options.apiKey].parser(results));
	    }
	});

	function _cacheGet(key) {
		var cachedData = localStorage.getItem(key);

		if (cachedData != null)
			cachedData = JSON.parse(cachedData);

		return cachedData;
	}
}
