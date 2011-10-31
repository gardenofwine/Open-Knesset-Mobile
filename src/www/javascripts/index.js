OKnesset = {};
OKnesset.debug = true;
OKnesset.log = function(string){
	if (OKnesset.debug) {
		console.log(string);
	}
};

OKnesset.app = new Ext.Application({
    name: "OKnesset.app",

    launch: function(){
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function(){
        if (isPhoneGap() && !this.launched) {
            return;
        }

        mainLaunchTime = new Date();
        function printLoadingTimes(){
            OKnesset.log('### mainLaunch (' + mainLaunchTime.toString() + ').  Phonegap load time ' + (phonegapEnd.getTime() - phonegapStart.getTime()) / 1000 + ' total scripts load time' + (scriptLoadEndTime.getTime() - scriptLoadStartTime.getTime()) / 1000);
            OKnesset.log('### sencha (' + senchaLoadEndTime.toString() + ')load time ' + (senchaLoadEndTime.getTime() - senchaLoadStartTime.getTime()) / 1000);
            OKnesset.log('### oknesset (' + oknessetLoadEndTime.toString() + ')load time ' + (oknessetLoadEndTime.getTime() - oknessetLoadStartTime.getTime()) / 1000);
        }
        printLoadingTimes();

        OKnesset.toolbarInfoItem = {
            ui: 'plain',
            iconMask: true,
            iconCls: 'info',
            handler: function(){
                displayInfoDialog();
            }
        };
        OKnesset.toolbarMailItem = {
            ui: 'plain',
            iconMask: true,
            iconCls: 'mail',
            handler: function(){
                displayEmailDialog();
            }
        };


        OKnesset.partyListToolbar = new Ext.Toolbar({
            items: [OKnesset.toolbarInfoItem, OKnesset.toolbarMailItem],
            title: OKnesset.strings.partiesTitle
        });

        OKnesset.listPanel = new Ext.List({
            id: 'indexlist',
            store: OKnesset.PartyStore,
            itemTpl: '<div class="partyName">{name}<div class="partySize">{members.length}</div></div>',
            listeners: {
                itemtap: function(that, index, item, e){
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

        OKnesset.Viewport = new Ext.Panel({
            fullscreen: true,
            layout: 'card',
            cardSwitchAnimation: 'slide',
            items: [OKnesset.partyListWrapper]
        });

        displayDisclaimer();

        // hide the native  splash screen
        if (isPhoneGap()) {
            if (isiOS()) {
                navigator.splashscreen.hide();
            } else if (isAndroid()) {
                prompt("", "oknesset_init:");
            }
        }

        mainLaunchTimeEnd = new Date();
        OKnesset.log('sencha touch load time ' + (mainLaunchTimeEnd.getTime() - mainLaunchTime.getTime()) / 1000);

        window.setTimeout(secondaryLaunch, 10);
    }
});

function secondaryLaunch(){
    // For Android. the 'resume' event is fired even when the application launches,
    // so we need to ignore this first event
    OKnesset.resumeCount = 0;
    secondaryLaunchTimeStart = new Date();
    OKnesset.log("** secondaryLaunch begin " + secondaryLaunchTimeStart.toString());

    document.addEventListener("resume", function(){
        window.setTimeout(function(){
            if (isiOS() || isAndroid() && OKnesset.resumeCount != 0) {
                checkFullDataFromWeb();
            }
            OKnesset.resumeCount++;
        }, 0);
    }, false);
    OKnesset.appVersion = "1.0.0";
    googleAnalytics();
    if (isPhoneGap() && isAndroid()) {
        document.addEventListener("backbutton", onBackKey, false);
    }

    OKnesset.memberListToolbar = new Ext.Toolbar({
        items: [OKnesset.toolbarInfoItem, OKnesset.toolbarMailItem, {
            xtype: 'spacer'
        }, {
            text: 'back',
            ui: 'forward',
            handler: function(){
                OKnesset.Viewport.setActiveItem('partyListWrapper', {
                    type: 'slide',
                    direction: 'left'
                });
            }
        }]
    });

    OKnesset.memberPanelToolbar = new Ext.Toolbar({
        items: [OKnesset.toolbarInfoItem, OKnesset.toolbarMailItem, {
            xtype: 'spacer'
        }, {
            text: 'back',
            ui: 'forward',
            handler: function(){
                OKnesset.Viewport.setActiveItem('memberListWrapper', {
                    type: 'slide',
                    direction: 'left'
                });
            }
        }]
    });

    OKnesset.memberBillsTitle = new Ext.Panel({
        id: 'memberBillsTitle',
        layout: 'fit',
        dock: 'bottom',
        tpl: '<tpl if="billNumber &gt; 0"><h2 class="memberBillsTitle x-toolbar-dark">' + OKnesset.strings.hasBillsTitle + '</h2></tpl>\
				  <tpl if="billNumber == 0"><h2 class="memberBillsTitle x-toolbar-dark">' +
        OKnesset.strings.hasNoBillsTitle +
        '</h2></tpl>'
    });

    OKnesset.memberBillList = new Ext.List({
        id: 'memberBillList',
        itemTpl: '<div>{title}</div>',
        store: OKnesset.MemberBillsStore,
        layout: 'fit',
        deferEmptyText: false,
        grouped: true,
        flex: 1.5,
        listeners: {
            itemtap: function(that, index, item, e){
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
        flex: 1,
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
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        listeners: {
            afterlayout: {
                fn: function(comp){
                    // TODO calculate only once!
                    var realImageHeight = OKnesset.memberPanel.getHeight() - OKnesset.memberBillsTitle.getHeight();
                    var realImageWidth = 75 / 110 * realImageHeight;

                    // apply maximum width
                    if (realImageWidth > OKnesset.memberPanel.getWidth() * (3 / 7)) {
                        realImageWidth = OKnesset.memberPanel.getWidth() * (3 / 7);
                        realImageHeight = realImageWidth * 110 / 75;
                    }
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
        Ext.iterate(party.data.members, function(value, index){
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
        listeners: {
            itemtap: function(that, index, item, e){
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

    OKnesset.memberListWrapper.refresh = function(){
        var party = getPartyFromPartyStoreByName(OKnesset.memberListWrapper.currentParty.name);
        OKnesset.MemberStore.loadData(party.data.members, false);
        OKnesset.memberList.refresh();
    }


    OKnesset.Viewport.add([OKnesset.memberListWrapper, OKnesset.memberPanelWrapper]);

    loadInitialData();

    var secondaryLaunchTimeEnd = new Date();
    OKnesset.log("** secondaryLaunch end. Total time " + (secondaryLaunchTimeEnd.getTime() - secondaryLaunchTimeStart.getTime()) / 1000);
}

function initDisclaimerDialog(){
    if (!OKnesset.disclaimerDialog) {
        OKnesset.disclaimerDialog = new Ext.Panel({
            floating: true,
            centered: true,
            width: OKnesset.Viewport.getWidth() * 0.9,
            height: OKnesset.Viewport.getHeight() * 0.9,
            styleHtmlContent: true,
            style: {
                direction: 'rtl'
            },
            scroll: "vertical",
            hideOnMaskTap: false,
            items: [{
                html: OKnesset.strings.disclaimerDialogBody,
                height: "5em"
            }],
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                title: OKnesset.strings.oknessetName
            }, {
                xtype: 'button',
                ui: 'confirm',
                handler: function(){
                    OKnesset.disclaimerDialog.hide();
                    localStorage.setItem("disclaimerDismissed", true);
                },
                text: OKnesset.strings.ok,
                dock: 'bottom'
            }]
        });
    }
}


function displayDisclaimer(forceShow){
    var disclaimerDismissed = localStorage.getItem("disclaimerDismissed");
    if (disclaimerDismissed !== 'true' || forceShow === true) {
        initDisclaimerDialog();
        OKnesset.disclaimerDialog.forceShow = forceShow;
        OKnesset.disclaimerDialog.show('pop');
    }
}

function loadInitialData(){
    if (localStorage.getItem("PartyData") != null) {
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
                    OKnesset.log('Initial data load was performed in ' + (loadTime.getTime() - mainLaunchTimeEnd.getTime()) / 1000);
                    // partyData is evaluated from the
                    var partyDataString = JSON.stringify(partyData);
                    updatePartyData(partyData);
                    localStorage.setItem("PartyDataDate", partyDataDate.getTime());
                    localStorage.setItem("PartyData", partyDataString);
                    checkFullDataFromWeb();
                } else {
                    OKnesset.log('Full data load failure (' + JSON.stringify(response) + ') with status code ' + response.status);
                }
            }
        });
    }
}

function checkFullDataFromWeb(){
    var partyDataDate = new Date(parseInt(localStorage.getItem("PartyDataDate")));
    var now = new Date();

    // 24 hours is 1000*60*60*24 = 86,400,000
    OKnesset.log("** now=" + now.getTime() + " PartyDataDate= " + partyDataDate.getTime());
    OKnesset.log("** now=" + dateToString(now) + " PartyDataDate= " + dateToString(partyDataDate));

    if (now.getTime() > partyDataDate.getTime() + 86400000) {
        if (!isPhoneGap()) {
            fetchFullDataFromWeb();
            return;
        }

        // Check internet connection
        if (navigator.network.connection.type == Connection.ETHERNET ||
        navigator.network.connection.type == Connection.WIFI) {

            OKnesset.log("** updating full data by WIFI");
            fetchFullDataFromWeb();
        } else if (navigator.network.connection.type == Connection.CELL_2G ||
        navigator.network.connection.type == Connection.CELL_3G ||
        navigator.network.connection.type == Connection.CELL_4G) {

            OKnesset.log("** updating full data by 3G");
            var dialogtxt = OKnesset.strings.downloadDataText;
            navigator.notification.confirm(dialogtxt, checkFullDataFromWebCallback, OKnesset.strings.downloadDataTitle, OKnesset.strings.dialogOKCancel);
        } else {
            OKnesset.log("** not updating full data becuase of no internet");
        }
    }

}

function checkFullDataFromWebCallback(btnIndex){
    if (btnIndex == 2) {
        fetchFullDataFromWeb();
    }
}

function fetchFullDataFromWeb(){
    // load the update script from the web, as it may change according to api changes in oknesset.org
    Ext.Ajax.request({
        url: 'http://oknesset-mobile.appspot.com/static/js/mobile/createInitialData.js',
        success: function(response, options){
            eval(response.responseText);
            OKnesset.log('Oknesset web parser loaded from web');
            OKnessetParser.loadData(function(data){
                displayFetchCompleteNotification();
                var partyDataString = JSON.stringify(data);
                updatePartyData(data);
                var now = new Date();
                localStorage.setItem("PartyDataDate", now.getTime());
                localStorage.setItem("PartyData", partyDataString);
            });
        },
        failure: function(response, options){
            OKnesset.log('Oknesset web parser failed to load from web (' + JSON.stringify(response) + ') with status code ' + response.status + '. Attempting to laod locally');
            fetchFullDataFromWebByLocalScript();
        }
    });

    function fetchFullDataFromWebByLocalScript(){
        Ext.Ajax.request({
            url: 'javascripts/createInitialData.js',
            callback: function(options, success, response){
                // for some reason, Ext.Ajax returns success == false when the local request returns
                if (response.responseText != null && response.responseText.length > 0) {
                    eval(response.responseText);
                    OKnesset.log('Oknesset web parser loaded locally');
                    OKnessetParser.loadData(function(data){
                        displayFetchCompleteNotification();
                        var partyDataString = JSON.stringify(data);
                        updatePartyData(data);
                        var now = new Date();
                        localStorage.setItem("PartyDataDate", now.getTime());
                        localStorage.setItem("PartyData", partyDataString);
                    });
                } else {
                    OKnesset.log('Oknesset web parser failed to load locally (' + JSON.stringify(response) + ') with status code ' + response.status + '. Aborting content update.');
                }
            }
        });
    }

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

    Ext.defer(function(){
        OKnesset.fetchCompleteOverlay.hide();
    }, isPhoneGap() && isAndroid() ? 4000 : 2000);
}

function dateToString(date){
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    return "" + day + "/" + month + "/" + year;
}

// update the party store with the full data (replace the slimData)
function updatePartyData(fullPartyData){
    OKnesset.log("-=updatePartyData=-");
    OKnesset.PartyStore.loadData(fullPartyData, false);
    //	OKnesset.Viewport.getActiveItem().items.getAt(0).refresh();
    // A OKnesset that can be refreshed has a refresh function
    OKnesset.Viewport.getActiveItem().refresh();
}

function gotoParty(record){
    //OKnesset.log(JSON.stringify(record.data));
    var name = record.data.name;

    GATrackParty(record.data.name);
    OKnesset.memberListWrapper.currentParty = record.data;

    OKnesset.memberListToolbar.setTitle(name);
    OKnesset.memberListToolbar.items.getAt(3).setText(OKnesset.strings.partiesTitle);
    if (OKnesset.memberList.scroller) {
        OKnesset.memberList.scroller.scrollTo({
            x: 0,
            y: 0
        });
    }
    OKnesset.MemberStore.loadData(record.data.members, false);
    OKnesset.Viewport.setActiveItem('memberListWrapper', {
        type: 'slide',
        direction: 'right'
    });
}

function gotoMember(record){
    var member = record.data;
    GATrackMember(member.name);
    OKnesset.memberImagePanel.update({
        img_url: "images/members/" + member.img_url.substring(member.img_url.lastIndexOf('/') + 1)
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
    OKnesset.memberPanelToolbar.items.getAt(3).setText(OKnesset.memberListToolbar.title);


    if (hasExcuseForNoBills(member)) {
        OKnesset.memberBillList.emptyText = "<br/><br/><br/>" + OKnesset.strings.excuseForNoBills;
    } else {
        OKnesset.memberBillList.emptyText = "";
    }

    OKnesset.memberBillList.refresh();
    OKnesset.Viewport.setActiveItem('memberPanelWrapper', {
        type: 'slide',
        direction: 'right'
    });
}

function hasExcuseForNoBills(member){

    return (member.roles.indexOf(OKnesset.strings.ministerIndicator) != -1 || member.roles === OKnesset.strings.knessetChairman);
}

function updateMemberData(member){
    OKnesset.memberBillsTitle.update({
        billNumber: member.bills.length,
        hasExcuseForNoBills: hasExcuseForNoBills(member)
    });
    OKnesset.memberInfoPanel.update(member);
    OKnesset.MemberBillsStore.loadData(member.bills);
    OKnesset.memberPanelToolbar.setTitle(member.name);
    OKnesset.memberPanelWrapper.currentMemeber = member;
}

function gotoBill(record){
    var bill = record.data;
    var url = 'http://www.oknesset.org' + bill.url;
    if (isPhoneGap()) {
        if (isiOS()) {
            navigator.notification.confirm(null, function(idx){
                if (idx == 2) {
                    gotoBillCallback(url, bill.url)
                } else {
                    //  track bill cancel
                    GATrackBillCanceled(bill.url)
                }
            }, OKnesset.strings.openBillText, OKnesset.strings.dialogOKCancel);
        } else {//android
            gotoBillCallback(url, bill.url);
        }
    }

}

function gotoBillCallback(url, billUrl){
    window.setTimeout(function(){
        GATrackBill(billUrl, function(){
            if (isAndroid()) {
                window.plugins.webintent.startActivity({
                    action: WebIntent.ACTION_VIEW,
                    url: url
                }, function(){
                }, function(){
                    alert(OKnesset.strings.errorOpenBill)
                });
            } else if (isiOS()) {
                document.location = url;
            }
        });
    }, 10);
}


function initEmailDialog(){
    if (!OKnesset.emailDialog) {
        OKnesset.emailDialog = new Ext.Panel({
            floating: true,
            centered: true,
            width: OKnesset.Viewport.getWidth() * 0.9,
            height: OKnesset.Viewport.getHeight() * 0.65,
            cls: 'textCenter',
            styleHtmlContent: true,
            items: [{
                html: OKnesset.strings.emailDialogBody,
                height: "5em"
            }, {
                xtype: 'button',
                handler: function(){
                    sendEmail(this.text);
                },
                text: OKnesset.strings.emailGeneral
            }],
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                title: OKnesset.strings.emailDialogTitle
            }, {
                dock: 'bottom',
                xtype: 'button',
                ui: 'decline',
                handler: function(){
                    OKnesset.emailDialog.hide();
                },
                text: OKnesset.strings.cancel
            }]
        });
    }
}

function getPartyListItems(){
    if (!OKnesset.emailDialog.partyListItems) {
        OKnesset.emailDialog.partyListItems = [{
            xtype: 'spacer',
            height: "2em"
        }, {
            xtype: 'button',
            style: {
                'font-size': '115%'
            },
            handler: function(){
                sendEmail(this.text);
            },
            text: OKnesset.strings.emailPartyList
        }];
    }

    return OKnesset.emailDialog.partyListItems;
}

function getMemberListItems(){
    if (!OKnesset.emailDialog.memberListItems) {
        OKnesset.emailDialog.memberListItems = [{
            xtype: 'spacer',
            height: "2em"
        }, {
            xtype: 'button',
            style: {
                'font-size': '115%'
            },
            handler: function(){
                sendEmail(this.text);
            }
        }];
    }

    OKnesset.emailDialog.memberListItems[1].text = Ext.util.Format.format(OKnesset.strings.emailParty, OKnesset.memberListWrapper.currentParty.name);
    return OKnesset.emailDialog.memberListItems;
}

function getMemberPanelItems(){
    if (!OKnesset.emailDialog.memberPanelItems) {
        OKnesset.emailDialog.memberPanelItems = [{
            xtype: 'spacer',
            height: "2em"
        }, {
            xtype: 'button',
            style: {
                'font-size': '115%'
            },
            handler: function(){
                sendEmail(this.text);
            }
        }];
    }

    OKnesset.emailDialog.memberPanelItems[1].text = Ext.util.Format.format(OKnesset.strings.emailMember, OKnesset.memberPanelWrapper.currentMemeber.name);
    return OKnesset.emailDialog.memberPanelItems;
}

function displayEmailDialog(){
    initEmailDialog();

    // change buttons according to current screen
    // insert()
    var count = OKnesset.emailDialog.items.getCount();
    if (count > 2) {
        for (var i = count - 1; i >= 2; i--) {
            OKnesset.emailDialog.remove(OKnesset.emailDialog.getComponent(i));
        }
    }

    OKnesset.currentPanelId = OKnesset.Viewport.getActiveItem().getId();
    if (OKnesset.currentPanelId == OKnesset.partyListWrapper.getId()) {
        OKnesset.emailDialog.add(getPartyListItems());
    } else if (OKnesset.currentPanelId == OKnesset.memberListWrapper.getId()) {
        OKnesset.emailDialog.add(getMemberListItems());
    } else if (OKnesset.currentPanelId == OKnesset.memberPanelWrapper.getId()) {
        OKnesset.emailDialog.add(getMemberPanelItems());
    }

    OKnesset.emailDialog.doLayout();
    OKnesset.emailDialog.show({
        type: 'slide',
        direction: 'up'
    });

}

function sendEmail(subject){
    OKnesset.log("** sending email with subject " + subject);
    if (isPhoneGap()) {
        if (isiOS()) {
            var emailCallback = function(result){
                if (result != EmailComposer.ComposeResultType.Cancelled) {
                    OKnesset.emailDialog.hide();
                }
            };
            window.plugins.emailComposer.showEmailComposerWithCB(emailCallback, subject, "", OKnesset.strings.feedbackEmailAddress);
        } else if (isAndroid) {
            var extras = {};
            extras[WebIntent.EXTRA_SUBJECT] = subject;
            extras[WebIntent.EXTRA_EMAIL] = [OKnesset.strings.feedbackEmailAddress];
            window.plugins.webintent.startActivity({
                action: WebIntent.ACTION_SEND,
                type: 'text/plain',
                extras: extras
            }, function(){
                OKnesset.emailDialog.hide();
            }, function(){
                alert(OKnesset.strings.errorAndroidEmail);
            });
        }
    }
}

function initInfoDialog(){
    if (!OKnesset.infoPanel) {
        OKnesset.infoPanel = new Ext.Panel({
            id: 'infoPanel',
            layout: 'vbox',
            cls: 'textCenter',
            floating: true,
            centered: true,
            width: OKnesset.Viewport.getWidth() * 0.9,
            height: OKnesset.Viewport.getHeight() * 0.65,
            items: [{
                tpl: '{dateString}'
            }, {
                xtype: 'spacer',
                height: "2em"
            }, {
                xtype: 'button',
                width: "50%",
                handler: function(){
					checkFullDataFromWeb();
					OKnesset.infoPanel.hide();
				},
                text: OKnesset.strings.updateNow
            }, {
                xtype: 'spacer',
                height: "2em"
            }, {
                xtype: 'button',
                width: "50%",
                handler: function(){
					OKnesset.infoPanel.hide();
                    displayDisclaimer(true);
                },
                text: OKnesset.strings.showDisclaimer
            }, {
                xtype: 'spacer',
                height: "2em"
            }],
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                title: OKnesset.strings.openKnessetTitle
            }, {
                dock: 'bottom',
                ui: 'light',
                items: [{
                    xtype: 'button',
                    ui: 'confirm',
                    handler: function(){
                        OKnesset.infoPanel.hide();
                    },
                    text: OKnesset.strings.back
                }]
            }]
        });

        OKnesset.infoPanel.refresh = function(){
            // TODO refresh date
            OKnesset.Viewport.items.getByKey(OKnesset.currentPanelId).refresh();
        }

    }

}

function displayInfoDialog(){
    initInfoDialog();
    OKnesset.currentPanelId = OKnesset.Viewport.getActiveItem().getId();
    OKnesset.infoPanel.items.getAt(0).update({
        dateString: Ext.util.Format.format(OKnesset.strings.dataDate, dateToString(new Date(parseInt(localStorage.getItem("PartyDataDate")))))
    });

    OKnesset.infoPanel.show({
        type: 'slide',
        direction: 'up'
    });

}

function onBackKey(){
    if (OKnesset.emailDialog && OKnesset.emailDialog.isVisible()) {
        OKnesset.emailDialog.hide();
        return;
    }

    if (OKnesset.disclaimerDialog && OKnesset.disclaimerDialog.forceShow && OKnesset.disclaimerDialog.isVisible()) {
        OKnesset.disclaimerDialog.hide();
        return;
    }


    var activeItem = OKnesset.Viewport.getActiveItem();
    var dockedItem = activeItem.getDockedItems()[0];
    var backButton = dockedItem.items.findBy(function(item){
        return item.ui === 'forward';
    });

    if (backButton !== null) {
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
	// sencha touch bug
    return Ext.is.iOS || device.platform.toLowerCase().indexOf('ipad') == 0;
}

function isAndroid(){
    return device.platform.toLowerCase().indexOf('android') == 0;
}


function googleAnalytics(){
    if (isPhoneGap()) {
        googleAnalytics = window.plugins.googleAnalyticsPlugin;
        // The oknesset.mobile google analytics Accoutn ID
        googleAnalytics.startTrackerWithAccountID("UA-25669619-1");
        googleAnalytics.setCustomVariable(1, "appVersion", OKnesset.appVersion, 2);
        googleAnalytics.trackPageview("/app");
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
        googleAnalytics.trackEvent(function(){
        }, "bills", "cancelView", url, undefined, true);
    }
}

function GATrackBill(url, callback){
    if (isPhoneGap()) {
        if (isAndroid()) {
            googleAnalytics.trackPageview("/app/external" + url, {
                dispatch: true
            }, callback, callback);
        } else if (isiOS()) {
            googleAnalytics.trackPageview("/app/external" + url, callback, {
                dispatch: true
            });
        }
    }
}

document.addEventListener("deviceready", OKnesset.mainLaunch, false);
