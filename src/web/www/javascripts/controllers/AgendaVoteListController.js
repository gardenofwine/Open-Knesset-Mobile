Ext.regController('AgendaVoteList', {

	Index: function(options) {
    	
        if ( ! this.AgendaVoteListView)
        {
            this.AgendaVoteListView = this.render({
                xtype: 'AgendaVoteListView',
            });
            
          this.AgendaVoteListView.addListener('itemtap',
            	function(that, index, item, e) {
					var record = that.store.getAt(index);
					OKnesset.app.controllers.navigation.dispatchPanel('Vote/Index/' + record.data.id, options.historyUrl);
					
				});

        }

        var findData = OKnesset.AgendaListStore.findBy(function(r){return r.data.id === parseInt(options.id)});
        // console.log(options.id);
       // console.log(findData);
        findData = OKnesset.AgendaListStore.getAt(findData);

     console.log(findData.data.votes);
			for (i=0 ; i<=findData.data.votes.length-1; i++)
			  {	
				if (findData.data.votes[i].score==1)
					{findData.data.votes[i].scorestring=OKnesset.strings.fullsupport}
					
			    if (findData.data.votes[i].score==-1)
			   		{findData.data.votes[i].scorestring=OKnesset.strings.fullresistance}
			   		
			    if (findData.data.votes[i].score==0.5) 
			        {findData.data.votes[i].scorestring=OKnesset.strings.partialsupport}	
			        
			    if (findData.data.votes[i].score==-0.5) 
			        {findData.data.votes[i].scorestring=OKnesset.strings.partialresistance}	
			        
			    if (findData.data.votes[i].score==0) 
			        {findData.data.votes[i].scorestring=OKnesset.strings.unknown}	   
			        
			    if (findData.data.votes[i].importance==1)
					{findData.data.votes[i].importancestring=OKnesset.strings.veryimportant}
					
			    if (findData.data.votes[i].importance==0.6)
			   		{findData.data.votes[i].importancestring=OKnesset.strings.important}
			   		
			    if (findData.data.votes[i].importance==0.3) 
			        {findData.data.votes[i].importancestring=OKnesset.strings.mediumimportant}
			        	
			    if (findData.data.votes[i].importance==0) 
			        {findData.data.votes[i].importancestring=OKnesset.strings.lowimportance}	
			        
			  }
			console.log(findData.data.votes);
		OKnesset.AgendaVoteListStore.loadData(findData.data.votes);
			  	
        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.AgendaVoteTitle + findData.data.name);
        this.application.viewport.setActiveItem(this.AgendaVoteListView, options.animation);
    
 
    },
	refresh : function() {
        this.AgendaVoteList = this.AgendaVoteListView.query('#AgendaVoteList')[0];		
		this.AgendaVoteList.refresh();
	 }
 });
