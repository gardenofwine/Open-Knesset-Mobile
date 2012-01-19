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

    Ext.dispatch(Ext.apply(top, { navigation: 'push', animation : options.animation, pushed : true }));
    this.setBackbuttonVisibility();

    this.log('> %s::%s', top.controller, top.action);
  },

  pop: function(options) {
    var stack = this.stack,
        top = this.top = (stack)? stack.pop() : undefined;
    if (top !== undefined) {
      top.dispatched = false;
      Ext.dispatch(Ext.apply(top, { navigation: 'pop' , animation : options.animation, pushed : false}));
      this.setBackbuttonVisibility();
      this.log('< %s::%s', top.controller, top.action);
    }
  },

  setBackbuttonVisibility : function(){
      var backBtn = this.application.viewport.query('#backBtn')[0];
      // The first panel is also pushed, but we dont want a back button on the first panel
      if (this.stack.length > 1){
      	backBtn.show();
      } else {
      	backBtn.hide();

      }
  }

});