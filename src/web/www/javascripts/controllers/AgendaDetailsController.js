Ext.regController('AgendaDetails', {

    // index action
    Index: function(options){
        if (!this.AgendaDetailsView)
        {

            	this.AgendaDetailsView = this.render({
                	xtype: 'AgendaDetailsView',
            });

			   this.AgendaDetailsView.MostSupportMember.addListener('itemtap',
            	function(that, index, item, e) {
    				var	record = that.store.getAt(index);
			         OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/'+ OKnesset.app.controllers.Member.getIdFromAbsoluteUrl(record.data.MostSupportMember.absolute_url), options.historyUrl);
				});

			   this.AgendaDetailsView.MostSupportParty.addListener('itemtap',
            	function(that, index, item, e) {
    				var	record = that.store.getAt(index);
			         OKnesset.app.controllers.navigation.dispatchPanel('Party/Index/'+ OKnesset.app.controllers.Party.getIdFromAbsoluteUrl(record.data.MostSupportParty.absolute_url), options.historyUrl);
				});
				var AgendaDetailsController = this;
        }

	  // button
        OKnesset.app.views.AgendaDetailsView.AgendaVoteListBtn.setHandler(this.dispatchVotes,options);

        OKnesset.app.views.AgendaDetailsView.SupportMemberBtn.setHandler(this.dispatchMember,options);

        OKnesset.app.views.AgendaDetailsView.SupportPartyBtn.setHandler(this.dispatchParties,options);

      // update agenda data
        var that = this;

        getAPIData({
            apiKey : "agendaDetails",
            urlOptions: options.id,
            success : function(data){
                // round score of support
                that.roundScore(data.members);
                that.roundScore(data.parties);

                OKnesset.AgendaMembersSupportListStore.loadData(data.members);
                OKnesset.AgendaPartiesSupportListStore.loadData(data.parties);
                // find most supports member & party
                MostSupportMember=OKnesset.AgendaMembersSupportListStore.getAt(0)
                MostSupportParty=OKnesset.AgendaPartiesSupportListStore.getAt(0)
                data.MostSupportMember=MostSupportMember.data;
                data.MostSupportParty=MostSupportParty.data;
                data.description = that.replaceURLWithHTMLLinks(data.description);

                OKnesset.AgendaDetailsStore.loadData([data]);
            },
            failure: function(){
                console.log("Failure loading vote json from server");
            }
        })

        var agenda = getObjectFromStoreByID(OKnesset.AgendaListStore, options.id);
        // var findData = OKnesset.AgendaListStore.findBy(function(r){return r.data.id === parseInt(options.id)});
        // findData = OKnesset.AgendaListStore.getAt(findData);
        this.application.viewport.query('#toolbar')[0].setTitle(agenda.data.name);
        this.application.viewport.setActiveItem(this.AgendaDetailsView, options.animation);

    },


    roundScore: function(toberound){
        for (i=0 ; i<=toberound.length-1; i++) {
             toberound[i].score = Math.round(toberound[i].score);
        }
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

 	replaceURLWithHTMLLinks: function(text) {
    	var exp = /(\b(http):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
    	text = text.replace(exp,"<a href='$1'>$1</a>");
    	exp = /(\b(https):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
    	text = text.replace(exp,"<a href='$1'>$1</a>");
    	exp = /(\b(www).[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
    	text = text.replace(exp,"<a href='http://$1'>http://$1</a>");
    	return text;
	},

    });

