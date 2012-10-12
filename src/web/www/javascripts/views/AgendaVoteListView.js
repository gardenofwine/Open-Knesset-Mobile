
OKnesset.app.views.AgendaVoteListView = new Ext.extend(Ext.List, {
    id: 'AgendaVoteListView',
    store: OKnesset.AgendaVoteListStore,
    grouped: true,

    itemTpl :    '<div dir="rtl">{title}<br>'
	                           + OKnesset.strings.level + ' {scorestring}   <br> '
	                           + OKnesset.strings.importance + ' {importancestring} </div>',
    onItemDisclosure: true,
  
});

Ext.reg('AgendaVoteListView', OKnesset.app.views.AgendaVoteListView);
