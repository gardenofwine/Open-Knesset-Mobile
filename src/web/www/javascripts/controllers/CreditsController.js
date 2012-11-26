Ext.regController('Credits', {

    // index action
	Index: function(options)
    {
        if ( ! this.view)
        {
            this.view = this.render({
                xtype: 'CreditsView',
            });

            var mask = this.mask = new Ext.LoadMask(Ext.getBody(), {msg:OKnesset.strings.showDisclaimer});
            this.view.addListener('hide', function(){mask.hide();});

            this.view.query('#creditsCancel')[0].setHandler(function(){
    			OKnesset.app.controllers.navigation.dispatchBack();
            });

        }

        GATrackPage('CreditsView', '');

        this.view.show(options.animation);
        this.mask.show();
    },

    openCreditPanel : function(){
        console.log("credits");
    }

});