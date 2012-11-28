/**
 * Bills
 */
OKnesset.app.views.BillsView = new Ext.extend(OKnesset.Panel, {
    id: 'BillsView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    currentMemeber: null,
    initComponent: function(){
        this.billList = new OKnesset.app.views.BillsView.BillList();
        this.billListTitle = new Ext.Panel({
                id: "billListTitle",
                cls: 'titlePanel',
                // padding: '5',
                tpl: new Ext.XTemplate('<div class="hebTitle">{[this.billListTitle(values.relevant, values.total)]}</div>', 
                    {
                        compiled: true,         
                        billListTitle : function(relevant, total){
                            return Ext.util.Format.format(OKnesset.strings.billsOutOf, relevant, total);
                        }
                    })
            });
        this.items = [this.billListTitle, this.billList];
        OKnesset.app.views.BillsView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('BillsView', OKnesset.app.views.BillsView);

OKnesset.app.views.BillsView.BillList = new Ext.extend(Ext.List, {
    id: 'MemberBillList',
    itemTpl: '<div>{full_title}</div>',
    store: OKnesset.MemberBillsStore,
    layout: 'fit',
    deferEmptyText: false,
    grouped: true,
    flex: 1.5,
    onItemDisclosure: true
});






