/**
 * The OKnesset namespace.
 */

if (typeof OKnesset === 'undefined') {
	var OKnesset = {};
}

OKnesset.GAID = "Demo-ID-replace-with-real-id";
OKnesset.appVersion = "1.0.0";

OKnesset.log = function(string) {
	if (OKnesset.debug) {
		console.log(string);
	}
};

/*
 * Oknesset default Panel
 */
// OKnesset.Panel = Ext.extend(Ext.Panel,{
// constructor: function(config) {
// OKnesset.Panel.superclass.constructor.call(this, config);
//
// if (this.refresh == OKnesset.Panel.prototype.refresh){
// throw "OKnesset.Panel must define a refresh function.";
// }
// if (this.setTitle == OKnesset.Panel.prototype.setTitle){
// throw "OKnesset.Panel must define a setTitle function.";
// }
//
// },
// refresh : function(){
// throw "OKnesset.Panel must define a refresh function.";
// },
// setTitle : function(){
// throw "OKnesset.Panel must define a setTitle function.";
// }
// });
Ext.regApplication({
	name : 'OKnesset.app',
	id : "oknesset",
	defaultUrl : 'navigation/push/PartyList/Index',
	launch : function() {
		// Invoked immediately after the OKnesset.app created.
		this.launched = true;
		this.mainLaunch();
	},
	mainLaunch : function() {
		// For iOS and Android, we must wait until the devicereay event
		// is fired.
		if (isPhoneGap() && (!device || !this.launched)) {
			return;
		}

		if (OKnesset.debug) {
			mainLaunchTime = new Date();
			if (isPhoneGap()) {
				printLoadingTimes();
			}
		}

		// // The "i" at the top left of the application toolbar
		// OKnesset.toolbarInfoItem = {
		// ui : 'plain',
		// iconMask : true,
		// iconCls : 'info',
		// handler : function() {
		// displayInfoDialog();
		// }
		// };
		//
		// // The email icon at the top left of the application toolbar
		// OKnesset.toolbarMailItem = {
		// ui : 'plain',
		// iconMask : true,
		// iconCls : 'mail',
		// handler : function() {
		// displayEmailDialog();
		// }
		// };

		// TODO: use ONE toolbar that changes title, buttons, according
		// to the active panel.

		/**
		 * End of The List of parties
		 */

		/**
		 * The main view, holds all the panels of the application. Initially, it
		 * holds only the party list panel, for reasons of performance. Once the
		 * panel is up and the application is displayed to the user, the rest of
		 * the panels are loaded (in secondaryLaunch)
		 */
		this.viewport = new OKnesset.app.views.Viewport();
        var backBtn = this.viewport.query('#backBtn')[0];
        backBtn.hide();
        backBtn.setHandler(function() {
			dispatchBack();
		});

		displayDisclaimer();

		if (isPhoneGap()) {
			// hide the native splash screen
			if (isiOS()) {
				navigator.splashscreen.hide();
			} else if (isAndroid()) {
				prompt("", "oknesset_init:");
			}
		}

		if (OKnesset.debug) {
			mainLaunchTimeEnd = new Date();
			OKnesset.log('sencha touch load time '
					+ (mainLaunchTimeEnd.getTime() - mainLaunchTime.getTime())
					/ 1000);
		}
		// TODO call secondaryLaunch form the afterDisplay event of
		// Ext.Panel
		window.setTimeout(secondaryLaunch, 10);
	}
});

