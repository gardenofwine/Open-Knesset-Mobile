Ext.regController('AllCommittees', {

	Index: function(options) {
        if ( ! this.AllCommitteesView)
        {
            this.AllCommitteesView = this.render({
                xtype: 'AllCommitteesView',
            });

        this.AllCommitteesView.addListener('itemtap',
            	function(that, index, item, e) {
					var record = that.store.getAt(index);
					OKnesset.app.controllers.navigation.dispatchPanel('CommitteeDetails/Index/' + record.data.id, options.historyUrl);
				});
        }

        getAPIData({
            apiKey : "committees",
            success : function(data){
		    	OKnesset.AllCommitteesStore.loadData(data);
            },
            failure: function(){
                console.log("Failure loading committees json from server");
            }
        })

        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.committees);
        this.application.viewport.setActiveItem(this.AllCommitteesView, options.animation);
},
	refresh : function() {
		this.AllCommitteesView.refresh();
	 }
 });