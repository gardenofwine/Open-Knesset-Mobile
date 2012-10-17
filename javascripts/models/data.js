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
    data: slimData,
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

Ext.regModel('MemberCommittees', {
    fields: ['title']
});

OKnesset.MemberCommitteesStore = new Ext.data.Store({
    model: 'MemberCommittees'
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
            direction: 'ASC'
        },
    groupField : 'VoteType',
    getGroupString : function(record) {
        return (record.get('VoteType') == 'for')?
            OKnesset.strings.for :
            OKnesset.strings.against;
    }
});

//Votes
Ext.regModel('Votes', {
    fields: ['title', 'for_votes', 'against_votes']
});

OKnesset.VotesStore = new Ext.data.Store({
    model: 'Votes'
});