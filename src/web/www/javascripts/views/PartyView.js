/**
 * The Member list panel (בנימין נתניהו, גדעון סער) shows a list of members
 * of the current selected party
 */
//OKnesset.memberListToolbar = new Ext.Toolbar({
//	items : [ OKnesset.toolbarInfoItem, OKnesset.toolbarMailItem, {
//		xtype : 'spacer'
//	}, {
//		text : 'back',
//		ui : 'forward',
//		handler : function() {
//			// This is the back button's functionality.
//			getViewport().setActiveItem('PartyListView', {
//				type : 'slide',
//				direction : 'left'
//			});
//		}
//	} ]
//});

OKnesset.app.memberList = new Ext.List({
	id : 'memberList',
	itemTpl : '<div>{#} {name}</div>',
	store : OKnesset.MemberStore,
	listeners : {
		itemtap : function(that, index, item, e) {
			var record = that.store.getAt(index);
			gotoMember(record);
		}
	},
	onItemDisclosure : gotoMember
});

OKnesset.app.views.PartyView = new Ext.extend(Ext.Panel, {
			id : 'PartyView',
			layout : 'fit',
			items : [ OKnesset.app.memberList ],
			// TODO move to controller
			refresh : function() {
				var party = getPartyFromPartyStoreByName(OKnesset.memberListWrapper.currentParty.name);
				OKnesset.MemberStore.loadData(party.data.members, false);
				OKnesset.memberList.refresh();
			},
			title : '',
			currentParty : null

		});

Ext.reg('PartyView', OKnesset.app.views.PartyView);
