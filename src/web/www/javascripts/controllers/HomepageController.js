OKnesset.app.controllers.Homepage = Ext.regController('Homepage', {

    // index action
    Index: function(options){
        if (!this.homepage) {
            this.homepage = this.render({
                xtype: 'HomePage',
            });
            this.homepage.query('#homepageAgendaBtn')[0].setHandler(function(){
                OKnesset.app.controllers.navigation.dispatchPanel('AgendaList/Index');
            });
            this.homepage.query('#homepagePartiesBtn')[0].setHandler(function(){
                OKnesset.app.controllers.navigation.dispatchPanel('PartyList/Index');
            });
            this.homepage.query('#homepageCommitteesBtn')[0].setHandler(function(){
                OKnesset.app.controllers.navigation.dispatchPanel('AllCommittees/Index');
            });
            this.homepage.query('#homepageMembersBtn')[0].setHandler(function(){
                if (OKnesset.debug) {
                    time.start('Member panel');
                    time.report();
                }
                OKnesset.app.controllers.navigation.dispatchPanel('MemberList/Index');
            });
            this.homepage.query('#electionsBtn')[0].setHandler(function(){
                OKnesset.app.controllers.navigation.dispatchPanel('Election/Index');
            });
        }
        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.openKnessetTitle);
        this.application.viewport.setActiveItem(this.homepage, options.animation);
    },
});
