/**
 * The Member list panel (בנימין נתניהו, גדעון סער) shows a list of members
 * of the current selected party
 */
Ext.define('OKnesset.app.views.PartyView', {
	extend: 'Ext.Panel',

	config: {
		id : 'PartyView',
		layout : 'fit',
		title : '',
		currentParty : null,		
	},

	initialize: function() {
		this.callParents(arguments);
		this.memberList = new OKnesset.app.views.PartyView.MemberList();
		this.items = [this.memberList];
	}
});
Ext.reg('PartyView', OKnesset.app.views.PartyView);

Ext.define('OKnesset.app.views.PartyView.MemberList', {
	extend: 'Ext.List',

	config: {
		id : 'MemberList',
		itemTpl : '<div>{#} {name}</div>',
		store : OKnesset.MemberStore,
		onItemDisclosure : true
	},
});
