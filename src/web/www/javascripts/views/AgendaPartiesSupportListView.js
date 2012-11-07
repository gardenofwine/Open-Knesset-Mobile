
OKnesset.app.views.AgendaPartiesSupportListView = new Ext.extend(Ext.List, {
    id: 'AgendaPartiesSupportListView',
    store: OKnesset.AgendaPartiesSupportListStore,
    //grouped: true,

    itemTpl : '<div class="memberName">{name}<div class="supportSize">{score}%</div></div>',
    onItemDisclosure: true,
  
});

Ext.reg('AgendaPartiesSupportListView', OKnesset.app.views.AgendaPartiesSupportListView);
