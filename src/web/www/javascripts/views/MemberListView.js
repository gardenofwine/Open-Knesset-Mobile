/**
 * The List of all knesset members (אהוד ברק, ציפי לבני...), sorted alphabetically
 */
OKnesset.app.views.MemberListView = new Ext.extend(Ext.List, {
    id: 'MemberListView',
    store: OKnesset.MemberStore,
    grouped: true,
    itemTpl: '<div>{name}</div>',
    onItemDisclosure: true
});

Ext.reg('MemberListView', OKnesset.app.views.MemberListView);
