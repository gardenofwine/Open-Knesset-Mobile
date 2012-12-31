Ext.regController('Election', {

	Index: function(options) {
		if (!this.electionView) {
			this.electionView = this.render({
				xtype: 'ElectionView'
			});

			// never show the loading pane, because there are always members to display from slimData
			this.electionView.showLoading(false);
			this.partyList = this.electionView.query('#ElectionPrtyListView')[0];
			this.partyList.addListener('itemtap',
				function(that, index, item, e) {
					var record = that.store.getAt(index);
					//console.log(record.data);
					OKnesset.app.controllers.navigation.dispatchPanel('CandidateParty/Index/' + record.data.id, options.historyUrl);
				});
		}

		var that = this;
		that.partyList.disable();

		getAPIData({
			apiKey:'elections',
            bundledData : election,
			success: function (data){
				if (isPhoneGap() || data) {
					eval(data);
					OKnesset.ElectionPartyStore.loadData(data.parties);
					OKnesset.electionMembersStore.loadData(data.members);
					that.partyList.enable();
					that.partyList.refresh();
				} 
			},
			failure: function (result){
				OKnesset.onError('SERVER', ["error receiving members data.", result]);
			}
		});

		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			GATrackPage('ElectionView', '');
		}

		this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.ElcetionTitle);
		this.application.viewport.setActiveItem(this.electionView, options.animation);
	}
});