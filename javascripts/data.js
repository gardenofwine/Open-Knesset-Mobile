Ext.regModel('Party', {
    fields: ['id']
});

ListDemo.PartyStore = new Ext.data.Store({
    model: 'Party',
    sorters: 'name',
    getGroupString : function(record) {
        return record.get('name')[0];
    },
//	getGroupId : function(group) {
//        return group.name.toLowerCase();
//    },
    data: initialParties
});
