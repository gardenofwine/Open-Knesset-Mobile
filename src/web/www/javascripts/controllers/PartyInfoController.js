OKnesset.app.controllers.Party = Ext.regController('PartyInfo', {

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
		info = OKnesset.PartyInfoStore.findBy(function (r) {
			return r.data.party_id === id;
		});
		info = OKnesset.PartyInfoStore.getAt(info);
		name = info.data.party_name;
		// Analytics
		GATrackParty(name);


		// TODO currentParty is only needed for the email widget. Find a better way to fetch the current party
		this.currentInfo = info.data;
		this.view.query('#Info')[0].update(this.currentInfo);
		this.application.viewport.query('#toolbar')[0].setTitle(name);
		this.application.viewport.setActiveItem(this.view, options.animation);
	},
	getReviewButtonText : function () {
		return Ext.util.Format.format(
				OKnesset.strings.emailParty,
				this.currentParty.name);
	},
	getIdFromAbsoluteUrl: function (url) {
		var sub1 = url.substr("/party/".length);
		return sub1.substr(0,sub1.indexOf('/'));
	},
	refresh : function() {
	}
});