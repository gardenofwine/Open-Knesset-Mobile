Ext.regController('Email', {

    // index action
	Index: function(options)
    {
        if ( ! this.emailView)
        {
            this.emailView = this.render({
                xtype: 'EmailView',
            });

            this.contextButton = this.emailView.query('#contextButton')[0];
            var that = this;
            this.contextButton.setHandler(function(){
                that.sendEmail(that.contextButton.text);
            });

            this.emailView.query('#generalFeedbackBtn')[0].setHandler(function(button){
                that.sendEmail(button.text);
            });

            this.emailView.query('#cancelEmailBtn')[0].setHandler(function(){
      			that.emailView.hide();
            });
        }

        var currentController = Ext.ControllerManager.get("navigation").top.controller;
        this.contextButton.setText(Ext.ControllerManager.get(currentController).getReviewButtonText());
        this.contextButton.doComponentLayout();

    	this.emailView.show({
    		type : 'slide',
    		direction : 'up'
    	});
    },

    sendEmail : function(subject) {
    	OKnesset.log("** sending email with subject " + subject);
    	if (isPhoneGap()) {
    		if (isiOS()) {
    			var emailCallback = function(result) {
    				// called after email has been sent
    				if (result != EmailComposer.ComposeResultType.Cancelled) {
    					OKnesset.emailDialog.hide();
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
    				OKnesset.emailDialog.hide();
    			}, function() {
    				alert(OKnesset.strings.errorAndroidEmail);
    			});
    		}
    	}
    	// TODO - for web, implement a "send email" link
    }

});