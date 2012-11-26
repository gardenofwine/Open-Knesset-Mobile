    Ext.regController('BillDetails', {

	// index action
	Index: function (options) {
		var BillDetailsController = this,
			billTitle,
			billMakersList,
			billContent,
			billStage,
			hideWhileLoading,
			bill;
		if (!this.BillDetailsView) {
			this.BillDetailsView = this.render({
				xtype: 'BillDetailsView'
			});
			billMakersList = this.BillDetailsView.query('#billMakersList')[0],

			billMakersList.addListener('itemtap', function(that, index, item, e){
				var record = that.store.getAt(index);
				BillDetailsController._gotoMember(record);
			});
		}

        billTitle = this.BillDetailsView.query('#billTitle')[0];
		billMakersList = this.BillDetailsView.query('#billMakersList')[0],
		billContent = this.BillDetailsView.query('#billContent')[0],
		billStage = this.BillDetailsView.query('#billStage')[0],
		hideWhileLoading = [billTitle, billStage, billContent, billMakersList],

		BillDetailsController.BillDetailsView.showLoading(true);
		bill = getAPIData({
			apiKey:'bill',
			urlOptions : options.id,
			success: function (data){
				BillDetailsController.updateData(data);
				BillDetailsController._refresh(hideWhileLoading);

				BillDetailsController.BillDetailsView.showLoading(false);
			},
			failure: function (result){
				OKnesset.onError('SERVER', ["Error receiving bill data. ", result]);
			}
		});

		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			GATrackPage('BillDetailsView', options.id);
		}

		if (!bill){
			BillDetailsController._init(hideWhileLoading);
		}


		this.application.viewport.setActiveItem(this.BillDetailsView, options.animation);
		this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.billDetails);

		if (BillDetailsController.BillDetailsView.scroller) {
			BillDetailsController.BillDetailsView.scroller.scrollTo({
				x: 0,
				y: 0
			});
		}
	},


	_init: function(elementsToHIDE){
		elementsToHIDE.forEach(function(e){
			e.hide();
		});
	},
	_refresh: function(elementsToSHOW){
		elementsToSHOW.forEach(function(e){
			e.show();
		});
	},

	updateData: function(data) {
		//update title
		this.BillDetailsView.query('#billTitle')[0].update({
			title: data.bill_title
		});

		//update billMakersStore
		var billMakers = {
			founders: data.proposing_mks,
			joined: data.joining_mks
		};

		billMakers.founders.forEach(function (member) {
			member.MemberType = 'founder';
		});

		billMakers.joined.forEach(function (member) {
			member.MemberType = 'joined';
		});

		OKnesset.billMakersStore.loadData(billMakers.founders);
		OKnesset.billMakersStore.add(billMakers.joined);

		//update Content
		var explanation  = "",
			expalantions = [],
			pdf = -1,
			pdfs = [];
		if (data.proposals.private_proposals[0]) {
			expalantions.push(data.proposals.private_proposals[0].explanation);

			if (data.proposals.private_proposals[0].source_url.match(/\.pdf/)) {
				pdfs.push(data.proposals.private_proposals[0].source_url);
			}
		} else if (data.proposals.gov_proposal.explanation) {
			expalantions.push(data.proposals.gov_proposal.explanation);

			if (data.proposals.gov_proposal.source_url.match(/\.pdf/)){
				pdfs.push(data.proposals.gov_proposal.source_url);
			}
		} else if (data.proposals.knesset_proposal.explanation) {
			expalantions.push(data.proposals.knesset_proposal.explanation);

			if (data.proposals.knesset_proposal.source_url.match(/\.pdf$/)) {
				pdfs.push(data.proposals.knesset_proposal.source_url);
			}
		}

		expalantions.forEach(function(e){
			if (e) {
				explanation = e;
			}
		});

		pdfs.forEach(function(e){
			if (e) {
				pdf = e;
			}
		});

		this.BillDetailsView.query('#billContent')[0].update({
			explanation: explanation
		});

		//update state & Link to PDF
		this.BillDetailsView.query('#billStage')[0].update({
			stage_text: data.stage_text,
			stage_date:data.stage_date,
			linkToPdf: pdf
		});


	},
		_gotoMember: function(record){
		OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + record.data.id, this.historyUrl);
	}
});
