Ext.regController('Info', {

    // index action
	Index: function(options)
    {
        if ( ! this.infoView)
        {
            this.infoView = this.render({
                xtype: 'InfoView',
            });

            this.updateDate = this.infoView.query('#updateDate')[0];
            var that = this;

            this.infoView.query('#cancelInfoBtn')[0].setHandler(function(){
      			that.infoView.hide();
            });

            this.infoView.query('#updateAppDataBtn')[0].setHandler(function(){
    			checkFullDataFromWeb();
      			that.infoView.hide();
            });

            this.infoView.query('#displayDisclaimerBtn')[0].setHandler(function(){
      			that.infoView.hide();
    			displayDisclaimer(true);
            });

        }

        this.updateDate.update({
    		dateString : Ext.util.Format.format(OKnesset.strings.dataDate,
    						dateToString(new Date(parseInt(localStorage
    								.getItem("PartyDataDate")))))
    			});

    	this.infoView.show({
    		type : 'slide',
    		direction : 'up'
    	});
    },


});