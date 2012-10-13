OKnesset.app.views.AgendaDetailsView = new Ext.extend(Ext.Panel, {
			id : 'AgendaDetailsView',
			layout : 'fit',
			title : '',
      scroll: 'vertical',
			currentParty : null,
		    initComponent: function()
		    {
		    	this.AgendaDetails = new OKnesset.app.views.AgendaDetailsView.AgendaDetails();
		    	this.items = [this.AgendaDetails];
		        OKnesset.app.views.AgendaDetailsView.superclass.initComponent.apply(this, arguments);
		    }
		});

Ext.reg('AgendaDetailsView', OKnesset.app.views.AgendaDetailsView);


OKnesset.app.views.AgendaDetailsView.AgendaVoteListBtn = new Ext.Button({margin : '10 5 10 5',text :  OKnesset.strings.AgendaVoteButton});
OKnesset.app.views.AgendaDetailsView.SupportMemberBtn = new Ext.Button({margin : '10 5 10 5',text : OKnesset.strings.SupportMembers});
OKnesset.app.views.AgendaDetailsView.SupportPartyBtn = new Ext.Button({margin : '10 5 10 5',text : OKnesset.strings.SupportParties});

OKnesset.app.views.AgendaDetailsView.AgendaDetails = new Ext.extend(Ext.Panel, {
    id: 'AgendaDetails',
    
    flex: 1,
    initComponent: function(){
        this.AgendaInfo = new OKnesset.app.views.AgendaDetailsView.AgendaInfo();
      
       this.dockedItems = [{
             xtype: 'panel',
             dock: 'top',
             items: [this.AgendaInfo]
           },
           {
           	xtype: 'panel',
             dock: 'bottom',
             items: [OKnesset.app.views.AgendaDetailsView.AgendaVoteListBtn,
                     OKnesset.app.views.AgendaDetailsView.SupportMemberBtn, 
                     OKnesset.app.views.AgendaDetailsView.SupportPartyBtn]
           }
            ];

        
        OKnesset.app.views.AgendaDetailsView.AgendaDetails.superclass.initComponent.apply(this, arguments);
    
}
});

OKnesset.app.views.AgendaDetailsView.AgendaInfo = new Ext.extend(Ext.Panel, {
	id : 'AgendaInfo',
	//scroll: 'vertical',
	store : OKnesset.AgendaDetailsStore,
	tpl :    '<div dir="rtl">' + OKnesset.strings.AgendaDescription + '<br> {description}<br><br>'
	                           + OKnesset.strings.mostsupportmember + ' {MostSupportMember} <br> '
	                           + OKnesset.strings.mostsupportparty + ' {MostSupportParty}</div>'

});
