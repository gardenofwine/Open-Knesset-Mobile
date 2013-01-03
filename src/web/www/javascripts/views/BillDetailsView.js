OKnesset.app.views.BillDetailsView = new Ext.extend(OKnesset.Panel, {
    id: 'BillDetailsView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    scroll: 'vertical',
    currentMember: null,
    initComponent: function(){
        this.billContent = new OKnesset.app.views.BillDetailsView.billContent();
        this.billMakers = new OKnesset.app.views.BillDetailsView.billMakers();
        this.items = [
                  new Ext.Panel({
                  id: "billTitle",
                  cls: 'titlePanel',
                  padding: '5',
                  tpl:'<div class="hebTitle">{title}</div>'
                }),
                  new Ext.Panel({
                  id: "billStage",
                  padding: '5',
                  tpl:'<div class="hebTitle" style="font-weight: normal;">'+OKnesset.strings.billStage+'<b> {stage_text}</b><br/></div>\
                  <div>' + OKnesset.strings.dateString + ': {stage_date}</div>\
                  <tpl if="linkToPdf != -1"><a id="linktoPdf" class="hebLink" href="javascript:loadUrl(\'{linkToPdf}\')">'   + OKnesset.strings.BillpdfExist + '</a></tpl>'
                }),
                  this.billMakers,
                  this.billContent
                  ];
        OKnesset.app.views.BillDetailsView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('BillDetailsView', OKnesset.app.views.BillDetailsView);


var billContent = '\
 <p class="hebTitle">תיאור ההצעה:</p>\
<div class="bill_content description">{explanation}</div>\
';

OKnesset.app.views.BillDetailsView.billContent = new Ext.extend(Ext.Panel, {
    id: 'billContent',
    padding: '5',
    tpl: billContent
});


var billMakersItem = '<div>{name}</div> \
';

OKnesset.app.views.BillDetailsView.billMakers = new Ext.extend(Ext.List, {
    id: 'billMakersList',
    store: OKnesset.billMakersStore,
    itemTpl: billMakersItem,
    scroll: false,
    grouped: true,
    onItemDisclosure: true,
    deferEmptyText: false,
});
