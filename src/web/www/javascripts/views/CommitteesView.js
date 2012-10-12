Ext.define('OKnesset.app.views.CommitteesView', {
    extend: 'Ext.Panel',

    config: {
        id: 'CommitteesView',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        listeners: {
        },
        currentMemeber: null,
    },

    initialize: function() {
        this.callParent(arguments);
        this.committeeList = new OKnesset.app.views.CommitteesView.CommitteeList();
        this.items = [this.committeeList];
    },
});

Ext.define('OKnesset.app.views.CommitteesView.CommitteeList', {
    extend: 'Ext.List',

    config: {
        id: 'MemberCommitteeList',
        itemTpl: '<div>{title}</div>',
        store: OKnesset.MemberCommitteesStore,
        layout: 'fit',
        deferEmptyText: false,
        flex: 1.5
    },
});
