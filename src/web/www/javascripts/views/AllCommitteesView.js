/**
 * The List of All Committees (עליה, פנים...) 
 */
OKnesset.app.views.AllCommitteesView = new Ext.extend(OKnesset.Panel, {
    id: 'AllCommitteesViewPanel',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function(){
    	this.committeeList = new OKnesset.app.views.AllCommitteesView.List();
		this.items = [this.committeeList];

        OKnesset.app.views.AllCommitteesView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('AllCommitteesView', OKnesset.app.views.AllCommitteesView);

OKnesset.app.views.AllCommitteesView.List = new Ext.extend(Ext.List, {
    id: 'AllCommitteesView',
    flex: 1,
    store: OKnesset.AllCommitteesStore,
    itemTpl: '<div class="AllCommitteesName">{name}<span class="btn-mini-text">{description}</span></div>',
    onItemDisclosure: true,
});
