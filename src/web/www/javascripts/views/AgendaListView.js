OKnesset.app.views.AgendaListView = new Ext.extend(OKnesset.Panel, {
	id: 'AgendaListViewPanel',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	initComponent: function(){
		this.agendaList = new OKnesset.app.views.AgendaListView.List();
		this.items = [this.agendaList];

		OKnesset.app.views.AgendaListView.superclass.initComponent.apply(this, arguments);
	}

});


OKnesset.app.views.AgendaListView.List = new Ext.extend(Ext.List, {
	id: 'AgendaListView',
    flex: 1,
	store: OKnesset.AgendaListStore,
	itemTpl: '<div>{name}<span class="btn-mini-text">' + OKnesset.strings.by + ' {public_owner_name}</span></div>',
	onItemDisclosure: true
});

Ext.reg('AgendaListView', OKnesset.app.views.AgendaListView);