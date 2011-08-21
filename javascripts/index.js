
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

	   	mainLaunchTime = new Date();
		function printLoadingTimes(){
			console.log('mainLaunch (' + mainLaunchTime.toString()+ ').  Phonegap load time ' + (phonegapEnd.getTime() - phonegapStart.getTime()) / 1000 + ' total scripts load time' + (scriptLoadEndTime.getTime() - scriptLoadStartTime.getTime()) / 1000);
//			console.log('### jquery ('+ jqueryLoadEndTime.toString()+') load time ' + (jqueryLoadEndTime.getTime() - jqueryLoadStartTime.getTime())/1000);
			console.log('### sencha ('+ senchaLoadEndTime.toString() +')load time ' + (senchaLoadEndTime.getTime() - senchaLoadStartTime.getTime())/1000);
			console.log('### oknesset ('+ oknessetLoadEndTime.toString() +')load time ' + (oknessetLoadEndTime.getTime() - oknessetLoadStartTime.getTime())/1000);
		}
		printLoadingTimes();


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

        OKnesset.memberBillList = new Ext.List({
            id: 'memberBillList',
            itemTpl: '<div>{title}</div>',
			store: OKnesset.MemberBillsStore,
			listeners:{
				itemtap: function( that, index, item, e) {
					var record = that.store.getAt(index);
					gotoMember(record);
	            }
            },
            onItemDisclosure: gotoMember
        });


		OKnesset.memberPanel = new Ext.Panel({
			id: 'memberPanel',
            layout: 'fit',
            tpl: memberPageHtml
		});

		OKnesset.memberPanelWrapper = new Ext.Panel({
			id: 'memberPanelWrapper',
            layout: 'fit',
            tpl: "Bills",
			items: OKnesset.memberBillList,
            dockedItems: [OKnesset.memberPanelToolbar, OKnesset.memberPanel]
		});

        OKnesset.memberList = new Ext.List({
            id: 'memberList',
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
            itemTpl: '<div class="partyName">{name}<div class="partySize">{members.length}</div></div>',
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
            items: [OKnesset.partyListWrapper, OKnesset.memberListWrapper, OKnesset.memberPanelWrapper]
        });

	   mainLaunchTimeEnd = new Date();
	   console.log('sencha touch load time ' + (mainLaunchTimeEnd.getTime() - mainLaunchTime.getTime()) / 1000);


		// load full data
		Ext.Ajax.request({
			url: 'javascripts/partyData.js',
			callback: function(options, success, response){
				if (response.responseText != null && response.responseText.length > 0) {
					loadTime = new Date();
					eval(response.responseText);
					console.log('Full data load was performed in ' + (loadTime.getTime() - mainLaunchTimeEnd.getTime()) / 1000);
					OKnesset.PartyStore.loadData(partyData, false);
					OKnesset.Viewport.getActiveItem().items.getAt(0).refresh();
				}
				else {
					console.log('Full data load failure (' + JSON.stringify(response) + ') with status code ' + response.status);
				}
			}
		});

//		$.getScript('javascripts/partyData.js', function(data, textStatus){
//   			if (textStatus == 'success'){
//			   loadTime = new Date();
//	   			console.log('Full data load was performed in ' + (loadTime.getTime() - mainLaunchTimeEnd.getTime()) / 1000);
//				OKnesset.PartyStore.loadData(partyData,false);
//				OKnesset.Viewport.getActiveItem().items.getAt(0).refresh();
//			} else {
//	   			console.log('Load failed.');
//			}
//		});
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
	console.log(member.bills);
	OKnesset.MemberBillsStore.loadData(member.bills);
    OKnesset.memberPanelToolbar.setTitle(member.name);
	// back button
    OKnesset.memberPanelToolbar.items.getAt(1).setText(OKnesset.memberListToolbar.title);
    OKnesset.Viewport.setActiveItem('memberPanelWrapper', {type:'slide', direction:'right'});
}


document.addEventListener("deviceready", OKnesset.mainLaunch, false);
