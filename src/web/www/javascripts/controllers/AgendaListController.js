Ext.regController('AgendaList', {

	Index: function(options) {

		if ( ! this.AgendaListView) {
			this.AgendaListView = this.render({
				xtype: 'AgendaListView'
			});

			this.AgendaListView.addListener('itemtap', function(that, index, item, e) {
				var	record = that.store.getAt(index);
				OKnesset.app.controllers.navigation.dispatchPanel('AgendaDetails/Index/'+ record.data.id, options.historyUrl);
			});

		}

		getAPIData({
			apiKey:'agendas',
			success:function(data){
				OKnesset.AgendaListStore.loadData(data);
				// that.memberView.getComponent('loading').hide();
			},
			failure:function(result){
				OKnesset.onError('SERVER', ["error receiving memebers data. ", result]);
			}
		});
		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			GATrackPage('AgendaListView', '');
        }

		this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.AgendaTitle);
		this.application.viewport.setActiveItem(this.AgendaListView, options.animation);

	}
 });
