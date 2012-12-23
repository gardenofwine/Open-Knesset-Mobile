/**
 * Google analytics related function
 */
var googleAnalytics = function () {
	if (isPhoneGap()) {
		googleAnalytics = window.plugins.googleAnalyticsPlugin;
		// The oknesset.mobile google analytics Accoutn ID
		googleAnalytics.startTrackerWithAccountID(OKnesset.GAID);
		googleAnalytics.setCustomVariable(1, "appVersion", OKnesset.appVersion,
				2);
		googleAnalytics.trackPageview("/app/");
	}
};

GApageMapping = {
	MemberListView              : "/app/member/",
	MemberView                  : "/app/member/",
	BillsView                   : "/app/member/bills/",
	BillDetailsView             : "/app/bill/",
	CommitteesView              : "/app/member/committees/",
	PartyListView               : "/app/party/",
	PartyView                   : "/app/party/",
	PartyInfoView               : "/app/party/info/",
	memberVotesView             : "/app/member/votes/",
	VoteDetailsView             : "/app/vote/",
	AgendaListView              : "/app/agenda/",
	AgendaDetailsView           : "/app/agenda/",
	AgendaVoteListView          : "/app/agenda/votes/",
	AgendaMembersSupportListView: "/app/agenda/members/",
	AgendaPartiesSupportListView: "/app/agenda/parties/",
	AllCommitteesView           : "/app/committee/",
	CommitteeDetailsView        : "/app/committee/",
	ProtocolView                : "/app/committee/protocol/",
	ProtocolSectionView         : "/app/committee/protocol/sections/",
	InfoView                    : "/app/info/",
	DisclaimerView              : "/app/disclaimer/",
	CreditsView                 : "/app/disclaimer/credits"
};

function GATrackPage(page, extra) {
	if (isPhoneGap()) {
		googleAnalytics.trackPageview(GApageMapping[page] + extra);
	} else {
		OKnesset.log("Google Analytics Page" + GApageMapping[page] + "" + extra);
	}
}

function GATrackEvent(category, action, label) {
	if (isPhoneGap()) {
		googleAnalytics.trackEvent(function() {
		}, category, action, label, undefined, true);
	} else {
		OKnesset.log("Google Analytics Event. (category " + category + ", action " + action + ", label " + label + ")");
	}
}

/**
 * End of google analytics
 */


/**
 * Bills
 */
 function billStageTextToIndex(stage){
	if (stage === OKnesset.strings.billStage6){
		return 6;
	}
	if (stage === OKnesset.strings.billStage5){
		return 5;
	}
	if (stage === OKnesset.strings.billStage4){
		return 4;
	}
	if (stage === OKnesset.strings.billStage3){
		return 3;
	}
	if (stage === OKnesset.strings.billStage2){
		return 2;
	}
	if (stage === OKnesset.strings.billStage1){
		return 1;
	}
 }

/**
 * Bills
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

/**
*
* @param date - format "yyyy-mm-dd"
* @returns {String} format "dd/mm/yyyy"
*/
function formatDate(date) {
	var year = date.substr(0,4);
	var month = date.substr(5,2);
	var day = date.substr(8,2);
	
	return day + "/" + month + "/" + year;
}

function getPartyFromPartyStoreByName(name) {
	var partyIndex = OKnesset.PartyStore.findExact('name', name);
	return OKnesset.PartyStore.getAt(partyIndex);

}

function getObjectFromStoreByID(store, id, id_key){
	if (typeof id_key === 'undefined'){
		id_key = 'id';
	}
	return getObjectFromStoreByFunc(store, function(r){
		return r.data[id_key] === parseInt(id, 10);
	});
}

function getObjectFromStoreByFunc(store, func){
	var index = store.findBy(func);
	return store.getAt(index);
}

//receives an array of id's and returns a array of objects of the members
function getMembersById(ids) {

	if (ids.push === undefined) {
		//assumming we got only one id
			if (typeof ids === 'string'){
				ids = parseInt(ids, 10);
			}
			tmp=[]; tmp.push(ids); ids = tmp;
		}
		var members = [];
		var storeCollection = OKnesset.MemberStore.snapshot?OKnesset.MemberStore.snapshot:OKnesset.MemberStore.data;
		storeCollection.items.forEach(function(member) {
			for (var i=0;i<ids.length;i++) {
				id=ids[i];

				if (member.data !== undefined) {
					member = member.data;
				}

				if (member.id == id) {
					members.push(member);
					ids.remove(id);
					i = ids.length;
				}
			}

			if (!ids.length) {
				return members;
			}
		});
		return members;
}



