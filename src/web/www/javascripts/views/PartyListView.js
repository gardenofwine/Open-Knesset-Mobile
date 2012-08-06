/**
 * The List of parties (קדימה, ליכוד...) The first panel to be
 * displayed.
 */
OKnesset.app.views.PartyListView = new Ext.extend(Ext.List, {
    id: 'PartyListView',
    store: OKnesset.PartyStore,
    grouped: true,
    itemTpl: '<div class="partyName">{name}<div class="partySize">{number_of_seats}</div></div>',
    onItemDisclosure: true
});

Ext.reg('PartyListView', OKnesset.app.views.PartyListView);
