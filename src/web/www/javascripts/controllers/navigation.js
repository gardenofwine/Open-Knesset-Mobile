Ext.regController('navigation', {

  debug: false,

  log: function() {
    if (this.debug) {
      var args = Array.prototype.slice.call(arguments);
      console.log.apply(console, args);
    }
  },

  push: function(options) {
    var stack = this.stack = this.stack || [],
        top = this.top;

    if (top !== undefined) {
      stack.push(top);
    }

    top = this.top = Ext.apply(options, options.to || {
      controller: options['_controller'],
      action: options['_action'],
      historyUrl: options.historyUrl.substr('navigation/push/'.length)
    });

    delete top['_controller'];
    delete top['_action'];

    if (stack.length === 0) {
      // provide an initial back item when first invoking a push action
      // i.e. in the application's launch method, so you can at least
      // go back to the home screen when invoking the app in a nested state â
      // e.g. via index.html#some-controller/some-action.
      stack.push(top);
    }

    // TODO the 'pushed' key is not necessary. use 'navigation' in its place.
    Ext.dispatch(Ext.apply(top, { navigation: 'push', animation : options.animation, pushed : true }));
    if (top.historyUrl === undefined){
    	// in case of a "dialog" style panel
        var dialogController = Ext.ControllerManager.get(top.controller);
        dialogController.view.addListener('hide', this._pop, this);
    } else {
  		// Only non-dialog panels affect the back button visibitilty status
        this.setBackbuttonVisibility();
    }

    this.log('> %s::%s', top.controller, top.action);
  },

  _pop : function(){
      this.top = (this.stack)? this.stack.pop() : undefined;
  },

  pop: function(options) {
  	if (this.top !== undefined && !this.top.historyUrl){
  		// In case of a "dialog" style panel that is being popped
        var dialogController = Ext.ControllerManager.get(this.top.controller);
        dialogController.view.removeListener('hide', this._pop, this);

        Ext.ControllerManager.get(this.top.controller).view.hide();
        this._pop();
        return;
  	} else {
  		// Only non-dialog panels affect the back button visibitilty status
        this.setBackbuttonVisibility();
  	}

    this._pop();
    var stack = this.stack,
    	top = this.top;
    if (top !== undefined) {
      top.dispatched = false;
      Ext.dispatch(Ext.apply(top, { navigation: 'pop' , animation : options.animation, pushed : false}));
      this.log('< %s::%s', top.controller, top.action);
    }
  },

  setBackbuttonVisibility : function(){
	  if (isAndroid()){
		  this.setBackbuttonVisibility = function(){};
		  return;
	  }
      var backBtn = this.application.viewport.query('#backBtn')[0];
      // The first panel is also pushed, but we dont want a back button on the first panel
      if (this.stack.length > 1){
      	backBtn.show();
      } else {
      	backBtn.hide();

      }
  }

});