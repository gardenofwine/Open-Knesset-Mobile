var partyMap;
var memberMap;
var memberIdArray;
var partyNameArray;
var slimData;
var slimDataMap;
var stringImageListForDownload;

(function($){

	function parseMembers(members){
	    memberMap = {};
	    memberIdArray = new Array();
		stringImageListForDownload = "";

	    $.each(members, function(index, value){
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
				name : value.name
			};
			slimDataMap[value.party].members.push(slimMember);

			stringImageListForDownload += "-O\nurl = \"" + value.img_url + "\"\n";
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
		// DEBUG HERE
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
