OKnesset = new Ext.Application({
    name: "OKnesset",

    launch: function() {

        OKnesset.memberListToolbar = new Ext.Toolbar({
            items: [
				{xtype: 'spacer'},
				{
                text: 'back',
                ui: 'forward',
                handler: function() {
                    OKnesset.Viewport.setActiveItem('partyListWrapper', {type:'slide', direction:'right'});
                }
            }]
        });

        OKnesset.memberList = new Ext.List({
            id: 'memberList',
            tpl: 'Hello, {name}!',
            itemTpl: '<div>{name}</div>',
			store: OKnesset.MemberStore
        });

	 	OKnesset.memberListWrapper = new Ext.Panel({
            id: 'memberListWrapper',
            layout: 'fit',
            items: [OKnesset.memberList],
            dockedItems: OKnesset.memberListToolbar
        });


        OKnesset.listPanel = new Ext.List({
            id: 'indexlist',
            store: OKnesset.PartyStore,
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

        OKnesset.partyListWrapper = new Ext.Panel({
            id: 'partyListWrapper',
            layout: 'fit',
            items: [OKnesset.listPanel],
            dockedItems: [{
                xtype: 'toolbar',
                title: 'מפלגות'
            }]
        });

        OKnesset.Viewport = new Ext.Panel ({
            fullscreen: true,
            layout: 'card',
            cardSwitchAnimation: 'slide',
            items: [OKnesset.partyListWrapper, OKnesset.memberListWrapper]
        });

    }
});


function gotoParty(record){
	console.log(JSON.stringify(record.data));
    var name = record.data.name;
    OKnesset.memberListToolbar.setTitle(name);
	OKnesset.MemberStore.loadData(record.data.members,false);
    OKnesset.Viewport.setActiveItem('memberListWrapper');
}

