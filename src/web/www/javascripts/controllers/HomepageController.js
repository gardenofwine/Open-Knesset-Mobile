OKnesset.app.controllers.Homepage = Ext.regController('Homepage', {

    // index action
    Index: function(options){
        if (!this.homepage) {
            this.homepage = this.render({
                xtype: 'HomePage',
            });
            this.homepage.items.get(1).items.getByKey('homepageAgendaBtn').setHandler(function(){
                OKnesset.app.controllers.navigation.dispatchPanel('AgendaList/Index');
            });
            this.homepage.items.get(1).items.getByKey('homepagePartiesBtn').setHandler(function(){
                OKnesset.app.controllers.navigation.dispatchPanel('PartyList/Index');
            });
            this.homepage.items.get(2).items.getByKey('homepageCommitteesBtn').setHandler(function(){
                OKnesset.app.controllers.navigation.dispatchPanel('AllCommittees/Index');
            });
            this.homepage.items.get(2).items.getByKey('homepageAboutBtn').setHandler(function(){
                OKnesset.app.controllers.navigation.dispatchDialog('Info/Index');
            });
        }
        console.log("this.application.viewport",this.application.viewport);
        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.openKnessetTitle);
        this.application.viewport.setActiveItem(this.homepage, options.animation);
    },
});
