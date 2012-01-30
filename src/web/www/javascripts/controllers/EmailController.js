Ext.regController('Email', {

    // index action
	Index: function(options)
    {
        if ( ! this.view)
        {
            this.view = this.render({
                xtype: 'EmailView',
            });

            this.contextButton = this.view.query('#contextButton')[0];
            var that = this;
            this.contextButton.setHandler(function(){
                that.sendEmail(that.contextButton.text);
            });

            this.view.query('#generalFeedbackBtn')[0].setHandler(function(button){
                that.sendEmail(button.text);
            });

            this.view.query('#cancelEmailBtn')[0].setHandler(function(){
            	OKnesset.app.controllers.navigation.dispatchBack();
            });
        }

        var stack = Ext.ControllerManager.get("navigation").stack;

        this.contextButton.setText(Ext.ControllerManager.get(stack[stack.length-1].controller).getReviewButtonText());
        this.contextButton.doComponentLayout();

    	this.view.show(options.animation);
    },

    sendEmail : function(subject) {
    	OKnesset.log("** sending email with subject " + subject);
    	if (isPhoneGap()) {
    		if (isiOS()) {
    			var emailCallback = function(result) {
    				// called after email has been sent
    				if (result != EmailComposer.ComposeResultType.Cancelled) {
    					OKnesset.app.controllers.navigation.dispatchBack();
    				}
    			};
    			window.plugins.emailComposer.showEmailComposerWithCB(emailCallback,
    					subject, "", OKnesset.strings.feedbackEmailAddress);
    		} else if (isAndroid) {
    			var extras = {};
    			extras[WebIntent.EXTRA_SUBJECT] = subject;
    			extras[WebIntent.EXTRA_EMAIL] = [ OKnesset.strings.feedbackEmailAddress ];
    			window.plugins.webintent.startActivity({
    				action : WebIntent.ACTION_SEND,
    				type : 'text/plain',
    				extras : extras
    			}, function() {
    				// success callback
    				OKnesset.app.controllers.navigation.dispatchBack();
    			}, function() {
    				alert(OKnesset.strings.errorAndroidEmail);
    			});
    		}
    	}
    	// TODO - for web, implement a "send email" link
    }

});