Ext.regModel('Party', {
    fields: ['name']
});

OKnesset.PartyStore = new Ext.data.Store({
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
    data: slimData
});

Ext.regModel('Member', {
    fields: ['name']
});

OKnesset.MemberStore = new Ext.data.Store({
    model: 'Member',
//    data: initialData,
    sorters: 'name'
});
