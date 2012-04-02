OKnesset.app.views.CommitteesView = new Ext.extend(Ext.Panel, {
    id: 'CommitteesView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    listeners: {
    },
    currentMemeber: null,
    initComponent: function(){
        this.committeeList = new OKnesset.app.views.CommitteesView.CommitteeList();
        this.items = [this.committeeList];
        OKnesset.app.views.CommitteesView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('CommitteesView', OKnesset.app.views.CommitteesView);

OKnesset.app.views.CommitteesView.CommitteeList = new Ext.extend(Ext.List, {
    id: 'MemberCommitteeList',
    itemTpl: '<div>{title}</div>',
    store: OKnesset.MemberCommitteesStore,
    layout: 'fit',
    deferEmptyText: false,
    flex: 1.5
});