function secondaryLaunch() {
	var secondaryLaunchTimeStart = new Date();
	OKnesset.log("** secondaryLaunch begin "
			+ secondaryLaunchTimeStart.toString());

	// When the applicaiton comes back from the background state on the iOS or
	// Android, check if there are any updates from teh oknesset website.
	OKnesset.resumeCount = 0;
	document.addEventListener("resume", function() {
		window.setTimeout(function() {
			// For Android. the 'resume' event is fired even when the
			// application launches, so we need to ignore this first event
			if (isiOS() || isAndroid() && OKnesset.resumeCount != 0) {
				checkFullDataFromWeb();
			}
			OKnesset.resumeCount++;
		}, 0);
	}, false);

	googleAnalytics();

	if (isAndroid()) {
		// For Android, override the back button functionality
		document.addEventListener("backbutton", onBackKey, false);
	}

	/**
	 * The Member panel (בנימין נתניהו, גדעון סער) - displays info on a specific
	 * member
	 */
	// OKnesset.memberPanelToolbar = new Ext.Toolbar({
	// items : [ OKnesset.toolbarInfoItem, OKnesset.toolbarMailItem, {
	// xtype : 'spacer'
	// }, {
	// text : 'back',
	// ui : 'forward',
	// handler : function() {
	// // This is the back button's functionality.
	// getViewport().setActiveItem('memberListWrapper', {
	// type : 'slide',
	// direction : 'left'
	// });
	// }
	// } ]
	// });
	// // The text that appears below the members picture, "bills proposed"
	// OKnesset.memberBillsTitle = new Ext.Panel(
	// {
	// id : 'memberBillsTitle',
	// layout : 'fit',
	// dock : 'bottom',
	// // some sencha touch magic to decide the title
	// tpl : '<tpl if="billNumber &gt; 0"><h2 class="memberBillsTitle
	// x-toolbar-dark">'
	// + OKnesset.strings.hasBillsTitle
	// + '</h2></tpl>\
	// <tpl if="billNumber == 0"><h2 class="memberBillsTitle x-toolbar-dark">'
	// + OKnesset.strings.hasNoBillsTitle + '</h2></tpl>'
	// });
	//
	// OKnesset.memberBillList = new Ext.List({
	// id : 'memberBillList',
	// itemTpl : '<div>{title}</div>',
	// store : OKnesset.MemberBillsStore,
	// layout : 'fit',
	// deferEmptyText : false,
	// grouped : true,
	// flex : 1.5,
	// listeners : {
	// itemtap : function(that, index, item, e) {
	// var record = that.store.getAt(index);
	// gotoBill(record);
	// }
	// },
	// onItemDisclosure : gotoMember
	// });
	//
	// OKnesset.memberImagePanel = new Ext.Panel({
	// id : 'memberImagePanel',
	// layout : 'fit',
	// tpl : '<img src={img_url} height="100%"></img>'
	// });
	//
	// OKnesset.memberInfoPanel = new Ext.Panel({
	// id : 'memberInfoPanel',
	// tpl : memberPanelHtml
	// });
	//
	// OKnesset.memberPanel = new Ext.Panel({
	// id : 'memberPanel',
	// flex : 1,
	// items : [ OKnesset.memberInfoPanel ],
	// dockedItems : [ {
	// xtype : 'panel',
	// dock : 'bottom',
	// items : [ OKnesset.memberBillsTitle ]
	// }, {
	// xtype : 'panel',
	// dock : 'right',
	// items : [ OKnesset.memberImagePanel ]
	// } ]
	// });
	//
	// OKnesset.memberPanelWrapper = new OKnesset.Panel({
	// id : 'memberPanelWrapper',
	// layout : {
	// type : 'vbox',
	// align : 'stretch'
	// },
	// listeners : {
	// afterlayout : {
	// // For some reason, This is the only way I could layout the
	// // member panel
	// // as I wanted. Using flex and hbox+vbox layouts did not yeild
	// // the desired results
	// fn : function(comp) {
	// // TODO calculate only once!
	// var realImageHeight = OKnesset.memberPanel.getHeight()
	// - OKnesset.memberBillsTitle.getHeight();
	// var realImageWidth = 75 / 110 * realImageHeight;
	//
	// // apply maximum width. The Member image is designed to be
	// // 3/7
	// // of the width of the screen (the width of the memberPanel)
	// if (realImageWidth > OKnesset.memberPanel.getWidth()
	// * (3 / 7)) {
	// realImageWidth = OKnesset.memberPanel.getWidth()
	// * (3 / 7);
	// realImageHeight = realImageWidth * 110 / 75;
	// }
	// // Set the member image height to the actual panel height
	// // (rescaling if necessary)
	// OKnesset.memberInfoPanel.setWidth(OKnesset.memberPanel
	// .getWidth()
	// - realImageWidth);
	// OKnesset.memberImagePanel.setHeight(realImageHeight);
	// OKnesset.memberImagePanel.setWidth(realImageWidth);
	// OKnesset.memberPanel.doLayout();
	// }
	// }
	// },
	// items : [ OKnesset.memberPanel, OKnesset.memberBillList ],
	// dockedItems : [ OKnesset.memberPanelToolbar ],
	// refresh : function() {
	// // get current member data from Party store, which is updated
	// var party =
	// getPartyFromPartyStoreByName(OKnesset.memberPanelWrapper.currentMemeber.party);
	// Ext.iterate(party.data.members, function(value, index) {
	// if (value.id === OKnesset.memberPanelWrapper.currentMemeber.id) {
	// updateMemberData(value);
	// return false;
	// }
	// });
	//
	// OKnesset.memberBillList.refresh();
	// },
	// setTitle : function(){
	//
	// }
	// });
	//
	// OKnesset.memberPanelWrapper.currentMemeber = null;
	/**
	 * End of the Member panel.
	 */

	// /**
	// * The Member list panel (בנימין נתניהו, גדעון סער) shows a list of
	// members
	// * of the current selected party
	// */
	// OKnesset.memberListToolbar = new Ext.Toolbar({
	// items : [ OKnesset.toolbarInfoItem, OKnesset.toolbarMailItem, {
	// xtype : 'spacer'
	// }, {
	// text : 'back',
	// ui : 'forward',
	// handler : function() {
	// // This is the back button's functionality.
	// getViewport().setActiveItem('PartyListView', {
	// type : 'slide',
	// direction : 'left'
	// });
	// }
	// } ]
	// });
	//
	// OKnesset.memberList = new Ext.List({
	// id : 'memberList',
	// itemTpl : '<div>{#} {name}</div>',
	// store : OKnesset.MemberStore,
	// listeners : {
	// itemtap : function(that, index, item, e) {
	// var record = that.store.getAt(index);
	// gotoMember(record);
	// }
	// },
	// onItemDisclosure : gotoMember
	// });
	//
	// OKnesset.memberListWrapper = new OKnesset.Panel({
	// id : 'memberListWrapper',
	// layout : 'fit',
	// items : [ OKnesset.memberList ],
	// dockedItems : OKnesset.memberListToolbar,
	// refresh : function() {
	// var party =
	// getPartyFromPartyStoreByName(OKnesset.memberListWrapper.currentParty.name);
	// OKnesset.MemberStore.loadData(party.data.members, false);
	// OKnesset.memberList.refresh();
	// },
	// setTitle : function(){
	// console.log("** implement setTitle her")
	// }
	// });
	//
	// OKnesset.memberListWrapper.currentParty = null;
	/**
	 * End of the Member list panel
	 */

	// Add the member list and member panel panels to the main panel
	// getViewport().add([ OKnesset.memberListWrapper,
	// OKnesset.memberPanelWrapper ]);
	// getViewport().add([ OKnesset.memberPanelWrapper ]);
	// Load the full data of the parties and members into the data stores
	loadInitialData();

	var secondaryLaunchTimeEnd = new Date();
	OKnesset.log("** secondaryLaunch end. Total time "
			+ (secondaryLaunchTimeEnd.getTime() - secondaryLaunchTimeStart
					.getTime()) / 1000);
}

