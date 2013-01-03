/**
 * The Member list panel (בנימין נתניהו, גדעון סער) shows a list of members
 * of the current selected party
 */
OKnesset.app.views.CandidatePartyView = new Ext.extend(OKnesset.Panel, {
			id : 'CandidatePartyView',
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			title : '',
			scroll: 'vertical',
			initComponent: function()
			{
				this.memberList = new OKnesset.app.views.CandidatePartyView.MemberList();
				this.info = new OKnesset.app.views.CandidatePartyView.MiniInfo();
				this.partyButton = new Ext.Button({                                                       
					id  : 'partyButton',
					margin: "10 10 10 10",
					flex : 1,
					cls : 'read-more-btn',
					text: OKnesset.strings.GotoPartyPanel
				});
				// only for likud beiteno
				this.partyButton2 = new Ext.Button({                                                       
					id  : 'partyButton2',
					margin: "10 10 10 10",
					hidden : true,
					flex : 1,
					cls : 'read-more-btn',
					text: OKnesset.strings.GotoPartyPanel
				});
				this.websiteButton = new Ext.Button({                                                       
					id  : 'websiteButton',
					margin: "10 10 10 10",
					flex : 1,
					cls : 'read-more-btn',
					text: OKnesset.strings.GotoPartyWebsite
				});
				this.manifestButton = new Ext.Button({                                                       
					id  : 'manifestButton',
					margin: "10 10 10 10",
					flex : 1,
					cls : 'read-more-btn',
					text: OKnesset.strings.GotoPartyManifest
				});
				this.items = [this.info, this.partyButton, this.partyButton2, this.websiteButton, this.manifestButton, this.memberList];
				OKnesset.app.views.CandidatePartyView.superclass.initComponent.apply(this, arguments);
			}
		});

Ext.reg('CandidatePartyView', OKnesset.app.views.CandidatePartyView);

OKnesset.app.views.CandidatePartyView.MemberList = new Ext.extend(Ext.List, {
	id : 'CandidateMemberList',
	flex : 5,
	itemTpl : '<div>{#} {name}</div><tpl if="id"></div><div class="x-list-disclosure"></div></tpl>',
	scroll: false,
	store : OKnesset.electionMembersStore
	//onItemDisclosure : true
});

OKnesset.app.views.CandidatePartyView.MiniInfo = new Ext.extend(Ext.Panel, {
	id : 'MiniInfo',
	flex : 8,
	// scroll: true,
	padding: 5,
	padding: 5,
	tpl : '<div class="partyInfo" style="position: absolute; width: 100%; height: 100%;"> \
				<div class="partyLetters100precent"><div style="display: table-row;">\
				<div style="display: table-cell;vertical-align:middle;font-size:{size}">{letters}</div>\
				</div></div></div>'
});
