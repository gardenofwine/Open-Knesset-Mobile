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

            this.view.dockedItems.getAt(1).items.getByKey('emailReview').setHandler(function(){
                this.sendEmail(this.emailSubject);
            }, this);

            this.view.dockedItems.getAt(1).items.getByKey('displayDisclaimerBtn').setHandler(function(){
            	OKnesset.app.controllers.navigation.dispatchBack();
            	OKnesset.app.controllers.navigation.dispatchDialog('Disclaimer/Index');
            });
        }


        var infoTitle = OKnesset.strings.infoDialog.Default.title; 
        var infoText = OKnesset.strings.infoDialog.Default.text;
        if (typeof OKnesset.strings.infoDialog[options.id] !== "undefined"){
            infoTitle = OKnesset.strings.infoDialog[options.id].title;
            infoText = OKnesset.strings.infoDialog[options.id].text;
        }

        // store the options for the email button action
        this.emailSubject = infoTitle + " (" + options.id + ")";

        // don't track if the panal was reached by pressing 'back'
        if (options.pushed){
            GATrackPage('InfoView', this.emailSubject);
        }

        this.view.dockedItems.getAt(0).setTitle(infoTitle);
        this.view.items.getByKey('pageDescription').update({text:infoText});
    	this.view.show(options.animation);

    },

    sendEmail : function(subject) {
        subject = OKnesset.strings.openKnessetTitle + " - " + subject;
        OKnesset.log("Sending email with subject " + subject);
        if (isPhoneGap()) {
            GATrackEvent('email', 'review');
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
                window.plugins.webintent.startActivity({
                    action : WebIntent.ACTION_SENDTO,
					url: 'mailto:' + OKnesset.strings.feedbackEmailAddress + '?subject=' + encodeURI(subject),
                }, function() {
                    // success callback
                }, function() {
                    alert(OKnesset.strings.errorAndroidEmail);
                });
            }
        }
        // TODO - for web, implement a "send email" link
    }    
});