Ext.Router.draw(function(map) {
	// Implement navigation controller behavior for pushing interactions onto
	// and popping them from a (controller, action) stack with animations.
	map.connect('navigation/push/:_controller/:_action', {
		controller : 'navigation',
		action : 'push'
	});

	map.connect('navigation/pop', {
		controller : 'navigation',
		action : 'pop'
	});

	map.connect(':controller/:action/:id');
	map.connect(':controller/:action');
});