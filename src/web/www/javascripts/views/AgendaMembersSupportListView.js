
OKnesset.app.views.AgendaMembersSupportListView = new Ext.extend(Ext.List, {
    id: 'AgendaMembersSupportListView',
    store: OKnesset.AgendaMembersSupportListStore,
    //grouped: true,

    itemTpl :'<div class="memberName">{name}<div class="supportSize">{score}%</div></div>', 
    onItemDisclosure: true,
  
});

Ext.reg('AgendaMembersSupportListView', OKnesset.app.views.AgendaMembersSupportListView);
