OKnesset.app.views.memberVotesView = new Ext.extend(Ext.Panel, {
    id: 'memberVotesView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    listeners: {
    },
    currentMemeber: null,
    initComponent: function(){
        this.memberVotesList = new OKnesset.app.views.memberVotesView.VotesList();
        this.items = [
                new Ext.Panel({
                  id: "memberVotesLoading",
                  cls: 'titlePanel',
                  height : "2em",
                  padding: '5',
                  html:'<div class="hebTitle">'+ OKnesset.strings.LoadingPlsWait + '</div>'
                }),
                this.memberVotesList];
        OKnesset.app.views.memberVotesView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('memberVotesView', OKnesset.app.views.memberVotesView);

OKnesset.app.views.memberVotesView.VotesList = new Ext.extend(Ext.List, {
    id: 'MemberVotesList',
    itemTpl: '<div class="memberVotesListItem"><span class="memberVotesListTitle">{title}</span><div class="timeString">{time_string}</div><br /><div class="Votescounters">' + OKnesset.strings.for +':{for_votes_count} ' + OKnesset.strings.against + ':{against_votes_count}</div></div>',
    store: OKnesset.MemberVotesStore,
    grouped: true,
    onItemDisclosure: true,
   // layout: 'fit',
    deferEmptyText: false,
    flex: 1.5
});
