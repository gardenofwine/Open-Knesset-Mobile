Ext.regController('CommitteeDetails', {

	// index action
	Index: function (options) {
		var committeeDetailsController = this,
			committeeMembersList,
			committeeMeetings;
		if (!this.CommitteeDetailsView) {
			this.CommitteeDetailsView = this.render({
				xtype: 'CommitteeDetailsView'
			});
			committeeMembersList = this.CommitteeDetailsView.query('#CommitteeMembersList')[0];
			committeeMembersList.addListener('itemtap', function(that, index, item, e){
				var record = that.store.getAt(index);
				committeeDetailsController._gotoMember(record);
			});

			committeeMeetings = this.CommitteeDetailsView.query('#committeeMeetings')[0];
			committeeMeetings.addListener('itemtap', function(that, index, item, e){
				var record = that.store.getAt(index);
				committeeDetailsController._gotoCommitteeProtocol(record);
			});

		}



		var committeeName = this.CommitteeDetailsView.query('#committeeName')[0],
			committeeDescription = this.CommitteeDetailsView.query('#committeeDescription')[0],
			committeeMembers = this.CommitteeDetailsView.query('#committeeMembers')[0];

		committeeMembersList = this.CommitteeDetailsView.query('#CommitteeMembersList')[0];
		committeeMeetings = this.CommitteeDetailsView.query('#committeeMeetings')[0];



		if (this.cached != options.id) {
			this.cached = options.id;
			var hideWhileLoading = [committeeName, committeeDescription, committeeMembersList, committeeMeetings, committeeMembers];
			committeeDetailsController._init(hideWhileLoading);


			getAPIData({
				apiKey:'committeeDetail',
				urlOptions : options.id,
				success:function(data){
					committeeDetailsController._updateData(data);
					committeeDetailsController._refresh(hideWhileLoading);
				},
				failure: function (result){
					OKnesset.onError('SERVER', ["error receiving committeeDetail data.", result]);
				}
			});

		}

		var committee = getObjectFromStoreByID(OKnesset.AllCommitteesStore, options.id);

		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			GATrackPage('CommitteeDetailsView', committee.data.name);
		}

		committeeMembersList = this.CommitteeDetailsView.query('#CommitteeMembersList')[0];
		committeeMembersList.refresh();

		//scroll view up
		if (this.CommitteeDetailsView.scroller) {
			this.CommitteeDetailsView.scroller.scrollTo({
				x: 0,
				y: 0
			});
		}

		this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.committeeDetails);
		this.application.viewport.setActiveItem(this.CommitteeDetailsView, options.animation);

	},
	_updateData: function (CommitteeDetails) {

		this.CommitteeDetailsView.query('#committeeName')[0].update({
			name: CommitteeDetails.name
		});

		var committeeFromList = getObjectFromStoreByID(OKnesset.AllCommitteesStore, CommitteeDetails.id);
		this.CommitteeDetailsView.query('#committeeDescription')[0].update({
			description : committeeFromList.data.description
		});

		OKnesset.CommitteeDetailsMembersListStore.loadData(CommitteeDetails.members);

		//update meetings store with recent and future meetings data.
		committeesMeetings = [];
		var recent_meetings = CommitteeDetails.recent_meetings;
		for (i=0;i<recent_meetings.length;i++){
			recent_meetings[i]['MeetingType'] = 'recent';
			committeesMeetings.push(recent_meetings[i]);
		}

		var future_meetings = CommitteeDetails.future_meetings;
		for (i=0;i<future_meetings.length;i++){
			future_meetings[i]['MeetingType'] = 'future';
			committeesMeetings.push(future_meetings[i]);
		}

		OKnesset.CommitteeDetailsMeetingsListStore.loadData(committeesMeetings);
	},
	_init: function(elementsToHIDE){

		this.CommitteeDetailsView.query('#committeeDetailsLoading')[0].show();

		elementsToHIDE.forEach(function(e){
			e.hide();
		});
	},
	_refresh: function(elementsToSHOW){

		this.CommitteeDetailsView.query('#committeeDetailsLoading')[0].hide();

		elementsToSHOW.forEach(function(e){
			e.show();
		});
	},

	_gotoMember: function(record){
		OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + record.data.url.match(/\/member\/(\d+)\/+/)[1], this.historyUrl);
	},

	_gotoCommitteeProtocol: function(record){
		OKnesset.app.controllers.navigation.dispatchPanel('Protocol/Index/' + this.getIdFromAbsoluteUrl(record.data.url), this.historyUrl);
	},

	getIdFromAbsoluteUrl: function(url){
		var sub1 = url.substr("/committee/meeting/".length);
		return sub1.substr(0,sub1.indexOf('/'));
	}
});
