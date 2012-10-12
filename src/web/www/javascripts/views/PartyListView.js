/**
 * The List of parties (קדימה, ליכוד...) The first panel to be
 * displayed.
 */
Ext.define('OKnesset.app.views.PartyListView', {
	extend: 'Ext.List',

	config: {
		id: 'PartyListView',
		store: OKnesset.PartyStore,
		grouped: true,
		itemTpl: '<div class="partyName">{name}<div class="partySize">{number_of_seats}</div></div>',
		onItemDisclosure: true
	},
});
