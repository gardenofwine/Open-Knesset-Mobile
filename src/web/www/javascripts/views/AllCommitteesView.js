/**
 * The List of All Committees (עליה, פנים...) 
 */
OKnesset.app.views.AllCommitteesView = new Ext.extend(Ext.List, {
    id: 'AllCommitteesView',
    title:'ועדות הכנסת ' ,
    html:'</2>Committees</h2> <p> Knesset Committees page, </p>',
    store: OKnesset.AllCommitteesStore,
    itemTpl: '<div class="AllCommitteesName">{name}</div>',
    onItemDisclosure: true,
});

Ext.reg('AllCommitteesView', OKnesset.app.views.AllCommitteesView);
