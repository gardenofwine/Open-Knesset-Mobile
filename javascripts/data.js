Ext.regModel('Party', {
    fields: ['name']
});

OKnesset.PartyStore = new Ext.data.Store({
    model: 'Party',
	sorters: [
		 	{
			property: 'members.length',
			direction: 'ASC'
			}
	],
    data: slimData
});

Ext.regModel('Member', {
    fields: ['name']
});

OKnesset.MemberStore = new Ext.data.Store({
    model: 'Member',
    sorters: 'name'
});

Ext.regModel('MemberBills', {
    fields: ['title']
});

OKnesset.MemberBillsStore = new Ext.data.Store({
    model: 'MemberBills',
    sorters: 'title'
});

