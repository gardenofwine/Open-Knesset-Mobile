/**
 * The List of parties (קדימה, ליכוד...) The first panel to be
 * displayed.
 */
OKnesset.app.listPanel = new Ext.List(
		{
			id : 'PartyList',
			store : OKnesset.PartyStore,
			itemTpl : '<div class="partyName">{name}<div class="partySize">{members.length}</div></div>',
			onItemDisclosure : true
		});

OKnesset.app.views.PartyListView = new Ext.extend(Ext.Panel, {
	id : 'PartyListView',
	layout : 'fit',
	items : [ OKnesset.app.listPanel ],
	title : OKnesset.strings.partiesTitle,
	// TODO move to controller
	refresh : function() {
		OKnesset.app.listPanel.refresh();
	}
});

Ext.reg('PartyListView', OKnesset.app.views.PartyListView);
