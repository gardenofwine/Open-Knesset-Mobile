Ext.regController('AgendaPartiesSupportList', {

	Index: function(options) {

        if ( ! this.AgendaPartiesSupportListView)
        {
            this.AgendaPartiesSupportListView = this.render({
                xtype: 'AgendaPartiesSupportListView',
            });

            this.AgendaPartiesSupportListView.addListener('itemtap',
            	function(that, index, item, e) {
				var	record = that.store.getAt(index);
			    OKnesset.app.controllers.navigation.dispatchPanel('Party/Index/'+ OKnesset.app.controllers.Party.getIdFromAbsoluteUrl(record.data.absolute_url), options.historyUrl);
			});

        }

        OKnesset.PartyStore.clearFilter(true);
        var findData = OKnesset.AgendaListStore.findBy(function(r){return r.data.id === parseInt(options.id)});

       findData = OKnesset.AgendaListStore.getAt(findData);


        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.supportparties + findData.data.name);
        this.application.viewport.setActiveItem(this.AgendaPartiesSupportListView, options.animation);


    },
//	refresh : function() {
    //   this.AgendaPartiesSupportList = this.AgendaPartiesSupportListView.query('#AgendaPartiesSupportList')[0];
	//	this.AgendaPartiesSupportList.refresh();
	// }
 });