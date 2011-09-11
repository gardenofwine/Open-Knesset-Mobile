
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

        OKnesset.billPanelToolbar = new Ext.Toolbar({
            items: [
				{xtype: 'spacer'},
				{
                text: 'back',
                ui: 'forward',
                handler: function() {
                    OKnesset.Viewport.setActiveItem('memberPanelWrapper', {type:'slide', direction:'left'});
                }
            }]
        });

//		OKnesset.billPanel = new Ext.Panel({
//			id: 'billPanel',
//			layout : 'fit',
//			tpl : billPanelHtml,
//            dockedItems: [OKnesset.billPanelToolbar]
//		});


		OKnesset.memberBillsTitle = new Ext.Panel({
			id: 'memberBillsTitle',
            layout: 'fit',
			dock: 'bottom',
            tpl: '<tpl if="billNumber &gt; 0"><h2 class="memberBillsTitle x-toolbar-dark">הצעות חוק פרטיות</h2></tpl>\
				  <tpl if="billNumber == 0"><h2 class="memberBillsTitle x-toolbar-dark">אין הצעות חוק פרטיות</h2></tpl>'
		});

        OKnesset.memberBillList = new Ext.List({
            id: 'memberBillList',
            itemTpl: '<div>{title}</div>',
			store: OKnesset.MemberBillsStore,
			layout : 'fit',
			grouped : true,
			flex : 1.5,
			listeners:{
				itemtap: function( that, index, item, e) {
					var record = that.store.getAt(index);
					gotoBill(record);
	            }
            },
            onItemDisclosure: gotoMember
        });

		OKnesset.memberImagePanel = new Ext.Panel({
			id: 'memberImagePanel',
            layout: 'fit',
//			height : '110',
//			flex : 1.5,
//            tpl: '<img src={img_url} width="75px" height="110px"></img>
            tpl: '<img src={img_url} height="100%"></img>'
		});

		OKnesset.memberInfoPanel = new Ext.Panel({
			id: 'memberInfoPanel',
//			flex : 4,
//			height : '110',
//			scroll : 'vertical',
            tpl: memberPanelHtml
		});

		OKnesset.memberPanel = new Ext.Panel({
			id: 'memberPanel',
//            layout: 'hbox',
//			height : '110',
			flex :1,
			items: [OKnesset.memberInfoPanel],
			dockedItems: [{
        		xtype: 'panel',
        		dock: 'bottom',
        		items: [OKnesset.memberBillsTitle]
    		}, {
        		xtype: 'panel',
        		dock: 'right',
        		items: [OKnesset.memberImagePanel]
    		}]
		});

		OKnesset.memberPanelWrapper = new Ext.Panel({
			id: 'memberPanelWrapper',
			layout : {
     			type: 'vbox',
        		align: 'stretch'
    		},
//            tpl: "Bills",
			listeners: {
				afterlayout : {
					fn: function(comp){

						if (OKnesset.MemberBillsStore.getCount() == 0) {
							OKnesset.memberBillList.setVisible(false);
						} else {
							OKnesset.memberBillList.setVisible(true);
						}

//						console.log("*** memberPanelAfterLAyout memberPanel height" + OKnesset.memberPanel.getHeight());
//						console.log("** image width " + OKnesset.memberImagePanel.getWidth() + "image height " + OKnesset.memberImagePanel.getHeight() + " member panel width" + Ext.DomQuery.select("#memberPanel")[0].style.width + "(" + OKnesset.memberPanel.getWidth() +" element.scrollHeight="+Ext.DomQuery.select("#memberPanel")[0].scrollHeight +
//						" element.clientHeight=" + Ext.DomQuery.select("#memberPanel")[0].clientHeight);
						// TODO calculate only once!
						var realImageHeight = OKnesset.memberPanel.getHeight() - OKnesset.memberBillsTitle.getHeight();
						var realImageWidth = 75/110 * realImageHeight;
//						realHeight = realHeight.replace("px","");
						// Set the member image height to the actual panel height (rescaling if necessary)
						OKnesset.memberInfoPanel.setWidth(OKnesset.memberPanel.getWidth() - realImageWidth);
						OKnesset.memberImagePanel.setHeight(realImageHeight);
						OKnesset.memberImagePanel.setWidth(realImageWidth);
						OKnesset.memberPanel.doLayout();
					}
				}
			},
			items: [OKnesset.memberPanel, OKnesset.memberBillList],
            dockedItems: [OKnesset.memberPanelToolbar]
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

		if (localStorage.getItem("PartyData") != null){
			// load data from localstorage (most updated locally)
			setTimeout(function(){
							var partyData = JSON.parse(localStorage.getItem("PartyData"));
							updatePartyData(partyData);
							updateFullDataFromWeb();
						}, 0);
		} else {
			// load initial data (data shipped with the application)
			Ext.Ajax.request({
			url: 'javascripts/partyData.js.jpg',
			callback: function(options, success, response){
				// for some reason, Ext.Ajax returns success == false when the local request returns
				if (response.responseText != null && response.responseText.length > 0) {
					loadTime = new Date();
					eval(response.responseText);
					console.log('Full data load was performed in ' + (loadTime.getTime() - mainLaunchTimeEnd.getTime()) / 1000);
					// partyData is evaluated from the
					var partyDataString = JSON.stringify(partyData);
					updatePartyData(partyData);
					localStorage.setItem("PartyDataDate", partyDataDate.getTime());
					localStorage.setItem("PartyData", partyDataString);
					updateFullDataFromWeb();
				}
				else {
					console.log('Full data load failure (' + JSON.stringify(response) + ') with status code ' + response.status);
				}
			}
		});
	}


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

function updateFullDataFromWeb(){
	var partyDataDate = new Date(parseInt(localStorage.getItem("PartyDataDate")));
	var now = new Date();

	// 24 hours is 1000*60*60*24 = 86,400,000
	console.log("** now="+now.getTime() + " PartyDataDate= " + partyDataDate.getTime());
	console.log("** now="+dateToString(now) + " PartyDataDate= " + dateToString(partyDataDate));
	if (now.getTime() > partyDataDate.getTime() + 86400000) {
		console.log("Need to load data from Oknesset");

		Ext.Ajax.request({
			url: 'javascripts/createInitialData.js',
			callback: function(options, success, response){
				// for some reason, Ext.Ajax returns success == false when the local request returns
				if (response.responseText != null && response.responseText.length > 0) {
//					loadTime = new Date();
					eval(response.responseText);
					console.log('Oknesset web parser loaded');
					OKnessetParser.loadData(updatePartyData);
					var now = new Date();
			    	localStorage.setItem("PartyDataDate", now.getTime());
				}
				else {
					console.log('Oknesset web parser failure (' + JSON.stringify(response) + ') with status code ' + response.status);
				}
			}
		});

	}
}

function dateToString(date){
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var year = date.getFullYear();
	return "" + month + "/" + day + "/" + year;
}

// update the party store with the full data (replace the slimData)
function updatePartyData(fullPartyData) {
	console.log("-=updatePartyData=-");
	OKnesset.PartyStore.loadData(fullPartyData, false);
	OKnesset.Viewport.getActiveItem().items.getAt(0).refresh();
}

function gotoParty(record){
	//console.log(JSON.stringify(record.data));
	var name = record.data.name;
	OKnesset.memberListToolbar.setTitle(name);
	OKnesset.memberListToolbar.items.getAt(1).setText("מפלגות");
	if (OKnesset.memberList.scroller) {
		OKnesset.memberList.scroller.scrollTo({
			x: 0,
			y: 0
		});
	}
	OKnesset.MemberStore.loadData(record.data.members,false);
    OKnesset.Viewport.setActiveItem('memberListWrapper', {type:'slide', direction:'right'});
}

function gotoMember(record){
    var member = record.data;

	OKnesset.memberImagePanel.update({
		img_url: "images/members/" + member.img_url.substring(member.img_url.lastIndexOf('/')+1)
	});
	OKnesset.memberBillsTitle.update({billNumber: member.bills.length});
	OKnesset.memberInfoPanel.update(member);
	OKnesset.MemberBillsStore.loadData(member.bills);
    OKnesset.memberPanelToolbar.setTitle(member.name);
	// scroll bill list up
	if (OKnesset.memberBillList.scroller) {
		OKnesset.memberBillList.scroller.scrollTo({
			x: 0,
			y: 0
		});
	}

	// back button
    OKnesset.memberPanelToolbar.items.getAt(1).setText(OKnesset.memberListToolbar.title);
    OKnesset.Viewport.setActiveItem('memberPanelWrapper', {type:'slide', direction:'right'});
}

function gotoBill(record){
	var bill = record.data;
	console.log("Unsupported yet! " + JSON.stringify(bill));
	var url = 'http://www.oknesset.org' + bill.url;
	navigator.notification.confirm('הצעת החוק תיפתח בדפדפן', function(idx){gotoBillCallback(idx, url) }, 'לפתוח בדפדפן?', 'ביטול,אישור');
}

function gotoBillCallback(btnIndex, url){
	if (btnIndex == 2){
		window.open(url);
	}
}

document.addEventListener("deviceready", OKnesset.mainLaunch, false);
