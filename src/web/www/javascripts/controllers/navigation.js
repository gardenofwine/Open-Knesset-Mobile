OKnesset.app.controllers.navigation = Ext.regController('navigation', {

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
  		// Only non-dialog panels affect the back button visibility status
        this.setBackbuttonVisibility();
    }

    this.log('> %s::%s', top.controller, top.action);
  },

  _pop : function(){
    if (this.stack){
      this.top =  this.stack.pop();
    } else {
      this.top =  undefined;
    }
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
        this._pop();
        this.setBackbuttonVisibility();
  	}

    var stack = this.stack,
    	top = this.top;
    if (top !== undefined) {
      top.dispatched = false;
      Ext.dispatch(Ext.apply(top, { navigation: 'pop' , animation : options.animation, pushed : false}));
      this.log('< %s::%s', top.controller, top.action);
    }
  },

  setBackbuttonVisibility : function(){
    // Android doesn't have an on screen back button
	  if (isAndroid()){
		  this.setBackbuttonVisibility = function(){};
		  return;
	  }

    var backBtn = this.application.viewport.query('#backBtn')[0];
    // The first panel is also pushed, but we dont want a back button on the
		// first panel
    if (this.stack.length > 1){
    	backBtn.show();
      // openMenuBtn.hide();
    } else {
    	backBtn.hide();
      // openMenuBtn.show();
    }
  },

  dispatchPanel : function(toUrl, historyUrl){
	  var dispatchParams = {
	        controller: 'navigation',
	        action: 'push',
	        to: this._historyUrlToObject(toUrl),
		    animation: {
		        type: 'slide',
		        direction : 'right'
		    },
		};
	  Ext.dispatch(dispatchParams);
	},


	dispatchBack : function(){
		var dispatchParams = {
	        controller: 'navigation',
	        action: 'pop',
		};
		Ext.dispatch(dispatchParams);
	},

	dispatchDialog: function(toUrl){
		toObj = this._historyUrlToObject(toUrl);
	    delete toObj['historyUrl'];

		var dispatchParams = {
	        controller: 'navigation',
	        action: 'push',
	        to: toObj,
		    animation: {
		        type: 'slide',
		        direction : 'up'
		    },
		};
		Ext.dispatch(dispatchParams);
	},

	_historyUrlToObject : function(historyUrl){
		var params = historyUrl.split("/");
		var obj = {historyUrl : historyUrl};
		if (params[0]){
			obj.controller = params[0];
		}
		if (params[1]){
			obj.action = params[1];
		}
		if (params[2]){
			obj.id = params[2];
		}
		return obj;
	}


});