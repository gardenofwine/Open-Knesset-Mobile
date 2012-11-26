OKnesset.app.views.CommitteeDetailsView = new Ext.extend(OKnesset.Panel, {
    id: 'CommitteeDetailsView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    scroll: 'vertical',
    listeners: {
    },
    currentMemeber: null,
    initComponent: function(){
        this.committeeMembersList = new OKnesset.app.views.CommitteeDetailsView.committeeMembersList();
        this.committeeMeetings = new OKnesset.app.views.CommitteeDetailsView.committeeMeetings();
        this.items = [
            new Ext.Panel({
                  id: "committeeName",
                  cls: 'titlePanel',
                  height : "2em",
                  padding: '5',
                  tpl:'<div>{name}</div>'
            }),
            new Ext.Panel({
                  id: "committeeDescription",
                  padding: '5',
                  tpl:'<div>{description}</div>'
            }),
            new Ext.Panel({
                  id: 'committeeMembers',
                  cls: 'subtitlePanel',
                  height : "2em",
                  padding: '5',
                  html:'<div align="right">' + OKnesset.strings.committeeMembers+ '</div>'
            }),
            this.committeeMembersList,
            new Ext.Panel({
                  id: 'committeeMeetings',
                  cls: 'subtitlePanel',
                  height : "2em",
                  padding: '5',
                  html:'<div align="right">' + OKnesset.strings.meetings + '</div>'
            }),
             this.committeeMeetings];

        OKnesset.app.views.CommitteeDetailsView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('CommitteeDetailsView', OKnesset.app.views.CommitteeDetailsView);

OKnesset.app.views.CommitteeDetailsView.committeeMembersList = new Ext.extend(Ext.List, {
    id: 'CommitteeMembersList',
    itemTpl: '<div>{name}</div><div class="Votescounters">'+ OKnesset.strings.presence +'{presence}%</div>',
    store: OKnesset.CommitteeDetailsMembersListStore,
    scroll: false,
    onItemDisclosure: true,
    deferEmptyText: false
});

OKnesset.app.views.CommitteeDetailsView.committeeMeetings = new Ext.extend(Ext.List, {
    id: 'committeeMeetings',
    itemTpl: '<div>{title}</div><div class="timeString">{date}</div>',
    store: OKnesset.CommitteeDetailsMeetingsListStore,
    scroll: false,
    grouped: true,
    onItemDisclosure: true,
    deferEmptyText: false
});
