/**
 * The List of parties (קדימה, ליכוד...) The first panel to be
 * displayed.
 */
OKnesset.app.PartyList = new Ext.List(
		{
			id : 'PartyList',
			store : OKnesset.PartyStore,
			itemTpl : '<div class="partyName">{name}<div class="partySize">{members.length}</div></div>',
			onItemDisclosure : true
		});

OKnesset.app.views.PartyListView = new Ext.extend(Ext.Panel, {
	id : 'PartyListView',
	layout : 'fit',
	items : [ OKnesset.app.PartyList ],
	title : OKnesset.strings.partiesTitle,
});

Ext.reg('PartyListView', OKnesset.app.views.PartyListView);