/**
 * Creates the disclaimer dialog (only once)
 */
function initDisclaimerDialog() {
	if (!OKnesset.disclaimerDialog) {
		OKnesset.disclaimerDialog = new Ext.Panel({
			floating : true,
			centered : true,
			width : getViewport().getWidth() * 0.9,
			height : getViewport().getHeight() * 0.9,
			styleHtmlContent : true,
			style : {
				direction : 'rtl'
			},
			scroll : "vertical",
			hideOnMaskTap : false,
			items : [ {
				html : OKnesset.strings.disclaimerDialogBody,
				height : "5em"
			} ],
			dockedItems : [ {
				dock : 'top',
				xtype : 'toolbar',
				title : OKnesset.strings.oknessetName
			}, {
				xtype : 'button',
				ui : 'confirm',
				handler : function() {
					OKnesset.disclaimerDialog.hide();
					localStorage.setItem("disclaimerDismissed", true);
				},
				text : OKnesset.strings.ok,
				dock : 'bottom'
			} ]
		});
	}
}

/**
 * Displays the disclaimer dialog if it has not already been displayed.
 *
 * @param forceShow -
 *            if true, the disclaimer dialog is displayed regardless
 */
function displayDisclaimer(forceShow) {
	var disclaimerDismissed = localStorage.getItem("disclaimerDismissed");
	if (disclaimerDismissed !== 'true' || forceShow === true) {
		initDisclaimerDialog();
		// for Android. If the disclaimer dialog was forcly displayed,
		// it will be dismissed by touching the back button
		OKnesset.disclaimerDialog.forceShow = forceShow;
		OKnesset.disclaimerDialog.show('pop');
	}
}

