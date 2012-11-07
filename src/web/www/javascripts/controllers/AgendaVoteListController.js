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
					OKnesset.app.controllers.navigation.dispatchPanel('VoteDetails/Index/' + record.data.id, options.historyUrl);

				});
        }

        var findData = OKnesset.AgendaListStore.findBy(function(r){
        	return r.data.id === parseInt(options.id)
        });
        findData = OKnesset.AgendaListStore.getAt(findData);

         //FIX for Adgenda vote list broken button link. (franco)
         if (findData.data.votes[0].data !== undefined) {

         	findDataObj = []
         	findData.data.votes.forEach(function(subcls) {
         	 findDataObj.push(subcls.data); //make subclass an object
         	});
         	findData.data.votes = findDataObj;
         }

        this.updateString(findData.data.votes);
		OKnesset.AgendaVoteListStore.loadData(findData.data.votes);

        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.AgendaVoteTitle + findData.data.name);
        this.application.viewport.setActiveItem(this.AgendaVoteListView, options.animation);


    },
    /*
	refresh : function() {
        this.AgendaVoteList = this.AgendaVoteListView.query('#AgendaVoteList')[0];
		this.AgendaVoteList.refresh();
	 }
	 */
	     updateString : function(votes) {
			for (i=0 ; i<=votes.length-1; i++)  {
				if (votes[i].score==1)
					{votes[i].scorestring=OKnesset.strings.fullsupport}

			    if (votes[i].score==-1)
			   		{votes[i].scorestring=OKnesset.strings.fullresistance}

			    if (votes[i].score==0.5)
			        {votes[i].scorestring=OKnesset.strings.partialsupport}

			    if (votes[i].score==-0.5)
			        {votes[i].scorestring=OKnesset.strings.partialresistance}

			    if (votes[i].score==0)
			        {votes[i].scorestring=OKnesset.strings.unknown}

			    if (votes[i].importance==1)
					{votes[i].importancestring=OKnesset.strings.veryimportant}

			    if (votes[i].importance==0.6)
			   		{votes[i].importancestring=OKnesset.strings.important}

			    if (votes[i].importance==0.3)
			        {votes[i].importancestring=OKnesset.strings.mediumimportant}

			    if (votes[i].importance==0)
			        {votes[i].importancestring=OKnesset.strings.lowimportance}

			        //clear strings from vote title
			     votes[i].title = votes[i].title.replace(OKnesset.strings.deletefromvotetitle1,'')
			     votes[i].title = votes[i].title.replace(OKnesset.strings.deletefromvotetitle2,'')
			     votes[i].title = votes[i].title.replace(OKnesset.strings.deletefromvotetitle3,'')
			     votes[i].title = votes[i].title.replace(OKnesset.strings.deletefromvotetitle4,'')
			     votes[i].title = votes[i].title.replace(OKnesset.strings.deletefromvotetitle5,'')
			     votes[i].title = votes[i].title.replace(OKnesset.strings.deletefromvotetitle6,'')
		    }
		}
 });
