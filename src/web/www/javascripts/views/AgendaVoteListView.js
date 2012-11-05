
OKnesset.app.views.AgendaVoteListView = new Ext.extend(Ext.List, {
    id: 'AgendaVoteListView',
    store: OKnesset.AgendaVoteListStore,
    grouped: true,

    itemTpl : '<div align="right">{title}<div class="supportSize">{importancestring}</div></div>',
    onItemDisclosure: true,
  
});

Ext.reg('AgendaVoteListView', OKnesset.app.views.AgendaVoteListView);
