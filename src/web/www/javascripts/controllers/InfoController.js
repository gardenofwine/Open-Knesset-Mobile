Ext.regController('Info', {

    // index action
	Index: function(options)
    {
        if ( ! this.view)
        {
            this.view = this.render({
                xtype: 'InfoView',
            });

            this.updateDate = this.view.query('#updateDate')[0];
            var that = this;

            this.view.query('#cancelInfoBtn')[0].setHandler(function(){
            	OKnesset.app.controllers.navigation.dispatchBack();
            });

            this.view.query('#updateAppDataBtn')[0].setHandler(function(){
    			checkFullDataFromWeb();
    			OKnesset.app.controllers.navigation.dispatchBack();
            });

            this.view.query('#displayDisclaimerBtn')[0].setHandler(function(){
            	OKnesset.app.controllers.navigation.dispatchBack();
            	OKnesset.app.controllers.navigation.dispatchDialog('Disclaimer/Index');
            });
        }

        this.updateDate.update({
    		dateString : Ext.util.Format.format(OKnesset.strings.dataDate,
    						dateToString(new Date(parseInt(localStorage
    								.getItem("DataDate")))))
    			});

    	this.view.show(options.animation);

    },
});