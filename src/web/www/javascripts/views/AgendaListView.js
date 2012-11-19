OKnesset.app.views.AgendaListView = new Ext.extend(Ext.List, {
    id: 'AgendaListView',
    store: OKnesset.AgendaListStore,
    itemTpl: '<div>{name}</div>',
    onItemDisclosure: true
});

Ext.reg('AgendaListView', OKnesset.app.views.AgendaListView);