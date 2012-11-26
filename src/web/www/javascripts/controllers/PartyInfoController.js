OKnesset.app.controllers.PartyInfo = Ext.regController('PartyInfo', {

	// index action
	Index: function (options) {
		var id, info, name;
		if ( ! this.view)
		{
			this.view = this.render({
				xtype: 'PartyInfoView'
			});
		}
		id = parseInt(options.id, 10);
		info = getObjectFromStoreByID(OKnesset.PartyInfoStore, id, 'party_id');
		// info = OKnesset.PartyInfoStore.findBy(function (r) {
		// 	return r.data.party_id === id;
		// });
		// info = OKnesset.PartyInfoStore.getAt(info);
		name = info.data.party_name;

		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			GATrackPage('PartyInfoView', name);
		}


		this.currentInfo = info.data;
		this.view.query('#Info')[0].update(this.currentInfo);
		this.application.viewport.query('#toolbar')[0].setTitle(name);
		this.application.viewport.setActiveItem(this.view, options.animation);
	}
});