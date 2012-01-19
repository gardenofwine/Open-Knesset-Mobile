Ext.Router.draw(function(map) {
    map.connect(':controller/:action/:id');
    map.connect(':controller/:action');
});