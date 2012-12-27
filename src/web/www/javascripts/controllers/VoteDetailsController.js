Ext.regController('VoteDetails', {

	// index action
	Index: function (options) {
		var VoteDetailsController = this,
			voteDescription,
			membersVotedList;

		if (!this.VoteDetailsView) {
			this.VoteDetailsView = this.render({
				xtype: 'VoteDetailsView'
			});

			membersVotedList = this.VoteDetailsView.query('#membersVotedList')[0];
			membersVotedList.addListener('itemtap', function(that, index, item, e){
				var record = that.store.getAt(index);
				VoteDetailsController._gotoMember(record);
			});
		}

		voteDescription = this.VoteDetailsView.query('#voteDescription')[0];
		membersVotedList = this.VoteDetailsView.query('#membersVotedList')[0];

        VoteDetailsController.VoteDetailsView.showLoading(true);

		if (this.cached != options.id) {
			this.cached = options.id;
			var hideWhileLoading = [voteDescription, membersVotedList];
			VoteDetailsController._init(hideWhileLoading);

			getAPIData({
				apiKey : "voteDetails",
				urlOptions: options.id,
				success : function(data){
					VoteDetailsController.updateData(data);
					VoteDetailsController._refresh(hideWhileLoading);
                    VoteDetailsController.VoteDetailsView.showLoading(false);
				},
				failure: function (result){
					OKnesset.onError('SERVER', ["Failure loading vote json from server", result]);
				}
			});
		}

		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			GATrackPage('VoteDetailsView', options.id);
		}

		this.application.viewport.setActiveItem(this.VoteDetailsView, options.animation);
		this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.votesDetails);

		if (membersVotedList.scroller) {
			membersVotedList.scroller.scrollTo({
				x: 0,
				y: 0
			});
		}

		var infoWrapper = this.VoteDetailsView.query('#MemberVotedInfoWrapper')[0];
		if (infoWrapper.scroller) {
			infoWrapper.scroller.scrollTo({
				x: 0,
				y: 0
			});
		}

	},

	_init: function(elementsToHIDE){
		elementsToHIDE.forEach(function(e){
			e.hide();
		});
	},
	_refresh: function(elementsToSHOW){
		elementsToSHOW.forEach(function(e){
			e.show();
		});
	},

	updateData: function(data) {
		//update VotedStore
		var voted = {
			favor: getMembersById(data.for_votes),
			against: getMembersById(data.against_votes),
			abstain: getMembersById(data.abstain_votes)
			//need to get full data required from party store
		};

		voted.favor.forEach(function (member) {
			member.VoteType = 'favor';
		});

		voted.against.forEach(function (member) {
			member.VoteType = 'against';
		});

		voted.abstain.forEach(function (member) {
			member.VoteType = 'abstain';
		});

		OKnesset.VotedStore.loadData(voted.favor);
		OKnesset.VotedStore.add(voted.against);
		OKnesset.VotedStore.add(voted.abstain);

		//update title + description
		this.VoteDetailsView.query('#voteTitle')[0].update({
			title: data.title + "<br>" + OKnesset.strings.dateString + ": " + data.time
		});

		this.VoteDetailsView.query('#voteDescription')[0].update({
			summary: data.summary
		});


	},
	_gotoMember: function(record){
		OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + record.data.id, this.historyUrl);
	}
});
