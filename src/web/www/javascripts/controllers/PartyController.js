OKnesset.app.controllers.Party = Ext.regController('Party', {

	// index action
	Index: function(options)
	{
		var memberList, id , party, name, info, infoView;
		if ( ! this.partyView)
		{
			this.partyView = this.render({
				xtype: 'PartyView'
			});
			memberList = this.partyView.query('#MemberList')[0];
			memberList.addListener('itemtap',
				function(that, index, item, e) {
					var record = that.store.getAt(index);
					OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + record.data.id, options.historyUrl);
			});
			this.partyView.query('#Button')[0].addListener('tap',
				function(that, index, item, e) {
					if (that.party_id) {
						OKnesset.app.controllers.navigation.dispatchPanel('PartyInfo/Index/' + that.party_id, options.historyUrl);
					}
			});
		}

		id = parseInt(options.id, 10);
		party = getObjectFromStoreByID(OKnesset.PartyStore, id);
		// party = OKnesset.PartyStore.findBy(function (r) {
		// 	return r.data.id === id;
		// });
		// party = OKnesset.PartyStore.getAt(party);


		info = getObjectFromStoreByID(OKnesset.PartyInfoStore, id, 'party_id');
		// info = OKnesset.PartyInfoStore.findBy(function (r) {
		// 	return r.data.party_id === id;
		// });
		// info = OKnesset.PartyInfoStore.getAt(info);

		name = party.data.name;

		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			GATrackPage('PartyView', name);
		}

		this.filterMembersByParty(party);

		// TODO currentParty is only needed for the email widget. Find a better way to fetch the current party
		this.currentParty = party.data;

		// in case the member list was scrolled down( because the user viewed the
		// panel for another member)
		if (options.pushed){
			// memberList = this.partyView.query('#MemberList')[0];
			if (this.partyView.scroller) {
				this.partyView.scroller.scrollTo({
					x : 0,
					y : 0
				});
			}
		}
		this.partyView.query('#MiniText')[0].update(info && info.data || {});
		this.partyView.query('#Button')[0].party_id = info && info.data.party_id;
		this.application.viewport.query('#toolbar')[0].setTitle(name);
		this.application.viewport.setActiveItem(this.partyView, options.animation);
	},
	getIdFromAbsoluteUrl: function(url){
		var sub1 = url.substr("/party/".length);
		return sub1.substr(0,sub1.indexOf('/'));
	},

	filterMembersByParty : function(party) {
		OKnesset.MemberStore.clearFilter(true);
		OKnesset.MemberStore.filter({
			property: 'party_id',
			exactMatch : true,
			value : party.data.id});
	}


});