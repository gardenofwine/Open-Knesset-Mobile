Ext.regController('AllCommittees', {

	Index: function(options) {
    	//console.log('ofir');
    	
        if ( ! this.AllCommitteesView)
        {
            this.AllCommitteesView = this.render({
                xtype: 'AllCommitteesView',
            });
      
        this.AllCommitteesView.addListener('itemtap',
            	function(that, index, item, e) {
					var record = that.store.getAt(index);
					OKnesset.app.controllers.navigation.dispatchPanel('Committee/Index/' + record.data.id, options.historyUrl);
				});
        }
        console.log('Ok');
		Ext.util.JSONP.request({
		    url: 'http://www.oknesset.org/api/v2/committee/',
		    params:{format:'jsonp'},
		    callbackKey : "callback",
			callback : function(data){
		    	OKnesset.AllCommitteesStore.loadData(data.objects);
		    
		    	},
			onFailure : function(){console.log("Failure!");}
		});
   
        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.committees);
        this.application.viewport.setActiveItem(this.AllCommitteesView, options.animation);
},
	refresh : function() {
		this.AllCommitteesView.refresh();
	 }
 });