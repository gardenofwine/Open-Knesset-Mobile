Ext.regModel('Protocol2', {
	fields: ['topics','protocol_text','protocol','committee','date', 'mks_attended']
});

OKnesset.Protocol2Store = new Ext.data.Store({
	model: 'Protocol2'
});

Ext.regModel('ProtocolMembers', {
	fields: ['name','url']
});

OKnesset.ProtocolMembersStore = new Ext.data.Store({
	model: 'ProtocolMembers'
});

Ext.regModel('ProtocolTopics', {
	fields: ['topics','protocol_text','protocol','committee','date', 'mks_attended']
});

OKnesset.ProtocolTopicsStore = new Ext.data.Store({
	model: 'ProtocolTopics'
});

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

//add all committees control

Ext.regModel('AllCommittees', {
	fields: ['name']
});

OKnesset.AllCommitteesStore = new Ext.data.Store({
	model: 'AllCommittees'
	//data: CommitteesData
});

Ext.regModel('Member', {
	fields: ['name', 'party_id']
});

OKnesset.MemberStoreSorters = {
	partyOrdinal : {
		property : 'party_ordinal',
		direction : 'ASC'
	},
	alphabetical : {
		property : 'name',
		direction : 'ASC'
	}	
}

OKnesset.MemberStore = new Ext.data.Store({
	model: 'Member',
	data : slimMembers,
	sorters : [OKnesset.MemberStoreSorters.partyOrdinal],
	groupField : 'name',
	getGroupString : function(record) {
		var name = record.get('name');
		return name.substring(0,1);
	}

});

Ext.regModel('MemberBills', {
	fields: ['title']
});

OKnesset.MemberBillsStore = new Ext.data.Store({
	model: 'MemberBills',
	filters : {
	filterFn: function(item) {
			return parseInt(item.data.stage, 10) >= 2;
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
			{title:OKnesset.strings.partiesTitle,page:"PartyList/Index", type : 'page'},
			{title:OKnesset.strings.AgendaTitle,page:"AgendaList/Index", type: 'page'},
			{title:OKnesset.strings.committees,page:"AllCommittees/Index", type: 'page'},
			{title:OKnesset.strings.about,page:"Info/Index", type: 'dialog'}
		]
	});

Ext.regModel('CommitteeDetailsMembersList', {
	fields: ['name','presence']
});

OKnesset.CommitteeDetailsMembersListStore = new Ext.data.Store({
	model: 'CommitteeDetailsMembersList'
});

Ext.regModel('CommitteeDetailsMeetingsList', {
	fields: ['title','date','MeetingType']
});

OKnesset.CommitteeDetailsMeetingsListStore = new Ext.data.Store({
	model: 'CommitteeDetailsMeetingsList',
	sorters: {
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
	sorters: {
		property: 'VoteType',
		direction: 'DESC'
	},
	groupField : 'VoteType',
	getGroupString : function(record) {
		return (record.get('VoteType') == 'favor')?
			OKnesset.strings.favor :
			OKnesset.strings.against;
	}
});

//Votes
Ext.regModel('Voted', {
	fields: ['name']
});

OKnesset.VotedStore = new Ext.data.Store({
	model: 'Voted',
	sorters: {
		property: 'VoteType',
		direction: 'DESC'
	},
	groupField : 'VoteType',
	getGroupString : function(record) {
		switch (record.get('VoteType')) {
			case 'favor':
				return OKnesset.strings.favor;
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
	sorters: {
		property: 'MemberType',
		direction: 'DESC'
	},
	groupField : 'MemberType',
	getGroupString : function(record) {
		switch (record.get('MemberType')) {
			case 'founder':
				return OKnesset.strings.billFounder;
			case 'joined':
				return OKnesset.strings.billJoiner;
		}
	}
});


//AgendaList
Ext.regModel('AgendaList', {
	fields: ['name']
});

OKnesset.AgendaListStore = new Ext.data.Store({
	model: 'AgendaList',
	data: slimAgendas,
	sorters: {
		property: 'name'
	}
});

//AgendaDetails
Ext.regModel('AgendaDetails', {
	fields: ['description','MostSupportMember','MostSupportParty']
});

OKnesset.AgendaDetailsStore = new Ext.data.Store({
	model: 'AgendaDetails'
});

//AgendaVoteList
Ext.regModel('AgendaVoteList', {
   fields: ['title','score','scorestring','importancestring','importance']
});

OKnesset.AgendaVoteListStore = new Ext.data.Store({
	model: 'AgendaVoteList',
	sorters: [
		{
			property: 'score',
			direction: 'DESC'
		},
		{
			property: 'importance',
			direction: 'DESC'
		}
	],
	groupField : 'scorestring'
});

//AgendaMembersSupportList
Ext.regModel('AgendaMembersSupportList', {
   fields: ['name','score']
});

OKnesset.AgendaMembersSupportListStore = new Ext.data.Store({
	model: 'AgendaMembersSupportList',
	sorters: [
		{
			property: 'score',
			direction: 'DESC'
		}
	]
});
//AgendaPartiesSupportList
Ext.regModel('AgendaPartiesSupportList', {
   fields: ['name','score']
});

OKnesset.AgendaPartiesSupportListStore = new Ext.data.Store({
	model: 'AgendaPartiesSupportList',
	sorters: [
		{
			property: 'score',
			direction: 'DESC'
		}
	]
});