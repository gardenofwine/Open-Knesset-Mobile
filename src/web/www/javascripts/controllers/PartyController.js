Ext.regController('Party', {

    // index action
	Index: function(options)
    {
        if ( ! this.partyView)
        {
            this.partyView = this.render({
                xtype: 'PartyView',
            });
            var memberList = this.partyView.query('#MemberList')[0];
            memberList.addListener('itemtap',
                	function(that, index, item, e) {
    					var record = that.store.getAt(index);
    					OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + record.data.id, options.historyUrl);
    				});
        }

        var party = OKnesset.PartyStore.findBy(function(r){return r.data.id === parseInt(options.id)});
        party = OKnesset.PartyStore.getAt(party);
        var name = party.data.name;

        // Analytics
    	GATrackParty(name);

        this.filterMembersByParty(party);

        // TODO currentParty is only needed for the email widget. Find a better way to fetch the current party
    	this.currentParty = party.data;

    	// in case the member list was scrolled down( because the user viewed the
    	// panel for another member)
    	if (options.pushed){
	        var memberList = this.partyView.query('#MemberList')[0];
	    	if (memberList.scroller) {
	    		memberList.scroller.scrollTo({
	    			x : 0,
	    			y : 0
	    		});
	    	}
    	}

    	this.application.viewport.query('#toolbar')[0].setTitle(name);
    	this.application.viewport.setActiveItem(this.partyView, options.animation);
    },
    getReviewButtonText : function(){
    	return Ext.util.Format.format(
				OKnesset.strings.emailParty,
				this.currentParty.name);
    },
	refresh : function() {
		var party = getPartyFromPartyStoreByName(this.currentParty.name);
        this.filterMembersByParty(party);
        var memberList = this.partyView.query('#MemberList')[0];
        memberList.refresh();
	},
    // private
    /*  
    Set the party filter on the store
    */

    filterMembersByParty : function(party) {
        OKnesset.MemberStore.clearFilter(true);
        OKnesset.MemberStore.filter({
            property: 'party_id',  
            value : party.data.id});
    }


});