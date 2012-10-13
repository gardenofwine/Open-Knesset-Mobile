/**
 * The Member list panel (בנימין נתניהו, גדעון סער) shows a list of members
 * of the current selected party
 */
OKnesset.app.views.PartyView = new Ext.extend(Ext.Panel, {
			id : 'PartyView',
			layout : 'fit',
			title : '',
			currentParty : null,
		    initComponent: function()
		    {
		    	this.manifesto = new OKnesset.app.views.PartyView.Manifesto();
		    	this.memberList = new OKnesset.app.views.PartyView.MemberList();
		    	this.items = [this.memberList];
		    	this.dockedItems = [{
		             xtype: 'panel',
		             dock: 'top',
		             items: [this.manifesto]
		           }];
		        OKnesset.app.views.PartyView.superclass.initComponent.apply(this, arguments);
		    }
		});

Ext.reg('PartyView', OKnesset.app.views.PartyView);

OKnesset.app.views.PartyView.Manifesto = new Ext.extend(Ext.Panel, {
	id: 'Manifesto',
	tpl: '<div dir="rtl">{description}</div>',
	store: OKnesset.PartyManifestoStore
});

OKnesset.app.views.PartyView.MemberList = new Ext.extend(Ext.List, {
	id : 'MemberList',
	itemTpl : '<div>{#} {name}</div>',
	store : OKnesset.MemberStore,
	onItemDisclosure : true
});