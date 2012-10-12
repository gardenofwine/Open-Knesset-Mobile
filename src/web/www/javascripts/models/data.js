Ext.regModel('Party', {
    fields: ['name']
});

OKnesset.PartyStore = new Ext.data.Store({
    model: 'Party',
    sorters: [
        {
            property: 'is_coalition',
            direction: 'DESC'
        },
        {
            property: 'number_of_seats  ',
            direction: 'DESC'
        }
    ],
    data: slimPartyData,
    groupField : 'is_coalition',
    getGroupString : function(record) {
        return record.get('is_coalition')?
            OKnesset.strings.coalition :
            OKnesset.strings.opposition;
    }
});

Ext.regModel('Member', {
    fields: ['name', 'party_id']
});

OKnesset.MemberStore = new Ext.data.Store({
    model: 'Member',
    data : slimMembers,
	sorters : [{
        property : 'party_ordinal',
        direction : 'ASC'
    }]
});

Ext.regModel('MemberBills', {
    fields: ['title']
});

OKnesset.MemberBillsStore = new Ext.data.Store({
    model: 'MemberBills',
	filters : {
    filterFn: function(item) {
    	    return parseInt(item.data.stage) >= 2;
 	   }
	},
    sorters: {
			property: 'stage',
			direction: 'DESC'
			},
	getGroupString : function(record) {
        return record.get('stage_text');
    }
});

Ext.regModel('MemberCommittees', {
    fields: ['title']
});

OKnesset.MemberCommitteesStore = new Ext.data.Store({
    model: 'MemberCommittees'
});

OKnesset.menuStore = new Ext.data.Store({
    model: Ext.regModel('', {
        fields: [
            {name:'title', type:'string'},
            {name:'page', type:'string'},
            {name:'type', type:'string'}            
        ]
    }),
    data: [
        {title:"parties",page:"PartyList/Index", type : 'page'},
        {title:"email",page:"Email/Index", type: 'dialog'},
        ]
    });
