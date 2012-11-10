Ext.regController('AgendaList', {

	Index: function(options) {
    	
        if ( ! this.AgendaListView)
        {
            this.AgendaListView = this.render({
                xtype: 'AgendaListView',
            });
            
          this.AgendaListView.addListener('itemtap',
            	function(that, index, item, e) {
				var	record = that.store.getAt(index);
				OKnesset.app.controllers.navigation.dispatchPanel('AgendaDetails/Index/'+ record.data.id, options.historyUrl);
				});
      
        }

        getAPIData({
            apiKey:'agendas',
            success:function(data){
				OKnesset.AgendaListStore.loadData(data);            	
                // that.memberView.getComponent('loading').hide();
            },
            failure:function(result){
                console.log("error receiving memebers data. ", result);
            }
        });

        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.AgendaTitle);
        this.application.viewport.setActiveItem(this.AgendaListView, options.animation);
        
    },
    
	refresh : function() {
		// TODO implement correctly - now that Agenda list is the first panel inteh application
		// var AgendaList = this.AgendaListView.query('#AgendaList')[0];	
		// this.AgendaListView.refresh();
	 }
	 
 });