/**
 * Creates the email dialog (only once)
 */
function initEmailDialog() {
	if (!OKnesset.emailDialog) {
		OKnesset.emailDialog = new Ext.Panel({
			floating : true,
			centered : true,
			width : getViewport().getWidth() * 0.9,
			height : getViewport().getHeight() * 0.65,
			cls : 'textCenter',
			styleHtmlContent : true,
			items : [ {
				html : OKnesset.strings.emailDialogBody,
				height : "5em"
			}, {
				xtype : 'button',
				handler : function() {
					sendEmail(this.text);
				},
				text : OKnesset.strings.emailGeneral
			} ],
			dockedItems : [ {
				dock : 'top',
				xtype : 'toolbar',
				title : OKnesset.strings.emailDialogTitle
			}, {
				dock : 'bottom',
				xtype : 'button',
				ui : 'decline',
				handler : function() {
					OKnesset.emailDialog.hide();
				},
				text : OKnesset.strings.cancel
			} ]
		});
	}
}

function displayEmailDialog() {
	initEmailDialog();
	// change buttons according to current screen

	// The first 2 items are the text and the first button.
	// All the other items are context dependant, and should be removed
	var count = OKnesset.emailDialog.items.getCount();
	if (count > 2) {
		for ( var i = count - 1; i >= 2; i--) {
			OKnesset.emailDialog.remove(OKnesset.emailDialog.getComponent(i));
		}
	}

	OKnesset.currentPanelId = getViewport().getActiveItem().getId();
	var partyListView = getViewport().query('#PartyListView')[0];
	var partyView = getViewport().query('#PartyView')[0];

	if (OKnesset.currentPanelId == partyListView.getId()) {
		OKnesset.emailDialog.add(getPartyListItems());
	} else if (OKnesset.currentPanelId == partyView.getId()) {
		OKnesset.emailDialog.add(getMemberListItems());
	} else if (OKnesset.currentPanelId == OKnesset.memberPanelWrapper.getId()) {
		OKnesset.emailDialog.add(getMemberPanelItems());
	}

	OKnesset.emailDialog.doLayout();
	OKnesset.emailDialog.show({
		type : 'slide',
		direction : 'up'
	});

	function getPartyListItems() {
		if (!OKnesset.emailDialog.partyListItems) {
			OKnesset.emailDialog.partyListItems = [ {
				xtype : 'spacer',
				height : "2em"
			}, {
				xtype : 'button',
				style : {
					'font-size' : '115%'
				},
				handler : function() {
					sendEmail(this.text);
				},
				text : OKnesset.strings.emailPartyList
			} ];
		}

		return OKnesset.emailDialog.partyListItems;
	}

	function getMemberListItems() {
		if (!OKnesset.emailDialog.memberListItems) {
			OKnesset.emailDialog.memberListItems = [ {
				xtype : 'spacer',
				height : "2em"
			}, {
				xtype : 'button',
				style : {
					'font-size' : '115%'
				},
				handler : function() {
					sendEmail(this.text);
				}
			} ];
		}

		OKnesset.emailDialog.memberListItems[1].text = Ext.util.Format.format(
				OKnesset.strings.emailParty,
				OKnesset.memberListWrapper.currentParty.name);
		return OKnesset.emailDialog.memberListItems;
	}

	function getMemberPanelItems() {
		if (!OKnesset.emailDialog.memberPanelItems) {
			OKnesset.emailDialog.memberPanelItems = [ {
				xtype : 'spacer',
				height : "2em"
			}, {
				xtype : 'button',
				style : {
					'font-size' : '115%'
				},
				handler : function() {
					sendEmail(this.text);
				}
			} ];
		}

		OKnesset.emailDialog.memberPanelItems[1].text = Ext.util.Format.format(
				OKnesset.strings.emailMember,
				OKnesset.memberPanelWrapper.currentMemeber.name);
		return OKnesset.emailDialog.memberPanelItems;
	}
}

