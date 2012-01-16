Ext.regController('PartyList', {

    // index action
	Index: function(options)
    {
        if ( ! this.partyListView)
        {
            this.partyListView = this.render({
                xtype: 'PartyListView',
            });
        }

        this.application.viewport.setActiveItem(this.partyListView, options.animation);
        this.application.viewport.query('#toolbar')[0].setTitle(this.partyListView.title);
    },

    // about action
    About: function(options)
    {
     	console.log(options);
        if ( ! this.aboutView)
        {
            this.aboutView = this.render({
                xtype: 'HomeAbout',
            });
        }

        var backBtn = this.application.viewport.query('#backBtn')[0];
        backBtn.show();

        backBtn.setHandler(function()
		{
			dispatchBack(options.back);
		});

        this.application.viewport.setActiveItem(this.aboutView);
    },
});