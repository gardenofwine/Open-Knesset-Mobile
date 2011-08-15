var partyMap;
var memberMap;
var memberIdArray;
var partyNameArray;
var slimData;
var slimDataMap;

(function($){

	function parseMembers(members){
	    memberMap = {};
	    memberIdArray = new Array();

	    $.each(members, function(index, value){
	        if (typeof value == "undefined") {
	            console.log("member index " + index + " is undefined.");
	            return;
	        }
	        memberIdArray.push(value);
	        memberMap[value.id] = value;
			partyMap[value.party].members.push(value);

			var slimMember = {
				name : value.name
			};
			slimDataMap[value.party].members.push(slimMember);
	    });
	}

	function onMemberComplete(XMLHttpRequest, textStatus){
		console.log("onMemeberComplete " + textStatus);
	}

	function onMemberFailure(XMLHttpRequest, textStatus, errorThrown){
		console.warn("onMemberFailure " + textStatus);
	}

	function storeMembers(members){
		console.log("storeMember");
		parseMembers(JSON.parse(members));

		localStorage.setItem("slimData", JSON.stringify(slimData));
		localStorage.setItem("PartyData", JSON.stringify(partyNameArray));
	}

// ***
// Parties
// ***
	function parseParties(parties){
		partyNameArray = parties;
		partyMap = {};
		slimData = new Array();
		slimDataMap = {};
	    $.each(parties, function(index, value){
			var slimParty = {
				name : value.name,
				members : []
			};
			slimDataMap[""+value.name] = slimParty;
			slimData.push(slimParty);
			partyMap[""+value.name] = value;
			partyMap[""+value.name].members = new Array();
		});
	}

	function onPartyComplete(XMLHttpRequest, textStatus){
		console.log("onPartyComplete " + textStatus);
	}

	function onPartyFailure(XMLHttpRequest, textStatus, errorThrown){
		console.warn("onPartyFailure");
	}

	function storeParties(parties){
		console.log("storeParties");
		parseParties(JSON.parse(parties));

		$.ajax({
			url: "http://www.oknesset.org/api/member/",
			timeout: 60000,
			dataType: "text",
			cache: false,
			error: onMemberFailure,
			complete: onMemberComplete,
			success: storeMembers
		});
	}

	$.ajax({
		url: "http://www.oknesset.org/api/party/",
		timeout: 30000,
		dataType: "text",
		cache: false,
		error: onPartyFailure,
		complete: onPartyComplete,
		success: storeParties
	});


//	parseParties(initialParties);
//	parseMembers(initialMembers);
})(jQuery);
