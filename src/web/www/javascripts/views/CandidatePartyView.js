/**
 * The Member list panel (בנימין נתניהו, גדעון סער) shows a list of members
 * of the current selected party
 */
OKnesset.app.views.CandidatePartyView = new Ext.extend(Ext.Panel, {
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
				this.websiteButton = new Ext.Button({                                                       
					id  : 'websiteButton',
					flex : 1,
					cls : 'read-more-btn',
					text: OKnesset.strings.GotoPartyWebsite
				});
				this.manifestButton = new Ext.Button({                                                       
					id  : 'manifestButton',
					flex : 1,
					cls : 'read-more-btn',
					text: OKnesset.strings.GotoPartyManifest
				});
				this.items = [this.info, this.websiteButton, this.manifestButton, this.memberList];
				OKnesset.app.views.CandidatePartyView.superclass.initComponent.apply(this, arguments);
			}
		});

Ext.reg('CandidatePartyView', OKnesset.app.views.CandidatePartyView);

OKnesset.app.views.CandidatePartyView.MemberList = new Ext.extend(Ext.List, {
	id : 'MemberList',
	flex : 5,
	itemTpl : '<div>{#} {name}</div>',
	scroll: false,
	store : OKnesset.electionMembersStore
	//onItemDisclosure : true
});

OKnesset.app.views.CandidatePartyView.MiniInfo = new Ext.extend(Ext.Panel, {
	id : 'MiniInfo',
	flex : 5,
	scroll: true,
	// items: [
	// 	new OKnesset.app.views.CandidatePartyView.MiniText()
	// ]
	padding: 5,
		// layout: {
  //         type: 'vbox',
  //         align: 'stretch'
  //   },
	padding: 5,
	tpl : '<div class="partyInfo" style="position: absolute; width: 100%; height: 100%;"> \
				<div class="partyLetters"><div style="display: table-row;">\
				<div style="display: table-cell;vertical-align:middle;font-size:{size}">{letters}</div>\
				</div></div><p>עוד מידע על המפלגה</p></div>'
});
