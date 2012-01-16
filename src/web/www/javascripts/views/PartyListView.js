/**
 * The List of parties (קדימה, ליכוד...) The first panel to be
 * displayed.
 */
//OKnesset.partyListToolbar = new Ext.Toolbar({
//	items : [ OKnesset.toolbarInfoItem, OKnesset.toolbarMailItem ],
//	title : OKnesset.strings.partiesTitle
//});

OKnesset.app.listPanel = new Ext.List(
		{
			id : 'indexlist',
			store : OKnesset.PartyStore,
			itemTpl : '<div class="partyName">{name}<div class="partySize">{members.length}</div></div>',
			listeners : {
				itemtap : function(that, index, item, e) {
					var record = that.store.getAt(index);
					gotoParty(record);
				}
			},
			onItemDisclosure : gotoParty
		});

OKnesset.app.views.partyListWrapper = new Ext.extend(Ext.Panel, {
	id : 'partyListWrapper',
	layout : 'fit',
	items : [ OKnesset.app.listPanel ],
//	dockedItems : [ OKnesset.partyListToolbar ],
	refresh : function() {
		OKnesset.app.listPanel.refresh();
	},
	setTitle : function() {
		// Nothing to do here, the title remains the same
	}
});

Ext.reg('partyListWrapper', OKnesset.app.views.partyListWrapper);
