OKnesset.app.views.VoteDetailsView = new Ext.extend(Ext.Panel, {
    id: 'VoteDetailsView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    currentMember: null,
    initComponent: function(){
        this.MemberVotedInfoWrapper = new OKnesset.app.views.VoteDetailsView.MemberVotedInfoWrapper();
        this.membersVoted = new OKnesset.app.views.VoteDetailsView.membersVoted();
        this.items = [this.MemberVotedInfoWrapper, this.membersVoted];
        OKnesset.app.views.VoteDetailsView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('VoteDetailsView', OKnesset.app.views.VoteDetailsView);

OKnesset.app.views.VoteDetailsView.MemberVotedInfoWrapper = new Ext.extend(Ext.Panel, {
    id: 'MemberVotedInfoWrapper',
    //layout: 'fit',
    //minHeight:'500px',
    //flex: 1,
    scroll: 'vertical',
    flex:1,
    items : [
        {
            id: 'voteTitle',
            padding: '5',
            cls: 'titlePanel',
            tpl: '<div class="hebTitle">{title}</div>'
        },
        {
            id: 'voteDescription',
            padding: '5',
            tpl: '<div class="description">{summary}</div>'
        }
    ]
    // initComponent: function(){
    //     this.votesTitle = new OKnesset.app.views.VoteDetailsView.votesTitle();
    //     this.votesDescription = new OKnesset.app.views.VoteDetailsView.votesDescription();
    //     this.items = [this.votesTitle, this.votesDescription];
    //     OKnesset.app.views.VoteDetailsView.MemberVotedInfoWrapper.superclass.initComponent.apply(this, arguments);
    // }
});



// OKnesset.app.views.VoteDetailsView.votesTitle = new Ext.extend(Ext.Panel, {
//     id: 'voteTitle',
//     padding: '5',
//     cls: 'titlePanel',
//     tpl: '<div class="hebTitle">{title}</div>'
// });


// OKnesset.app.views.VoteDetailsView.votesDescription = new Ext.extend(Ext.Panel, {
//     id: 'voteDescription',
//     padding: '5',
//     tpl: '<div class="description">{summary}</div>'
// });

OKnesset.app.views.VoteDetailsView.membersVoted = new Ext.extend(Ext.List, {
    id: 'membersVotedList',
    flex:2,
    store: OKnesset.VotedStore,
    itemTpl: '<div>{name}</div>',
    // scroll: false,
    // scroll: 'vertical',
    grouped: true,
    onItemDisclosure: true,
    deferEmptyText: false,
});
