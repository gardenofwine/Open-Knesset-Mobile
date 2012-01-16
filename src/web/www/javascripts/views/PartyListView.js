/**
 * The List of parties (קדימה, ליכוד...) The first panel to be
 * displayed.
 */
OKnesset.app.listPanel = new Ext.List(
		{
			id : 'PartyList',
			store : OKnesset.PartyStore,
			itemTpl : '<div class="partyName">{name}<div class="partySize">{members.length}</div></div>',
//			listeners : {
//				itemtap : function(that, index, item, e) {
//					var record = that.store.getAt(index);
//					gotoParty(record);
//				}
//			},
			onItemDisclosure : true
		});

OKnesset.app.views.PartyListView = new Ext.extend(Ext.Panel, {
	id : 'PartyListView',
	layout : 'fit',
	items : [ OKnesset.app.listPanel ],
	title : OKnesset.strings.partiesTitle,
//	dockedItems : [ OKnesset.partyListToolbar ],
	refresh : function() {
		OKnesset.app.listPanel.refresh();
	},
	setTitle : function() {
		// Nothing to do here, the title remains the same
	}
});

Ext.reg('PartyListView', OKnesset.app.views.PartyListView);
