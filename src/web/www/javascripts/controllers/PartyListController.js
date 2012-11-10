Ext.regController('PartyList', {

	Index: function(options)
    {
        if ( ! this.partyListView)
        {
            this.partyListView = this.render({
                xtype: 'PartyListView',
            });

            this.partyListView.addListener('itemtap',
            	function(that, index, item, e) {
					var record = that.store.getAt(index);		
					OKnesset.app.controllers.navigation.dispatchPanel('Party/Index/' + record.data.id, options.historyUrl);
				});
        }

        getAPIData({
            apiKey:'parties',
            success:function(data){
                OKnesset.PartyStore.loadData(data);
               // that.memberView.getComponent('loading').hide();
            },
            failure:function(result){
                console.log("error receiving parties data. ", result);
            }
        });


        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.partiesTitle);
        this.application.viewport.setActiveItem(this.partyListView, options.animation);
    },

    getReviewButtonText : function(){
    	return OKnesset.strings.emailPartyList;
    },

	refresh : function() {
		this.partyListView.refresh();
	}
});