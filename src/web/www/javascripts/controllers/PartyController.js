Ext.regController('Party', {

    // index action
	Index: function(options)
    {
        if ( ! this.partyView)
        {
            this.partyView = this.render({
                xtype: 'PartyView',
            });
        }

        var name = options.data.name;

        // Analytics
    	GATrackParty(name);

    	// Set the page's data
        OKnesset.MemberStore.loadData(options.data.members, false);
        // TODO currentParty is only needed for the email widget. Find a better way to fetch the current party
    	this.partyView.currentParty = options.data;

    	// in case the member list was scrolled down( because the user viewed the
    	// panel for another member)
        var memberList = this.partyView.query('#memberList')[0];
    	if (memberList.scroller) {
    		memberList.scroller.scrollTo({
    			x : 0,
    			y : 0
    		});
    	}

    	// display back button
        var backBtn = this.application.viewport.query('#backBtn')[0];
        if (options.back) {
            backBtn.setHandler(function() {
    			dispatchBack(options.back);
    		});
        	backBtn.show();
        } else {
        	backBtn.hide();
    	}


        this.application.viewport.query('#toolbar')[0].setTitle(name);
    	this.application.viewport.setActiveItem(this.partyView, options.animation);
    },
});