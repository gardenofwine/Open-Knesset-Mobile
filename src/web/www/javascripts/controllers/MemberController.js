OKnesset.app.controllers.Member = Ext.regController('Member', {

	// index action
	Index: function(options){
		if (!this.memberView) {
			this.memberView = this.render({
				xtype: 'MemberView'
			});
			var memberController = this;
		}

		this.memberView.query('#memberBillsBtn')[0].setHandler(this.dispatchBills,options);
		this.memberView.query('#memberCommitteesBtn')[0].setHandler(this.dispatchCommittees,options);
		this.memberView.query('#memberVotesBtn')[0].setHandler(this.dispatchVotes,options);

		var member = this.currentMember = getMembersById(options.id)[0];

		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			GATrackPage('MemberView', member.name);
		}

		// load the extra member data
		var that = this;
        that.memberView.showLoading(true);
		that.memberView.query('#memberBillsBtn')[0].setText(OKnesset.strings.loadingBills);
		that.memberView.query('#memberBillsBtn')[0].disable();
        
		var dataRecevied = getAPIData({
			apiKey:'member',
			urlOptions : options.id,
			success:function(data){
				var billsReceived = getAPIData({
					apiKey : 'memberBills',
					parameterOptions : options.id,
					success: function (billsData){
						that.updateBills(billsData);
					},
					failure: function (result){
						OKnesset.onError('SERVER', ["Error receiving memeber bills data.", result]);
					}
				});

				that.updateData(data);
                that.memberView.showLoading(false);
			},
			failure: function (result){
				OKnesset.onError('SERVER', ["Error receiving memeber data.", result]);
			}
		});

		//http://www.oknesset.org/api/v2/bill/?format=json&proposer=814
		if (!dataRecevied){
			this.updateData(member);
		}
		this.application.viewport.setActiveItem(this.memberView, options.animation);
	},

	dispatchBills: function() {
		OKnesset.app.controllers.navigation.dispatchPanel('Bills/Index/' + this.id, this.historyUrl);
	},

	dispatchCommittees: function() {
		OKnesset.app.controllers.navigation.dispatchPanel('Committees/Index/' + this.id, this.historyUrl);
	},

	dispatchVotes: function() {
		OKnesset.app.controllers.navigation.dispatchPanel('memberVotes/Index/' + this.id, this.historyUrl);
	},

	getEmailButtonText: function(){
		return Ext.util.Format.format(OKnesset.strings.writeTo, this.currentMember.name);
	},

	getPhoneCallButtonText: function(){
		return Ext.util.Format.format(OKnesset.strings.phoneTo, this.currentMember.name);
	},

	sendEmail : function() {
		var recipient = this.email;
		if (isPhoneGap()) {
			GATrackEvent('email', this.name);

			if (isiOS()) {
				var emailCallback = function(result) {
					// called after email has been sent
					if (result != EmailComposer.ComposeResultType.Cancelled) {
						OKnesset.app.controllers.navigation.dispatchBack();
					}
				};
				window.plugins.emailComposer.showEmailComposerWithCB(emailCallback,
						"", OKnesset.strings.emailBody, recipient);
			} else if (isAndroid) {
				var extras = {};
				extras[WebIntent.EXTRA_SUBJECT] = "";
				extras[WebIntent.EXTRA_TEXT] = OKnesset.strings.emailBody;
				extras[WebIntent.EXTRA_EMAIL] = recipient;
				OKnesset.log("sending email to member " + this.name + " via email " +recipient);

				window.plugins.webintent.startActivity({
					action : WebIntent.ACTION_SEND,
					type : 'text/html',
					extras : extras
				}, function() {
					// success callback
					OKnesset.app.controllers.navigation.dispatchBack();
				}, function() {
					alert(OKnesset.strings.errorAndroidEmail);
				});
			}
		} else {
			OKnesset.log("sending email to member " + this.name + " via email " +recipient);
		}
	},
	phoneMember : function() {

		var phone_num = this.phone;
		if (isPhoneGap()) {
			GATrackEvent('call', this.name);
			document.location="tel:+972-" + phone_num.substr(1);
		} else {
			OKnesset.log("calling number " + phone_num);
		}
	},

	updateBills: function(data){
		if (!data.bills || !data.bills.length) {
			this.memberView.query('#memberBillsBtn')[0].setText(OKnesset.strings.noBills);
		} else {
			this.memberView.query('#memberBillsBtn')[0].setText("" + data.bills.length + " " + OKnesset.strings.bills);
		}
		this.memberView.query('#memberBillsBtn')[0].enable();
	},
	updateData: function(member){

		this.memberView.query('#MemberImage')[0].update(member);
		this.memberView.query('#MemberInfo')[0].update(member);
		this.application.viewport.query('#toolbar')[0].setTitle(member.name);
		this.memberView.query('#memberEmailBtn')[0].setText(this.getEmailButtonText());
		this.memberView.query('#memberEmailBtn')[0].setHandler(this.sendEmail,member);
		this.memberView.query('#memberCallBtn')[0].setText(this.getPhoneCallButtonText());
		this.memberView.query('#memberCallBtn')[0].setHandler(this.phoneMember,member);


		// TODO: member data returned from the server, does not return
		// committee data anymore. To link between memebers and committees,
		// we need to reverse-link from the commttees api.
		if (!member.committees || !member.committees.length) {
			this.memberView.query('#memberCommitteesBtn')[0].hide();
		} else {
			this.memberView.query('#memberCommitteesBtn')[0].show();
		}
		// if (!member.committees || member.committees.length == 0) {
		//     this.memberView.query('#memberCommitteesBtn')[0].setText(OKnesset.strings.noCommittees);
		//     this.memberView.query('#memberCommitteesBtn')[0].disable();
		// } else {
		//     this.memberView.query('#memberCommitteesBtn')[0].setText(OKnesset.strings.committees);
		//     this.memberView.query('#memberCommitteesBtn')[0].enable();
		// }
	},

	getIdFromAbsoluteUrl: function(url){
		var sub1 = url.substr("/member/".length);
		return sub1.substr(0,sub1.indexOf('/'));
	},

	refresh: function(){
		// get current member data from Party store, which is updated
		var party = getPartyFromPartyStoreByName(this.currentMember.party);
		Ext.iterate(party.data.members, function(value, index){
			if (value.data.id === this.currentMember.id) {
				this.updateData(value.data);
				return false;
			}
		}, this);
	}
});
