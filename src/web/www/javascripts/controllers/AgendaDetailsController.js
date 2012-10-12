Ext.regController('AgendaDetails', {

    // index action
    Index: function(options){
        if (!this.AgendaDetailsView) {
            this.AgendaDetailsView = this.render({
                xtype: 'AgendaDetailsView',
            });
			var AgendaDetailsController = this;
        }
        

        OKnesset.app.views.AgendaDetailsView.AgendaVoteListBtn.setHandler(this.dispatchVotes,options);

        OKnesset.app.views.AgendaDetailsView.SupportMemberBtn.setHandler(this.dispatchMember,options);

        OKnesset.app.views.AgendaDetailsView.SupportPartyBtn.setHandler(this.dispatchParties,options);
     
      
        //console.log(options);
        var findData = OKnesset.AgendaListStore.findBy(function(r){return r.data.id === parseInt(options.id)});
        findData = OKnesset.AgendaListStore.getAt(findData);
         console.log(findData);
       // AgenDet = OKnesset.AgendaDetailsStore.getAt(findData);

         console.log(options);
         this.application.viewport.query('#toolbar')[0].setTitle(findData.data.name);
         this.application.viewport.setActiveItem(this.AgendaDetailsView, options.animation);
         OKnesset.AgendaMembersSupportListStore.loadData(findData.data.members);
         OKnesset.AgendaPartiesSupportListStore.loadData(findData.data.parties);
         MostSupportMember=OKnesset.AgendaMembersSupportListStore.getAt(0)
         MostSupportParty=OKnesset.AgendaPartiesSupportListStore.getAt(0)
         findData.data.MostSupportMember=MostSupportMember.data.name;
         findData.data.MostSupportParty=MostSupportParty.data.name;
         this.application.viewport.query('#AgendaInfo')[0].update(findData.data);
         
   
        
        
    },

    dispatchVotes: function() {
		OKnesset.app.controllers.navigation.dispatchPanel('AgendaVoteList/Index/' + this.id, this.historyUrl)
    },
      
      dispatchParties: function() {
        OKnesset.app.controllers.navigation.dispatchPanel('AgendaPartiesSupportList/Index/' + this.id, this.historyUrl)
    },

    dispatchMember: function() {
		OKnesset.app.controllers.navigation.dispatchPanel('AgendaMembersSupportList/Index/' + this.id, this.historyUrl)
    },
 
    });

