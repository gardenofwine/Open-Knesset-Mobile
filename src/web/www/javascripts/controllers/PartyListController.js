Ext.regController('PartyList', {

	Index: function(options)
	{
		if ( ! this.partyListView)
		{
			this.partyListView = this.render({
				xtype: 'PartyListView'
			});

			this.partyListView.addListener('itemtap',
				function(that, index, item, e) {
					var record = that.store.getAt(index);
					OKnesset.MemberStore.sort([OKnesset.MemberStoreSorters.partyOrdinal]);
					OKnesset.app.controllers.navigation.dispatchPanel('Party/Index/' + record.data.id, options.historyUrl);
				});
		}

		getAPIData({
			apiKey:'parties',
			success:function(data){
				OKnesset.PartyStore.loadData(data);
				// that.memberView.getComponent('loading').hide();
			},
			failure:function(result){
				console.log("error receiving parties data. ", result);
			}
		});

		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			GATrackPage('PartyListView', '');
		}


		this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.partiesTitle);
		this.application.viewport.setActiveItem(this.partyListView, options.animation);
	}
});