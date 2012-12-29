OKnesset.app.controllers.CandidateParty = Ext.regController('CandidateParty', {

	// index action
	Index: function(options)
	{
		var memberList, id , party, name, info, infoView;
		if ( ! this.partyView)
		{
			this.partyView = this.render({
				xtype: 'CandidatePartyView'
			});
			memberList = this.partyView.query('#MemberList')[0];
			memberList.addListener('itemtap',
				function(that, index, item, e) {
					var record = that.store.getAt(index);
					if (record.data.id)
						OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + record.data.id, options.historyUrl);
			});
			this.partyView.query('#websiteButton')[0].addListener('tap',
				function(that, index, item, e) {
					console.log(that);
					/*if (that.party_id) {
						OKnesset.app.controllers.navigation.dispatchPanel('PartyInfo/Index/' + that.party_id, options.historyUrl);
					}*/
			});
			this.partyView.query('#manifestButton')[0].addListener('tap',
				function(that, index, item, e) {
					console.log(that);
					/*if (that.party_id) {
						OKnesset.app.controllers.navigation.dispatchPanel('PartyInfo/Index/' + that.party_id, options.historyUrl);
					}*/
			});
		}

		id = parseInt(options.id, 10);
		party = getObjectFromStoreByID(OKnesset.ElectionPartyStore, id);
		party = party.data;
		//info = getObjectFromStoreByID(OKnesset.PartyInfoStore, id, 'party_id');

		name = party.name;

		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			GATrackPage('PartyView', name);
		}

		this.filterMembersByParty(party);

		// in case the member list was scrolled down( because the user viewed the
		// panel for another member)
		if (options.pushed){
			if (this.partyView.scroller) {
				this.partyView.scroller.scrollTo({
					x : 0,
					y : 0
				});
			}
		}
		var lettersSize = (parseInt(document.getElementsByTagName('body')[0].style.width) * 1.8 / 2 / party.letters.length)
		if (lettersSize > 120)
			lettersSize = 120;
		this.partyView.query('#MiniInfo')[0].update({ letters: party.letters,
													  size: lettersSize.toString() + 'px'
													 });
		this.partyView.query('#websiteButton')[0].url = party.website;
		this.partyView.query('#manifestButton')[0].url = party.manifest_url;
		
		setTitle(name, this);
		this.application.viewport.setActiveItem(this.partyView, options.animation);

	},

	getIdFromAbsoluteUrl: function(url){
		var sub1 = url.substr("/party/".length);
		return sub1.substr(0,sub1.indexOf('/'));
	},

	getNameById : function(partyId){
		var party = getObjectFromStoreByID(OKnesset.PartyStore, partyId);
		if (typeof party === 'undefined') {
			OKnesset.log("Cannot find party from id '" + partyId + "'");
			return "";
		}
		
		return party.data.name;
	},

	filterMembersByParty : function(party) {
		OKnesset.electionMembersStore.clearFilter(true);
		OKnesset.electionMembersStore.filter({
			property: 'party',
			exactMatch : true,
			value : party.name});
	},

	navigateToParty: function(partyId){
		OKnesset.app.controllers.navigation.dispatchPanel('Party/Index/' + partyId, "");
	}
});