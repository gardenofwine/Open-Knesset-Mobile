/**
 * The List of agendas.
 */
OKnesset.app.views.AgendaListView = new Ext.extend(Ext.List, {
    id: 'AgendaListView',
    store: OKnesset.AgendaStore,
    itemTpl: '<div class="agendaName">{name}<div class="agendaVotes">{number_of_items} ' + OKnesset.strings.votes + '</div></div>',
    onItemDisclosure: false
});

Ext.reg('AgendaListView', OKnesset.app.views.AgendaListView);
