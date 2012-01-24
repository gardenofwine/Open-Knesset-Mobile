Ext.regController('PartyList', {

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
					dispatchPanel('Party/Index/' + record.data.id, options.historyUrl);
				});
        }

        this.application.viewport.query('#toolbar')[0].setTitle(this.partyListView.title);
        this.application.viewport.setActiveItem(this.partyListView, options.animation);
    },

    getReviewButtonText : function(){
    	return OKnesset.strings.emailPartyList;
    },

	refresh : function() {
		OKnesset.app.PartyList.refresh();
	}
});