/**
 * options: an object with the following keys:
 *	(string)apiKey, (function)success, (boolean)diskCache, (boolean)forceLoad,(function)failure
 * (object)urlOptions, (object)parameterOptions

 * retuns: ture if data was retrieved from cache. false otherwise
 */
memcache = {};
function getAPIData(options) {
	if (typeof OKnessetAPIMapping === 'undefined'){
		options.failure("The file apiParser.js has not been loaded from the server");
		return false;
	}
	var requestUrl = OKnessetAPIMapping[options.apiKey].url(options.urlOptions);

	var parameters;
	if (typeof OKnessetAPIMapping[options.apiKey].parameters === 'function') {
		parameters = Ext.apply({},OKnessetAPIMapping[options.apiKey].parameters(options.parameterOptions));
	} else {
		parameters = Ext.apply({},OKnessetAPIMapping[options.apiKey].parameters);
	}

	var cacheKey = requestUrl + JSON.stringify(parameters);
	// if a cached version of the data exists, return it immediately
	var cachedData = _diskCacheGet(cacheKey);
	var storeInCacheOnly = false;
	if (cachedData !== null) {
		//call callback function with cached data
		options.success(cachedData.data);
		if (!options.forceLoad && !has24HoursPassedSince(new Date(cachedData.date))){
			// do not call the server if the disk cache is less than a day old,
			// and forceLoad is not required
			return true;
		} else {
			storeInCacheOnly = true;
		}
	} else {
		cachedData = _cacheGet(cacheKey);
		if ((typeof cachedData !== 'undefined') && cachedData !== null ){
			//call callback function with cached data
			options.success(cachedData);
			if (!options.forceLoad){
				return true;
			} else {
				storeInCacheOnly = true;
			}
		}
	}


	// make request
	Ext.util.JSONP.request({
		url        	: requestUrl,
		callbackKey	: OKnessetAPIMapping[options.apiKey].callbackKey,
		params     	: parameters,
		scope		: this,
		onFailure  	: options.failure,
		callback   	: function (results){
			OKnessetAPIMapping[options.apiKey].parser(results,
				function(parseResults){
					// success
					memcache[cacheKey] = parseResults;
					if (options.diskCache){
						localStorage.setItem(cacheKey, JSON.stringify({
							date : new Date(),
							data : parseResults
						}));
					}

					if (!storeInCacheOnly){
						options.success(parseResults);
					}
				},
				function(parseResults){
					// failure
					if (!storeInCacheOnly){
						options.failure(parseResults);
					}
			});
		}
	});
	if (storeInCacheOnly){
		// this menas the callback has already been invoked on the caller
		return true;
	} else {
		return false;
	}

	function _diskCacheGet(key) {
		var cachedData = localStorage.getItem(key);

		if (cachedData !== null){
			cachedData = JSON.parse(cachedData);
		}
		return cachedData;
	}
	function _cacheGet(key) {
		var cachedData = memcache[key];
		return cachedData;
	}
}

function has24HoursPassedSince(theDate){
	var now = new Date();

	return (now.getTime() > theDate.getTime() + 1000 * 60 * 60 * 24);
}

// usage:
// var callbackArray = new waitForAll(finalCallback, callbackA, callbackB...);
// callbackArray[0] == callbackA
// callbackArray[0] == callbackB
function waitForAll(){
	var callback = arguments[0],
		completedResults = [],
		args = Array.prototype.slice.call(arguments, 1),
		that = this,
		funcwrapper = function(i){
			var func = args[i];
			return function(){
				var result = func.apply(that, arguments);
				completedResults.push(result);
				if (completedResults.length == args.length){
					result = {};
					for (var i = completedResults.length - 1; i >= 0; i--) {
						Ext.apply(result, completedResults[i]);
					}
					callback.call(that, result);
				}
			};
		};
	this.functions = [];
	for (var i = 0; i < args.length; i++) {
		this.functions.push(funcwrapper(i));
	}
}

