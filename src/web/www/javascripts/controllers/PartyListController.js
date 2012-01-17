Ext.regController('PartyList', {

    // index action
	Index: function(options)
    {
        if ( ! this.partyListView)
        {
            this.partyListView = this.render({
                xtype: 'PartyListView',
            });
            var partyList = this.partyListView.query('#PartyList')[0];
            partyList.addListener('itemtap',
            	function(that, index, item, e) {
					var record = that.store.getAt(index);
					dispatchPanel('Party/Index', options.historyUrl, record.data);
				});
        }

        var backBtn = this.application.viewport.query('#backBtn')[0];
        if (options.back) {
            backBtn.setHandler(function() {
    			dispatchBack(options.back);
    		});
        	backBtn.show();
        } else {
        	backBtn.hide();
    	}


        this.application.viewport.query('#toolbar')[0].setTitle(this.partyListView.title);
        this.application.viewport.setActiveItem(this.partyListView, options.animation);
    },
});