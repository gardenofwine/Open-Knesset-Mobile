
OKnesset.app.views.AgendaVoteListView = new Ext.extend(Ext.List, {
    id: 'AgendaVoteListView',
    store: OKnesset.AgendaVoteListStore,
    grouped: true,

    itemTpl : '<div align="right">{title}<span class="btn-mini-text">{importancestring}</span></div>',
    onItemDisclosure: true,
});

Ext.reg('AgendaVoteListView', OKnesset.app.views.AgendaVoteListView);
