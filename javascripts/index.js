ListDemo = new Ext.Application({
    name: "ListDemo",

    launch: function() {

        ListDemo.detailToolbar = new Ext.Toolbar({
            items: [
				{xtype: 'spacer'},
				{
                text: 'back',
                ui: 'forward',
                handler: function() {
                    ListDemo.Viewport.setActiveItem('listwrapper', {type:'slide', direction:'right'});
                }
            }]
        });

        ListDemo.detailPanel = new Ext.Panel({
            id: 'detailpanel',
            tpl: 'Hello, {name}!',
            dockedItems: [ListDemo.detailToolbar]
        });

        ListDemo.listPanel = new Ext.List({
            id: 'indexlist',
            store: ListDemo.PartyStore,
            itemTpl: '<div class="partyName"><div>{name}</div><div class="partySize">{members.length}</div></div>',
//            grouped: true,
			listeners:{
				itemtap: function( that, index, item, e) {
					var record = that.store.getAt(index);
					gotoParty(record);
	            }
            },
            onItemDisclosure: gotoParty
        });

        ListDemo.listWrapper = new Ext.Panel({
            id: 'listwrapper',
            layout: 'fit',
            items: [ListDemo.listPanel],
            dockedItems: [{
                xtype: 'toolbar',
                title: 'מפלגות'
            }]
        });

        ListDemo.Viewport = new Ext.Panel ({
            fullscreen: true,
            layout: 'card',
            cardSwitchAnimation: 'slide',
            items: [ListDemo.listWrapper, ListDemo.detailPanel]
        });

    }
});


function gotoParty(record){
    var name = record.data.name;
    ListDemo.detailToolbar.setTitle(name);
    ListDemo.detailPanel.update(record.data);
    ListDemo.Viewport.setActiveItem('detailpanel');
}

