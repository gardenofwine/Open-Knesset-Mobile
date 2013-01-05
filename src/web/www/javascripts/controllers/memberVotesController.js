Ext.regController('memberVotes', {

	// index action
	Index: function(options)
	{
		if (!this.memberVotesView) {
			this.memberVotesView = this.render({
				xtype: 'memberVotesView'
			});

			//Get the List for reference
			this.memberVotesList = this.memberVotesView.query('#MemberVotesList')[0];

			//Defining what is happening when tapping on an item in the list
			this.memberVotesList.addListener('itemtap',
				function(that, index, item, e) {
					var record = that.store.getAt(index);
					OKnesset.app.controllers.navigation.dispatchPanel('VoteDetails/Index/' + record.data.id, options.historyUrl);
			});
		}

		var memberVotesController = this;

		if (this.cached != options.id) {
			this.cached = options.id;
			var hideWhileLoading = [this.memberVotesList];
			memberVotesController._init(hideWhileLoading);

			//add for votes to store
			getAPIData({
				apiKey:'memberVotesFavor',
				parameterOptions : options.id,
				success:function(data){
					for (var i = data.length - 1; i >= 0; i--) {
						data[i]['VoteType'] = 'favor';
					}
					OKnesset.MemberVotesStore.add(data);
					memberVotesController._refresh(hideWhileLoading);
					memberVotesController.memberVotesList.refresh();
				},
				failure: function (result){
					OKnesset.onError('SERVER', ["error receiving member favor votes data.", result]);
				}
			});

			getAPIData({
				apiKey:'memberVotesAgainst',
				parameterOptions : options.id,
				success:function(data){
					for (var i = data.length - 1; i >= 0; i--) {
						data[i]['VoteType'] = 'against';
					}

					OKnesset.MemberVotesStore.add(data);
					memberVotesController._refresh(hideWhileLoading);
					memberVotesController.memberVotesList.refresh();
				},
				failure: function (result){
					OKnesset.onError('SERVER', ["error receiving member against votes data.", result]);
				}
			});
		}

		var member = getMembersById(options.id)[0];
		
		//Change toolbar title
		var votesTitle;
		if (member){
			votesTitle = member.name;
		} else {
			votesTitle = OKnesset.strings.votes;
		}
		this.application.viewport.query('#toolbar')[0].setTitle(votesTitle);

		if (options.pushed) {
			if (this.memberVotesList.scroller) {
				this.memberVotesList.scroller.scrollTo({
					x: 0,
					y: 0
				});
			}
		}

		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			if (member){
				GATrackPage('memberVotesView', member.name);
			}
		}

		this.application.viewport.setActiveItem(this.memberVotesView, options.animation);

	},
	_init: function(elementsToHIDE){
        this.memberVotesView.showLoading(true);

		elementsToHIDE.forEach(function(e){
			e.hide();
		});
	},
	_refresh: function(elementsToSHOW){
        this.memberVotesView.showLoading(false);

		elementsToSHOW.forEach(function(e){
			e.show();
		});
	}
});