Ext.regController('Info', {

    // index action
	Index: function(options)
    {
        if ( ! this.view)
        {
            this.view = this.render({
                xtype: 'InfoView',
            });

            this.view.dockedItems.getAt(1).items.getByKey('cancelInfoBtn').setHandler(function(){
            	OKnesset.app.controllers.navigation.dispatchBack();
            });

            this.view.items.getByKey('emailReview').setHandler(function(){
                this.sendEmail(this.emailSubject);
            }, this);

            this.view.items.getByKey('displayDisclaimerBtn').setHandler(function(){
            	OKnesset.app.controllers.navigation.dispatchBack();
            	OKnesset.app.controllers.navigation.dispatchDialog('Disclaimer/Index');
            });
        }


        var infoTitle = OKnesset.strings["info_" + options.id + "_title"];
        var infoText  = OKnesset.strings["info_" + options.id + "_text"];

        // store the options for the email button action
        this.emailSubject = infoTitle;
        
        this.view.dockedItems.getAt(0).setTitle(infoTitle);
        this.view.items.getByKey('pageDescription').update({text:infoText});
    	this.view.show(options.animation);

    },

    sendEmail : function(subject) {
        subject = OKnesset.strings.openKnessetTitle + " - " + subject;
        OKnesset.log("Sending email with subject " + subject);
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