
OKnesset = new Ext.Application({
    name: "OKnesset",

    launch: function() {
        this.launched = true;
        this.mainLaunch();
	},
    mainLaunch: function() {
        if (navigator.platform != "MacIntel" && !this.launched) {
			return;
		}
        console.log('mainLaunch');

        OKnesset.memberListToolbar = new Ext.Toolbar({
            items: [
				{xtype: 'spacer'},
				{
                text: 'back',
                ui: 'forward',
                handler: function() {
                    OKnesset.Viewport.setActiveItem('partyListWrapper', {type:'slide', direction:'left'});
                }
            }]
        });

        OKnesset.memberPanelToolbar = new Ext.Toolbar({
            items: [
				{xtype: 'spacer'},
				{
                text: 'back',
                ui: 'forward',
                handler: function() {
                    OKnesset.Viewport.setActiveItem('memberListWrapper', {type:'slide', direction:'left'});
                }
            }]
        });

		OKnesset.memberPanel = new Ext.Panel({
			id: 'memberPanel',
            layout: 'fit',
            tpl: memberPageHtml,
            dockedItems: OKnesset.memberPanelToolbar
		});

        OKnesset.memberList = new Ext.List({
            id: 'memberList',
            tpl: 'Hello, {name}!',
            itemTpl: '<div>{name}</div>',
			store: OKnesset.MemberStore,
			listeners:{
				itemtap: function( that, index, item, e) {
					var record = that.store.getAt(index);
					gotoMember(record);
	            }
            },
            onItemDisclosure: gotoMember
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
            items: [OKnesset.partyListWrapper, OKnesset.memberListWrapper, OKnesset.memberPanel]
        });


		// load full data
		$.getScript('javascripts/partyData.js', function(data, textStatus){
   			if (textStatus == 'success'){
	   			console.log('Load was performed.');
				OKnesset.PartyStore.loadData(partyData,false);
				OKnesset.Viewport.getActiveItem().items.getAt(0).refresh();
			} else {
	   			console.log('Load failed.');
			}
		});
    }
});


function gotoParty(record){
	//console.log(JSON.stringify(record.data));
    var name = record.data.name;
    OKnesset.memberListToolbar.setTitle(name);
    OKnesset.memberListToolbar.items.getAt(1).setText("מפלגות");
	OKnesset.MemberStore.loadData(record.data.members,false);
    OKnesset.Viewport.setActiveItem('memberListWrapper', {type:'slide', direction:'right'});
}

function gotoMember(record){
    var member = record.data;
	OKnesset.memberPanel.update(member);
    OKnesset.memberPanelToolbar.setTitle(member.name);
	// back button
    OKnesset.memberPanelToolbar.items.getAt(1).setText(OKnesset.memberListToolbar.title);
    OKnesset.Viewport.setActiveItem('memberPanel', {type:'slide', direction:'right'});
}

document.addEventListener("deviceready", OKnesset.mainLaunch, false);