function sendEmail(subject) {
	OKnesset.log("** sending email with subject " + subject);
	if (isPhoneGap()) {
		if (isiOS()) {
			var emailCallback = function(result) {
				// called after email has been sent
				if (result != EmailComposer.ComposeResultType.Cancelled) {
					OKnesset.emailDialog.hide();
				}
			};
			window.plugins.emailComposer.showEmailComposerWithCB(emailCallback,
					subject, "", OKnesset.strings.feedbackEmailAddress);
		} else if (isAndroid) {
			var extras = {};
			extras[WebIntent.EXTRA_SUBJECT] = subject;
			extras[WebIntent.EXTRA_EMAIL] = [ OKnesset.strings.feedbackEmailAddress ];
			window.plugins.webintent.startActivity({
				action : WebIntent.ACTION_SEND,
				type : 'text/plain',
				extras : extras
			}, function() {
				// success callback
				OKnesset.emailDialog.hide();
			}, function() {
				alert(OKnesset.strings.errorAndroidEmail);
			});
		}
	}
	// TODO - for web, implement a "send email" link
}

// /**
// * Displays the Party panel (the member list panel)
// *
// * @param record
// */
// function gotoParty(record) {
//
// // getViewport().setActiveItem('memberListWrapper', {
// // type : 'slide',
// // direction : 'right'
// // });
// }

// /**
// * Displays the Member panel
// *
// * @param record
// */
// function gotoMember(record) {
// var member = record.data;
// GATrackMember(member.name);
//
// OKnesset.memberImagePanel.update({
// img_url : "images/members/"
// + member.img_url.substring(member.img_url.lastIndexOf('/') + 1)
// });
// updateMemberData(member);
//
// // scroll bill list up
// if (OKnesset.memberBillList.scroller) {
// OKnesset.memberBillList.scroller.scrollTo({
// x : 0,
// y : 0
// });
// }
//
// // back button
// OKnesset.memberPanelToolbar.items.getAt(3).setText(
// OKnesset.memberListToolbar.title);
//
// // if there are no bills for the current member, display a text explaining
// // that.
// if (hasExcuseForNoBills(member)) {
// OKnesset.memberBillList.emptyText = "<br/><br/><br/>"
// + OKnesset.strings.excuseForNoBills;
// } else {
// OKnesset.memberBillList.emptyText = "";
// }
// OKnesset.memberBillList.refresh();
//
// getViewport().setActiveItem('memberPanelWrapper', {
// type : 'slide',
// direction : 'right'
// });
// }

/**
 * Returns true if the member is a minister, or is the chairperson of the
 * Knesset.
 *
 * @param member
 * @returns {Boolean}
 */
function hasExcuseForNoBills(member) {
	return (member.roles.indexOf(OKnesset.strings.ministerIndicator) != -1 || member.roles === OKnesset.strings.knessetChairman);
}

