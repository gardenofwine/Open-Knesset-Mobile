ListDemo = new Ext.Application({
    name: "ListDemo",

    launch: function() {

        ListDemo.detailToolbar = new Ext.Toolbar({
            items: [{
                text: 'back',
                ui: 'back',
                handler: function() {
                    ListDemo.Viewport.setActiveItem('listwrapper', {type:'slide', direction:'right'});
                }
            }]
        });

        ListDemo.detailPanel = new Ext.Panel({
            id: 'detailpanel',
            tpl: 'Hello, {firstName}!',
            dockedItems: [ListDemo.detailToolbar]
        });

        ListDemo.listPanel = new Ext.List({
            id: 'indexlist',
            store: ListDemo.PartyStore,
            itemTpl: '<div class="contact" dir="rtl">{name}</div>',
            grouped: true,
			listeners:{
				itemtap: function( that, index, item, e) {
					var record = that.store.getAt(index);
	                var name = record.data.name;
    	            ListDemo.detailToolbar.setTitle(name);
        	        ListDemo.detailPanel.update(record.data);
            	    ListDemo.Viewport.setActiveItem('detailpanel');
	            }
            },
            onItemDisclosure: function(record) {
	                var name = record.data.name;
    	            ListDemo.detailToolbar.setTitle(name);
        	        ListDemo.detailPanel.update(record.data);
            	    ListDemo.Viewport.setActiveItem('detailpanel');
            }
        });

        ListDemo.listWrapper = new Ext.Panel({
            id: 'listwrapper',
            layout: 'fit',
            items: [ListDemo.listPanel],
            dockedItems: [{
                xtype: 'toolbar',
                title: 'Bond girls'
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


