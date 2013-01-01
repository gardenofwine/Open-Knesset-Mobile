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
					if (typeof data === 'string'){
						// data received via ajax form the server is of type 'string'
						eval(data);
					} else {
						// bundle data is of type 'object'
						election = data;						
					}
					
					OKnesset.ElectionPartyStore.clearFilter();
					OKnesset.ElectionPartyStore.loadData(election.parties);
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