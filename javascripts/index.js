
OKnesset = new Ext.Application({
    name: "OKnesset",

    launch: function() {
        this.launched = true;
        this.mainLaunch();
	},
    mainLaunch: function() {
        if (isPhoneGap() && !this.launched) {
			return;
		}

		if (isPhoneGap() && isAndroid()){
			document.addEventListener("backbutton", onBackKey, false);
		}

	   googleAnalytics();

	   	mainLaunchTime = new Date();
		function printLoadingTimes(){
			console.log('mainLaunch (' + mainLaunchTime.toString()+ ').  Phonegap load time ' + (phonegapEnd.getTime() - phonegapStart.getTime()) / 1000 + ' total scripts load time' + (scriptLoadEndTime.getTime() - scriptLoadStartTime.getTime()) / 1000);
//			console.log('### jquery ('+ jqueryLoadEndTime.toString()+') load time ' + (jqueryLoadEndTime.getTime() - jqueryLoadStartTime.getTime())/1000);
			console.log('### sencha ('+ senchaLoadEndTime.toString() +')load time ' + (senchaLoadEndTime.getTime() - senchaLoadStartTime.getTime())/1000);
			console.log('### oknesset ('+ oknessetLoadEndTime.toString() +')load time ' + (oknessetLoadEndTime.getTime() - oknessetLoadStartTime.getTime())/1000);
		}
		printLoadingTimes();


        OKnesset.partyListToolbar = new Ext.Toolbar({
				items: [
					{
						ui : 'round',
						iconMask : true,
						iconCls : 'info',
	                	handler: function() {
							gotoInfo();
    	            	}

					}],
                title: OKnesset.strings.partiesTitle
			});

        OKnesset.memberListToolbar = new Ext.Toolbar({
            items: [
				{
					ui : 'round',
					iconMask : true,
					iconCls : 'info',
                	handler: function() {
						gotoInfo();
	            	}

				},
				{xtype: 'spacer'},
				{
               		text: 'back',
                	ui: 'forward',
                	handler: function() {
                    	OKnesset.Viewport.setActiveItem('partyListWrapper', {type:'slide', direction:'left'});
                	}
            	}
			]
        });

        OKnesset.memberPanelToolbar = new Ext.Toolbar({
            items: [
				{
					ui : 'round',
					iconMask : true,
					iconCls : 'info',
                	handler: function() {
						gotoInfo();
	            	}

				},
				{xtype: 'spacer'},
				{
                text: 'back',
                ui: 'forward',
                handler: function() {
                    OKnesset.Viewport.setActiveItem('memberListWrapper', {type:'slide', direction:'left'});
                }
            }]
        });

        OKnesset.infoPanelToolbar = new Ext.Toolbar({
            items: [
				{xtype: 'spacer'},
				{
                text: 'back',
                ui: 'forward',
                handler: function() {
					backFromInfo();
                }
            	}],
            title: OKnesset.strings.openKnessetTitle
		});


		OKnesset.memberBillsTitle = new Ext.Panel({
			id: 'memberBillsTitle',
            layout: 'fit',
			dock: 'bottom',
            tpl: '<tpl if="billNumber &gt; 0"><h2 class="memberBillsTitle x-toolbar-dark">'+OKnesset.strings.hasBillsTitle+'</h2></tpl>\
				  <tpl if="billNumber == 0 && !isMinister"><h2 class="memberBillsTitle x-toolbar-dark">'+OKnesset.strings.hasNoBillsTitle+'</h2></tpl>\
				  <tpl if="billNumber == 0 && isMinister"><h2 class="memberBillsTitle x-toolbar-dark">'+OKnesset.strings.ministerHasNoBillsTitle+'</h2></tpl>'
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

						// apply maximum width
						if (realImageWidth > OKnesset.memberPanel.getWidth() * (3/7)) {
							realImageWidth = OKnesset.memberPanel.getWidth() * (3/7);
							realImageHeight = realImageWidth * 110/75;
						}
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

		OKnesset.memberPanelWrapper.currentMemeber = null;

		OKnesset.memberPanelWrapper.refresh = function(){
			//get current member data from Party store, which is updated
			var party = getPartyFromPartyStoreByName(OKnesset.memberPanelWrapper.currentMemeber.party);
			Ext.iterate(party.data.members, function(value, index) {
				if (value.id === OKnesset.memberPanelWrapper.currentMemeber.id) {
					updateMemberData(value);
					return false;
				}
			});

			OKnesset.memberBillList.refresh();
		}

        OKnesset.memberList = new Ext.List({
            id: 'memberList',
            itemTpl: '<div>{#} {name}</div>',
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

		OKnesset.memberListWrapper.currentParty = null;

		OKnesset.memberListWrapper.refresh = function() {
			var party = getPartyFromPartyStoreByName(OKnesset.memberListWrapper.currentParty.name);
			OKnesset.MemberStore.loadData(party.data.members,false);
			OKnesset.memberList.refresh();
		}

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
            dockedItems: [OKnesset.partyListToolbar]
        });

		OKnesset.partyListWrapper.refresh = function(){
			OKnesset.listPanel.refresh();
		}

		OKnesset.infoPanel = new Ext.Panel({
            id: 'infoPanel',
            layout: 'fit',
			cls: 'textCenter',
			tpl : '{dateString}',
            items: [],
            dockedItems: [OKnesset.infoPanelToolbar,
			       {
			            dock : 'bottom',
			            ui   : 'light',
			            items: [
			                {
								xtype : 'button',
								handler : backFromInfo,
			                    text: OKnesset.strings.back
			                }
			            ]
			        }]
        });

        OKnesset.Viewport = new Ext.Panel ({
            fullscreen: true,
            layout: 'card',
            cardSwitchAnimation: 'slide',
            items: [OKnesset.partyListWrapper, OKnesset.memberListWrapper, OKnesset.memberPanelWrapper, OKnesset.infoPanel]
        });

	   mainLaunchTimeEnd = new Date();
	   console.log('sencha touch load time ' + (mainLaunchTimeEnd.getTime() - mainLaunchTime.getTime()) / 1000);

		loadInitialData();
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

function loadInitialData(){
	if (localStorage.getItem("PartyData") != null){
		// load data from localstorage (most updated locally)
		setTimeout(function(){
						var partyData = JSON.parse(localStorage.getItem("PartyData"));
						updatePartyData(partyData);
						checkFullDataFromWeb();
					}, 0);
	} else {
		// set the slimData date, it will be overridden once the partData is loaded
		localStorage.setItem("PartyDataDate", slimDataDate.getTime());
		// load initial data (data shipped with the application)
		Ext.Ajax.request({
			url: 'javascripts/partyData.js.jpg',
			callback: function(options, success, response){
				// for some reason, Ext.Ajax returns success == false when the local request returns
				if (response.responseText != null && response.responseText.length > 0) {
					loadTime = new Date();
					eval(response.responseText);
					console.log('Initial data load was performed in ' + (loadTime.getTime() - mainLaunchTimeEnd.getTime()) / 1000);
					// partyData is evaluated from the
					var partyDataString = JSON.stringify(partyData);
					updatePartyData(partyData);
					localStorage.setItem("PartyDataDate", partyDataDate.getTime());
					localStorage.setItem("PartyData", partyDataString);
					checkFullDataFromWeb();
				}
				else {
					console.log('Full data load failure (' + JSON.stringify(response) + ') with status code ' + response.status);
				}
			}
		});
	}
}

function checkFullDataFromWeb(){
	var partyDataDate = new Date(parseInt(localStorage.getItem("PartyDataDate")));
	var now = new Date();

	// 24 hours is 1000*60*60*24 = 86,400,000
	console.log("** now="+now.getTime() + " PartyDataDate= " + partyDataDate.getTime());
	console.log("** now="+dateToString(now) + " PartyDataDate= " + dateToString(partyDataDate));

	if (now.getTime() > partyDataDate.getTime() + 86400000) {
		if (!isPhoneGap()){
			fetchFullDataFromWeb();
			return;
		}

		// Check internet connection
		if (navigator.network.connection.type == Connection.ETHERNET ||
			navigator.network.connection.type == Connection.WIFI) {

			console.log("** updating full data by WIFI");
			fetchFullDataFromWeb();
		} else if (navigator.network.connection.type == Connection.CELL_2G ||
    				navigator.network.connection.type == Connection.CELL_3G ||
    				navigator.network.connection.type == Connection.CELL_4G) {

			console.log("** updating full data by 3G");
			var dialogtxt = Ext.util.Format.format(OKnesset.strings.downloadDataText, dateToString(partyDataDate));
			navigator.notification.confirm(dialogtxt, checkFullDataFromWebCallback, OKnesset.strings.downloadDataTitle, OKnesset.strings.dialogOKCancel);
		} else {
			console.log("** not updating full data becuase of no internet");
		}
	}

}

function checkFullDataFromWebCallback(btnIndex){
	if (btnIndex == 2){
		fetchFullDataFromWeb();
	}
}

function fetchFullDataFromWeb(){
	Ext.Ajax.request({
		url: 'javascripts/createInitialData.js',
		callback: function(options, success, response){
			// for some reason, Ext.Ajax returns success == false when the local request returns
			if (response.responseText != null && response.responseText.length > 0) {
				//					loadTime = new Date();
				eval(response.responseText);
				console.log('Oknesset web parser loaded');
				OKnessetParser.loadData(function(data){
					displayFetchCompleteNotification();
					var partyDataString = JSON.stringify(data);
					updatePartyData(data);
					var now = new Date();
					localStorage.setItem("PartyDataDate", now.getTime());
					localStorage.setItem("PartyData", partyDataString);
				});
			}
			else {
				console.log('Oknesset web parser failure (' + JSON.stringify(response) + ') with status code ' + response.status);
			}
		}
	});
}

function displayFetchCompleteNotification(){
	if (!OKnesset.fetchCompleteOverlay) {
		OKnesset.fetchCompleteOverlay = new Ext.Panel({
			floating: true,
			centered: true,
			width: 300,
			height: 120,
			cls: 'textCenter',
			styleHtmlContent: true,
			html: OKnesset.strings.updateComplete,
			dockedItems: [{
				dock: 'top',
				xtype: 'toolbar',
				title: OKnesset.strings.oknessetName
			}]
		});
	}
    OKnesset.fetchCompleteOverlay.show('pop');

	Ext.defer(function() {
	    OKnesset.fetchCompleteOverlay.hide();
	}, 2000);
}
function dateToString(date){
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var year = date.getFullYear();
	return "" + day + "/" + month + "/" + year;
}

// update the party store with the full data (replace the slimData)
function updatePartyData(fullPartyData) {
	console.log("-=updatePartyData=-");
	OKnesset.PartyStore.loadData(fullPartyData, false);
//	OKnesset.Viewport.getActiveItem().items.getAt(0).refresh();
	// A OKnesset that can be refreshed has a refresh function
	OKnesset.Viewport.getActiveItem().refresh();
}

function gotoParty(record){
	//console.log(JSON.stringify(record.data));
	var name = record.data.name;

	GATrackParty(record.data.name);
	OKnesset.memberListWrapper.currentParty = record.data;

	OKnesset.memberListToolbar.setTitle(name);
	OKnesset.memberListToolbar.items.getAt(2).setText(OKnesset.strings.partiesTitle);
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

	GATrackMember(member.name);

	OKnesset.memberImagePanel.update({
		img_url: "images/members/" + member.img_url.substring(member.img_url.lastIndexOf('/')+1)
	});

	updateMemberData(member);

	// scroll bill list up
	if (OKnesset.memberBillList.scroller) {
		OKnesset.memberBillList.scroller.scrollTo({
			x: 0,
			y: 0
		});
	}

	// back button
    OKnesset.memberPanelToolbar.items.getAt(2).setText(OKnesset.memberListToolbar.title);

	// change layout according if the member is a "minister"
	if  (isMinister(member)) {
		if (member.bills.length > 0){
			OKnesset.memberBillList.flex = 0.5;
		} else {
			OKnesset.memberBillList.flex = 0;
		}
	} else {
		OKnesset.memberBillList.flex = 1.5;
	}


    OKnesset.Viewport.setActiveItem('memberPanelWrapper', {type:'slide', direction:'right'});
}

function isMinister(member){
	return (member.roles.indexOf(OKnesset.strings.ministerIndicator) != -1);
}

function updateMemberData(member){
	OKnesset.memberBillsTitle.update({billNumber: member.bills.length, isMinister : isMinister(member)});
	OKnesset.memberInfoPanel.update(member);
	OKnesset.MemberBillsStore.loadData(member.bills);
    OKnesset.memberPanelToolbar.setTitle(member.name);
	OKnesset.memberPanelWrapper.currentMemeber = member;
}

function gotoBill(record){
	var bill = record.data;
	var url = 'http://www.oknesset.org' + bill.url;
	if (isPhoneGap()){
		if (isiOS()) {
			//GATrackBillClicked(bill.url);
			navigator.notification.confirm(OKnesset.strings.openBillTitle, function(idx){
				if (idx == 2) {
					gotoBillCallback(url, bill.url)
				} else {
					//  track bill cancel
					GATrackBillCanceled(bill.url)
				}
			}, OKnesset.strings.openBillText, OKnesset.strings.dialogOKCancel);
		}
		else {//android
			gotoBillCallback(url, bill.url);
		}
	}

}

function gotoBillCallback(url, billUrl){
	window.setTimeout(function(){
					  GATrackBill(billUrl, function(){
					  	if (isAndroid()){
							window.plugins.webintent.startActivity(
								{action: WebIntent.ACTION_VIEW, url: url},
								function() {},
								function() {alert(OKnesset.strings.errorOpenBill)}
							);
 						} else if (isiOS()){
							  document.location=url;
						}
					  });
	}, 10);
}

function gotoInfo(){
	console.log("** info button clicked");
	OKnesset.currentPanelId = OKnesset.Viewport.getActiveItem().getId();
	OKnesset.infoPanel.update({dateString : Ext.util.Format.format(OKnesset.strings.dataDate, dateToString(new Date(parseInt(localStorage.getItem("PartyDataDate")))))});
    OKnesset.infoPanelToolbar.items.getAt(1).setText(OKnesset.Viewport.getActiveItem().getDockedItems()[0].title);
   	OKnesset.Viewport.setActiveItem('infoPanel', {type:'slide', direction : 'up'});
}

function backFromInfo(){
	OKnesset.Viewport.setActiveItem(OKnesset.currentPanelId, {type:'slide', direction : 'down'});
}


function onBackKey(){
	var activeItem = OKnesset.Viewport.getActiveItem();
	var dockedItem = activeItem.getDockedItems()[0];
	var backButton = dockedItem.items.findBy(function(item){
		return item.ui === 'forward';
	});

	if (backButton !== null){
		backButton.handler();
	} else {
		navigator.app.exitApp();
	}
}

function getPartyFromPartyStoreByName(name){
	var partyIndex = OKnesset.PartyStore.findExact('name', name);
	return OKnesset.PartyStore.getAt(partyIndex);

}

function isPhoneGap(){
	return navigator.platform != "MacIntel";
}

function isiOS(){
	return device.platform.toLowerCase().indexOf('iphone') == 0;
}

function isAndroid(){
	return device.platform.toLowerCase().indexOf('android') == 0;
}


function googleAnalytics(){
	if (isPhoneGap()) {
		googleAnalytics = window.plugins.googleAnalyticsPlugin;
		// The oknesset.mobile google analytics Accoutn ID
		googleAnalytics.startTrackerWithAccountID("UA-25669619-1");
	}
}

function GATrackMember(name){
	if (isPhoneGap()) {
		googleAnalytics.trackPageview("/app/member/" + name);
	}
}

function GATrackParty(name){
	if (isPhoneGap()) {
		googleAnalytics.trackPageview("/app/party/" + name);
	}
}

function GATrackBillCanceled(url){
	if (isPhoneGap()) {
		googleAnalytics.trackEvent(function(){}, "bills", "cancelView", url, undefined, true);
	}
}

function GATrackBill(url, callback){
	if (isPhoneGap()) {
		// TODO ad callback to pageview
		googleAnalytics.trackPageview("/safari/" + url);

//		googleAnalytics.trackEvent(callback, "bills", "open", url);
	}

	callback();
}

document.addEventListener("deviceready", OKnesset.mainLaunch, false);
