/**
 * The Member list panel (בנימין נתניהו, גדעון סער) shows a list of members
 * of the current selected party
 */
OKnesset.app.views.PartyView = new Ext.extend(Ext.Panel, {
			id : 'PartyView',
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			title : '',
			scroll: 'vertical',
			currentParty : null,
			initComponent: function()
			{
				this.memberList = new OKnesset.app.views.PartyView.MemberList();
				this.info = new OKnesset.app.views.PartyView.MiniInfo();
				this.items = [this.info, this.memberList];
				OKnesset.app.views.PartyView.superclass.initComponent.apply(this, arguments);
			}
		});

Ext.reg('PartyView', OKnesset.app.views.PartyView);

OKnesset.app.views.PartyView.MemberList = new Ext.extend(Ext.List, {
	id : 'MemberList',
	itemTpl : '<div>{#} {name}</div>',
	scroll: false,
	store : OKnesset.MemberStore,
	onItemDisclosure : true
});
OKnesset.app.views.PartyView.MiniInfo = new Ext.extend(Ext.Panel, {
	id : 'MiniInfo',
	height : 300,
	scroll: false,
	padding: 5,
	tpl : '<div class="partyInfo" dir="rtl"><p><img class= "party-logo" src="{logo_url}" alt="{party_name}" title="{party_name}">{short_info}</p><p><a href="#PartyInfo/Index/{party_id}">' + OKnesset.strings.ReadMore + '</a></p></div>'
});
