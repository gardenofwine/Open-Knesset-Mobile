Ext.regController('MarketReview', {

    // index action
	Index: function(options)
    {
        if ( ! this.view)
        {
            this.view = this.render({
                xtype: 'MarketReviewView',
            });

            this.view.dockedItems.getAt(1).items.getByKey('letsGoBtn').setHandler(function(){
                OKnesset.app.controllers.navigation.dispatchBack();
                this.openMarket();
            }, this);

            this.view.dockedItems.getAt(1).items.getByKey('notNowBtn').setHandler(function(){
                OKnesset.app.controllers.navigation.dispatchBack();
            }, this);
            
            this.view.dockedItems.getAt(1).items.getByKey('dontShowAgainBtn').setHandler(function(){
            	localStorage.setItem("marketReviewCounter", -1);
            	OKnesset.app.controllers.navigation.dispatchBack();
            });
        }

        var infoTitle = OKnesset.strings.infoDialog.MarketReviewView.title; 
        var infoText = OKnesset.strings.infoDialog.MarketReviewView.text;

        // don't track if the panal was reached by pressing 'back'
        if (options.pushed){
        	// TODO: support GATrackPage for MarketReview
            //GATrackPage('InfoView', this.emailSubject);
        }

        this.view.dockedItems.getAt(0).setTitle(infoTitle);
        this.view.items.getByKey('pageDescription').update({text:infoText});
    	this.view.show(options.animation);

    },
    
    openMarket : function() {
        OKnesset.log("Open market for review");
        if (isPhoneGap()) {
            // TODO: add GATrackEvent
            if (isiOS()) {
                // TODO: open app store
            } else if (isAndroid()) {
                window.plugins.webintent.startActivity({
                    action : WebIntent.ACTION_VIEW,
					url: 'market://details?id=org.oknesset',
                }, function() {
                    // success callback
                }, function() {
                    OKnesset.log("Failed to open market for review");
                });
            }
        }
    }  
});