OKnesset.app.controllers.Member = Ext.regController('Member', {

    // index action
    Index: function(options){
        if (!this.memberView) {
            this.memberView = this.render({
                xtype: 'MemberView',
            });
			var memberController = this;
        }

        OKnesset.app.views.MemberView.memberBillsBtn.setHandler(this.dispatchBills,options);

        OKnesset.app.views.MemberView.memberCommitteesBtn.setHandler(this.dispatchCommittees,options);

		OKnesset.app.views.MemberView.memberVotesBtn.setHandler(this.dispatchVotes,options);

        // var member = OKnesset.MemberStore.findBy(function(r){
        //     return r.data.id === parseInt(options.id)
        // });
        // console.log(OKnesset.MemberStore);
        // member = this.currentMember = OKnesset.MemberStore.getAt(member).data;

        var member = this.currentMember = OKnesset.GetMembersById(options.id)[0];
        GATrackMember(member.name);

        // load the extra member data
        var that = this;
        that.memberView.getComponent('loading').show();
        Ext.util.JSONP.request({
            url: 'http://www.oknesset.org/api/v2/member/' + options.id,
            callbackKey : "callback",
            onFailure : function(){console.log("Failure loading committee json from server");},
            callback: function(data){
                that.updateData(data);
                that.memberView.getComponent('loading').hide();
            }
        });

        //this.updateData(member);
        this.application.viewport.setActiveItem(this.memberView, options.animation);
    },

    dispatchBills: function() {
		OKnesset.app.controllers.navigation.dispatchPanel('Bills/Index/' + this.id, this.historyUrl)
    },

    dispatchCommittees: function() {
		OKnesset.app.controllers.navigation.dispatchPanel('Committees/Index/' + this.id, this.historyUrl)
    },

    dispatchVotes: function() {
        OKnesset.app.controllers.navigation.dispatchPanel('memberVotes/Index/' + this.id, this.historyUrl)
    },

    getReviewButtonText: function(){
        return Ext.util.Format.format(OKnesset.strings.emailMember, this.currentMember.name);
    },

    getEmailButtonText: function(){
        return Ext.util.Format.format(OKnesset.strings.writeTo, this.currentMember.name);
    },

    getPhoneCallButtonText: function(){
        return Ext.util.Format.format(OKnesset.strings.phoneTo, this.currentMember.name);
    },

    sendEmail : function() {
    	var recipient = this.email;
    	OKnesset.log("** sending email with recipient " + recipient);
    	if (isPhoneGap()) {
    		if (isiOS()) {
    			var emailCallback = function(result) {
    				// called after email has been sent
    				if (result != EmailComposer.ComposeResultType.Cancelled) {
    					OKnesset.app.controllers.navigation.dispatchBack();
    				}
    			};
    			window.plugins.emailComposer.showEmailComposerWithCB(emailCallback,
    					"", "", recipient);
    		} else if (isAndroid) {
    			var extras = {};
    			extras[WebIntent.EXTRA_SUBJECT] = "";
    			extras[WebIntent.EXTRA_EMAIL] = [ recipient ];
    			window.plugins.webintent.startActivity({
    				action : WebIntent.ACTION_SEND,
    				type : 'text/plain',
    				extras : extras
    			}, function() {
    				// success callback
    				OKnesset.app.controllers.navigation.dispatchBack();
    			}, function() {
    				alert(OKnesset.strings.errorAndroidEmail);
    			});
    		}
    	}
    },
    phoneMember : function() {

    	var phone_num = this.phone;
    	OKnesset.log("** calling number " + phone_num);
    	if (isPhoneGap()) {
    		document.location="tel:+972-" + phone_num.substr(1);
    	}
    },
    updateData: function(member){

        this.memberView.query('#MemberInfo')[0].update(member);
        this.application.viewport.query('#toolbar')[0].setTitle(member.name);
        OKnesset.app.views.MemberView.memberEmailBtn.setText(this.getEmailButtonText());
        OKnesset.app.views.MemberView.memberEmailBtn.setHandler(this.sendEmail,member);
        OKnesset.app.views.MemberView.memberCallBtn.setText(this.getPhoneCallButtonText());
        OKnesset.app.views.MemberView.memberCallBtn.setHandler(this.phoneMember,member);

        if (!member.committees || member.committees.length == 0) {
            OKnesset.app.views.MemberView.memberCommitteesBtn.hide();
        } else {
            OKnesset.app.views.MemberView.memberCommitteesBtn.show();
        }


        if (!member.bills || member.bills.length==0) {
        	OKnesset.app.views.MemberView.memberBillsBtn.setText(OKnesset.strings.noBills);
        	OKnesset.app.views.MemberView.memberBillsBtn.disable();
        } else {
        	OKnesset.app.views.MemberView.memberBillsBtn.setText(OKnesset.strings.bills);
        	OKnesset.app.views.MemberView.memberBillsBtn.enable();
        }
        if (!member.committees || member.committees.length == 0) {
        	OKnesset.app.views.MemberView.memberCommitteesBtn.setText(OKnesset.strings.noCommittees);
        	OKnesset.app.views.MemberView.memberCommitteesBtn.disable();
        } else {
        	OKnesset.app.views.MemberView.memberCommitteesBtn.setText(OKnesset.strings.committees);
        	OKnesset.app.views.MemberView.memberCommitteesBtn.enable();
        }
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
