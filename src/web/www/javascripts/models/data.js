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
            property: 'members.length',
            direction: 'DESC'
        }
    ],
    //data: slimData,

    groupField : 'is_coalition',
    getGroupString : function(record) {
        return record.get('is_coalition')?
            OKnesset.strings.coalition :
            OKnesset.strings.opposition;
    }
});

Ext.regModel('Member', {
    fields: ['name']
});

OKnesset.MemberStore = new Ext.data.Store({
    model: 'Member',
	sorters : []
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

//Committees

Ext.regModel('MemberCommittees', {
    fields: ['title']
});

OKnesset.MemberCommitteesStore = new Ext.data.Store({
    model: 'MemberCommittees'
});


// Ext.regModel('CommitteeDetails', {
//     fields: ['title']
// });

// OKnesset.CommitteeDetailsStore = new Ext.data.Store({
//     model: 'CommitteeDetails',
//     data: committeesData
// });

Ext.regModel('CommitteeDetailsMembersList', {
    fields: ['name','presence']
});

OKnesset.CommitteeDetailsMembersListStore = new Ext.data.Store({
    model: 'CommitteeDetailsMembersList',
});

Ext.regModel('CommitteeDetailsMeetingsList', {
    fields: ['title','date','MeetingType']
});

OKnesset.CommitteeDetailsMeetingsListStore = new Ext.data.Store({
    model: 'CommitteeDetailsMeetingsList',
    sorters:
    {
        property: 'MeetingType',
        direction: 'DESC'
    },
    groupField : 'MeetingType',
    getGroupString : function(record) {
        return (record.get('MeetingType') == 'recent')?
            OKnesset.strings.recent_meetings :
            OKnesset.strings.future_meetings;
    }
});



//MemberVotes
Ext.regModel('MemberVotes', {
    fields: ['title','against_votes_count','for_votes_count','time_string']
});

OKnesset.MemberVotesStore = new Ext.data.Store({
    model: 'MemberVotes',
    sorters:
        {
            property: 'VoteType',
            direction: 'DESC'
        },
    groupField : 'VoteType',
    getGroupString : function(record) {
        return (record.get('VoteType') == 'for')?
            OKnesset.strings.for :
            OKnesset.strings.against;
    }
});

//Votes
Ext.regModel('Voted', {
    fields: ['name']
});

OKnesset.VotedStore = new Ext.data.Store({
    model: 'Voted',
    sorters:
        {
            property: 'VoteType',
            direction: 'DESC'
        },
    groupField : 'VoteType',
    getGroupString : function(record) {
        switch (record.get('VoteType'))
        {

            case 'for':
                return OKnesset.strings.for;
            case 'against':
                return OKnesset.strings.against;
            case 'abstain':
                return OKnesset.strings.abstain;

        }
    }    
});

//bills
Ext.regModel('billMakers', {
    fields: ['name']
});

OKnesset.billMakersStore = new Ext.data.Store({
    model: 'billMakers',
    sorters:
        {
            property: 'MemberType',
            direction: 'DESC'
        },
    groupField : 'MemberType',
    getGroupString : function(record) {
        switch (record.get('MemberType'))
        {

            case 'founder':
                return OKnesset.strings.billFounder;
            case 'joined':
                return OKnesset.strings.billJoiner;
        }
    }    
});