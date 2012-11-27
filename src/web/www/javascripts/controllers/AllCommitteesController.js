Ext.regController('AllCommittees', {

	Index: function(options) {
		if ( ! this.AllCommitteesView)
		{
			this.AllCommitteesView = this.render({
				xtype: 'AllCommitteesView'
			});

			this.AllCommitteesView.committeeList.addListener('itemtap',
				function(that, index, item, e) {
					var record = that.store.getAt(index);
					OKnesset.app.controllers.navigation.dispatchPanel('CommitteeDetails/Index/' + record.data.id, options.historyUrl);
				});
		}

		var that = this;
		that.AllCommitteesView.showLoading(true);

		getAPIData({
			apiKey : "committees",
			success: function (data){
				OKnesset.AllCommitteesStore.loadData(data);
				that.AllCommitteesView.committeeList.refresh();
				that.AllCommitteesView.showLoading(false);
			},
			failure: function (result){
				OKnesset.onError('SERVER', ["Failure loading committees json from server", result]);
			}
		});

		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			GATrackPage('AllCommitteesView', '');
		}


		this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.committees);
		this.application.viewport.setActiveItem(this.AllCommitteesView, options.animation);
	}
});