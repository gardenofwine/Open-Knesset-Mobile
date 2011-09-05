var partyMap;
var memberMap;
var memberIdArray;
var partyNameArray;
var slimData;
var slimDataMap;
var stringImageListForDownload;

var OKnessetParser = new function(){
	var callbackFunction = null;

	function parseMembers(members){
	    memberMap = {};
	    memberIdArray = new Array();
	    stringImageListForDownload = "";

	    Ext.each(members, function(value, index){
	        // TODO - do not add memebers that are not "current"
	        if (typeof value == "undefined") {
	            console.log("member index " + index + " is undefined.");
	            return;
	        }
	        memberIdArray.push(value);
	        memberMap[value.id] = value;

	        //			$.each(value.bills, function(index, value){
	        //				if (parseInt(value.stage) < 4){
	        //				}
	        //			});
	        partyMap[value.party].members.push(value);

	        var slimMember = {
	            name: value.name
	        };
	        slimDataMap[value.party].members.push(slimMember);

	        stringImageListForDownload += "-O\nurl = \"" + value.img_url + "\"\n";
	    });
	}

	function onMemberComplete(options, success, response){
	    console.log("onMemeberComplete " + success);
	}

	function onMemberFailure(result, request){
	    console.warn("onMemberFailure " + result.responseText);
	}

	function storeMembers(result, request){
	    console.log("storeMembers");
	    parseMembers(JSON.parse(result.responseText));


		callbackFunction(partyNameArray, slimData);
	}

	// ***
	// Parties
	// ***
	function parseParties(parties){
	    partyNameArray = parties;
	    partyMap = {};
	    slimData = new Array();
	    slimDataMap = {};
		Ext.each(parties, function(value, index){
	        var slimParty = {
	            name: value.name,
	            members: []
	        };
	        slimDataMap["" + value.name] = slimParty;
	        slimData.push(slimParty);
	        partyMap["" + value.name] = value;
	        partyMap["" + value.name].members = new Array();
	    });
	}

	function onPartyComplete(options, success, response){
	    console.log("onPartyComplete " + success);
	}

	function onPartyFailure(result, request){
	    console.warn("onPartyFailure");
	}

	function storeParties( result, request){
	    console.log("storeParties");
	    parseParties(JSON.parse(result.responseText));

		Ext.Ajax.request({
		    url: 'http://www.oknesset.org/api/member/',
			success : storeMembers,
			timeout : 60000,
			failure : onMemberFailure,
		    callback: onMemberComplete
		});
	}

/*********
 * API function
 */
	this.loadData = function(callback){

		callbackFunction = callback;

		Ext.Ajax.request({
		    url: 'http://www.oknesset.org/api/party/',
			success : storeParties,
			failure : onPartyFailure,
		    callback: onPartyComplete
		});

	}

}

