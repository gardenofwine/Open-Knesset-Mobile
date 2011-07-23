var partyMap;
var memberMap;
var memberIdArray;
var partyNameArray;

(function($){

	function parseParties(parties){
		partyNameArray = parties;
		partyMap = {};
	    $.each(parties, function(index, value){
			partyMap[""+value.name] = value;
			partyMap[""+value.name].members = new Array();
		});
	}

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
	    });
	}

//	parseParties(initialParties);
//	parseMembers(initialMembers);
})(jQuery);

Ext.regModel('Party', {
    fields: ['id']
});

ListDemo.PartyStore = new Ext.data.Store({
    model: 'Party',
    //sorters: 'name',
	sorters: [
		 	{
			property: 'members.length',
			direction: 'ASC'
			}
	],
//	getGroupString : function(record) {
//        return record.get('name')[0];
//    },
    data: initialData
});

