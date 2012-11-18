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
				this.button = new Ext.Button({                                                       
					id  : 'Button',
					flex : 1,
					cls : 'read-more-btn',
					text: OKnesset.strings.ReadMore
				});
				this.items = [this.info, this.button, this.memberList];
				OKnesset.app.views.PartyView.superclass.initComponent.apply(this, arguments);
			}
		});

Ext.reg('PartyView', OKnesset.app.views.PartyView);

OKnesset.app.views.PartyView.MemberList = new Ext.extend(Ext.List, {
	id : 'MemberList',
	flex : 5,
	itemTpl : '<div>{#} {name}</div>',
	scroll: false,
	store : OKnesset.MemberStore,
	onItemDisclosure : true
});

OKnesset.app.views.PartyView.MiniText = new Ext.extend(Ext.Panel, {
	id : 'MiniText',
	padding: 5,
	tpl : '<div class="partyInfo"><p><img class="party-logo" src="{logo_url}" alt="{party_name}" title="{party_name}">{short_info}</p></div>'
});

OKnesset.app.views.PartyView.MiniInfo = new Ext.extend(Ext.Panel, {
	id : 'MiniInfo',
	flex : 5,
	scroll: true,
	items: [
		new OKnesset.app.views.PartyView.MiniText()
	]
});
