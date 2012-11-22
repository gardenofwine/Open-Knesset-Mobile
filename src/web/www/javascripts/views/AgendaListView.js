OKnesset.app.views.AgendaListView = new Ext.extend(Ext.List, {
    id: 'AgendaListView',
    store: OKnesset.AgendaListStore,
    itemTpl: '<div>{name}<span class="btn-mini-text">' + OKnesset.strings.by + ' {public_owner_name}</span></div>',
    onItemDisclosure: true
});

Ext.reg('AgendaListView', OKnesset.app.views.AgendaListView);