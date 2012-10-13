
OKnesset.app.views.AgendaVoteListView = new Ext.extend(Ext.List, {
    id: 'AgendaVoteListView',
    store: OKnesset.AgendaVoteListStore,
    grouped: true,

    itemTpl :  //  '<div dir="rtl">{title}<br>'  + OKnesset.strings.importance + ' {importancestring} </div>',
    '<div class="AgendaVoteTitle">{title}<div class="partySize">{importancestring}</div></div>',
    onItemDisclosure: true,
  
});

Ext.reg('AgendaVoteListView', OKnesset.app.views.AgendaVoteListView);