// /**
// * updates the information in the member panel.
// *
// * @param member
// * the member data to udpate the panel with
// */
// function updateMemberData(member) {
// OKnesset.memberBillsTitle.update({
// billNumber : member.bills.length,
// hasExcuseForNoBills : hasExcuseForNoBills(member)
// });
// OKnesset.memberInfoPanel.update(member);
// OKnesset.MemberBillsStore.loadData(member.bills);
// OKnesset.memberPanelToolbar.setTitle(member.name);
// OKnesset.memberPanelWrapper.currentMemeber = member;
// }

/**
 * Creates the info dialog (only once)
 */
function initInfoDialog() {
	if (!OKnesset.infoPanel) {
		OKnesset.infoPanel = new Ext.Panel({
			id : 'infoPanel',
			layout : 'vbox',
			cls : 'textCenter',
			floating : true,
			centered : true,
			width : getViewport().getWidth() * 0.9,
			height : getViewport().getHeight() * 0.65,
			items : [ {
				tpl : '{dateString}'
			}, {
				xtype : 'spacer',
				height : "2em"
			}, {
				xtype : 'button',
				width : "50%",
				handler : function() {
					checkFullDataFromWeb();
					OKnesset.infoPanel.hide();
				},
				text : OKnesset.strings.updateNow
			}, {
				xtype : 'spacer',
				height : "2em"
			}, {
				xtype : 'button',
				width : "50%",
				handler : function() {
					OKnesset.infoPanel.hide();
					displayDisclaimer(true);
				},
				text : OKnesset.strings.showDisclaimer
			}, {
				xtype : 'spacer',
				height : "2em"
			} ],
			dockedItems : [ {
				dock : 'top',
				xtype : 'toolbar',
				title : OKnesset.strings.openKnessetTitle
			}, {
				dock : 'bottom',
				ui : 'light',
				items : [ {
					xtype : 'button',
					ui : 'confirm',
					handler : function() {
						OKnesset.infoPanel.hide();
					},
					text : OKnesset.strings.back
				} ]
			} ]
		});

		OKnesset.infoPanel.refresh = function() {
			// TODO refresh the data date
			getViewport().items.getByKey(OKnesset.currentPanelId).refresh();
		}

	}

}

function displayInfoDialog() {
	initInfoDialog();
	OKnesset.currentPanelId = getViewport().getActiveItem().getId();
	// TODO fetch the text item more elegantly
	OKnesset.infoPanel.items.getAt(0).update(
			{
				dateString : Ext.util.Format.format(OKnesset.strings.dataDate,
						dateToString(new Date(parseInt(localStorage
								.getItem("PartyDataDate")))))
			});

	OKnesset.infoPanel.show({
		type : 'slide',
		direction : 'up'
	});

}

/**
 * For Android only - this function is called when the back button is touched.
 */
function onBackKey() {
	// dismiss email dialog if visible
	if (OKnesset.emailDialog && OKnesset.emailDialog.isVisible()) {
		OKnesset.emailDialog.hide();
		return;
	}

	// dismiss disclaimer dialog if visible (and if it is not the
	// first time the application has loaded)
	if (OKnesset.disclaimerDialog && OKnesset.disclaimerDialog.forceShow
			&& OKnesset.disclaimerDialog.isVisible()) {
		OKnesset.disclaimerDialog.hide();
		return;
	}

	// dismiss info dialog if visible
	if (OKnesset.infoPanel && OKnesset.infoPanel.isVisible()) {
		OKnesset.infoPanel.hide();
		return;
	}

	// find the back button
	var activeItem = getViewport().getActiveItem();
	var dockedItem = activeItem.getDockedItems()[0];
	var backButton = dockedItem.items.findBy(function(item) {
		return item.ui === 'forward';
	});

	if (backButton !== null) {
		backButton.handler();
	} else {
		// if there is no back button, it means we are at the initial screen
		navigator.app.exitApp();
	}
}

document.addEventListener("deviceready", OKnesset.mainLaunch, false);
