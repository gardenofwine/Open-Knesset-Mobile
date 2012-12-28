OKnesset.app.views.CommitteeMembersView = new Ext.extend(OKnesset.Panel, {
    id: 'CommitteeMembersView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    scroll: 'vertical',
    committeeMembersList: undefined,

    initComponent: function () {
        this.committeeMembersList = new OKnesset.app.views.CommitteeMembersView.committeeMembersList();
        this.items = [
            this.committeeMembersList
        ];

        OKnesset.app.views.CommitteeMembersView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('CommitteeMembersView', OKnesset.app.views.CommitteeMembersView);

OKnesset.app.views.CommitteeMembersView.committeeMembersList = new Ext.extend(Ext.List, {
    id: 'CommitteeMembersList',
    itemTpl: '<div>{name}</div><div class="Votescounters">' + OKnesset.strings.presence + '{presence}%</div>',
    store: OKnesset.CommitteeDetailsMembersListStore,
    scroll: false,
    onItemDisclosure: true,
    deferEmptyText: false
});
