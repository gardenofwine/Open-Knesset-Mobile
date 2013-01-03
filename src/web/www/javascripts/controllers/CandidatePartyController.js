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
			var memberList = this.partyView.query('#CandidateMemberList')[0];
			memberList.addListener('itemtap',
				function(that, index, item, e) {
					var record = that.store.getAt(index);
					if (record.data.id)
						OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + record.data.id, options.historyUrl);
			});
			this.partyPanelButton = this.partyView.query('#partyButton')[0];
			this.partyPanelButton.addListener('tap',
				function(that, index, item, e) {
					OKnesset.MemberStore.sort([OKnesset.MemberStoreSorters.partyOrdinal]);
					OKnesset.app.controllers.navigation.dispatchPanel('Party/Index/' + that.party_id, options.historyUrl);
			});
			this.partyPanelButton2 = this.partyView.query('#partyButton2')[0];
			this.partyPanelButton2.addListener('tap',
				function(that, index, item, e) {
					OKnesset.MemberStore.sort([OKnesset.MemberStoreSorters.partyOrdinal]);
					OKnesset.app.controllers.navigation.dispatchPanel('Party/Index/' + that.party_id, options.historyUrl);
			});

			this.partyView.query('#websiteButton')[0].addListener('tap',
				function(that, index, item, e) {
					loadUrl(that.url);
			});
			this.manifestButton = this.partyView.query('#manifestButton')[0];
			this.manifestButton.addListener('tap',
				function(that, index, item, e) {
					loadUrl(that.url);
			});
		}

		var that = this;
		that.partyView.showLoading(true);
		getAPIData({
			apiKey:'candidateParty',
			urlOptions: options.id,
            bundledData : election.memberByParty[''+options.id],
			success: function (data){
				var party = getObjectFromStoreByID(OKnesset.ElectionPartyStore, options.id);
				that.updateData({
					party: party.data,
					members: data.members
				});
				that.partyView.showLoading(false);
			},
			failure: function (result){
				OKnesset.onError('SERVER', ["error receiving members data.", result]);
			}
		});

		var party = getObjectFromStoreByID(OKnesset.ElectionPartyStore, options.id);

		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			GATrackPage('CandidatePartyView', party.data.name);
		}
	
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
	
		setTitle(party.data.name, this);
		this.application.viewport.setActiveItem(this.partyView, options.animation);

	},

	updateData: function(data){
		var party = data.party;
		OKnesset.electionMembersStore.clearFilter();
		OKnesset.electionMembersStore.loadData(data.members);
		// this.filterMembersByParty(data.party.id);

		var lettersSize = (parseInt(document.getElementsByTagName('body')[0].style.width) * 1.8 / 2 / party.letters.length)
		if (lettersSize > 120)
			lettersSize = 120;
		this.partyView.query('#MiniInfo')[0].update({ letters: party.letters,
													  size: lettersSize.toString() + 'px'
													 });

		if (party.party_id){
			var partyId1 = null
			var partyId2 = null;
			if (party.party_id.push){
				// party.party_id is an array. special case for likud party
				partyId1 = party.party_id[0];
				partyId2 = party.party_id[1];
			} else {
				partyId1 = party.party_id;
			}

			this.partyPanelButton.show(); 
			this.partyPanelButton.party_id = partyId1;
			this.partyPanelButton.setText(OKnesset.strings.GotoPartyPanel);

			if (partyId2 !== null){
				this.partyPanelButton2.show(); 
				this.partyPanelButton2.party_id = partyId2;
				this.partyPanelButton.setText(OKnesset.strings.ElectionLikudPanel);
				this.partyPanelButton2.setText(OKnesset.strings.ElectionLibermanPanel);
			} else {
				this.partyPanelButton2.hide(); 
			}
		} else {
			this.partyPanelButton.hide(); 
			this.partyPanelButton2.hide(); 
		}

		this.partyView.query('#websiteButton')[0].url = party.website;
		if (party.manifest_url.length>0) {
			this.manifestButton.url = party.manifest_url;
			this.manifestButton.setText(OKnesset.strings.GotoPartyManifest);
			this.manifestButton.enable();
		}
		else {
			this.manifestButton.setText(OKnesset.strings.ManifestNA);
			this.manifestButton.disable();
		}

	},

});