Open Knesset Mobile
========

Open Knesset Mobile (כנסת פתוחה) uses [PhoneGap](http://www.phonegap.com) and [Sencha Touch](http://www.sencha.com/products/touch/) to construct a multi-platform mobile application for the [Open Knesset](http://www.oknesset.rog) website.
This application is available free on the [App Store](http://itunes.apple.com/us/app/id475096101) and [Android Market](https://market.android.com/details?id=org.oknesset) and will always be free.
The purpose of this app is to increase transparency of Knesset activities, and to encourage people to be more involved with what is happening with the rulers of Israel's country.

This project is released as Open Source so that everyone can contribute to it.
Please check our issue [tracking system](https://track.nsa.co.il/projects/oknesset_mobile) for stuff we'd be happy be done :)

Prerequisites
========

- Git (obviously)
- Java
- Ant (for the build)

For desktop testing:

- Google Chrome (or Safari) or another WebKit based browser. Sencha touch does not support FireFox

For iOS:

- [Xcode](https://developer.apple.com/xcode/index.php) on a Mac machine
- PhoneGap for iOS (download the tag 1.0.0 from [github](https://github.com/callback/phonegap/zipball/1.0.0))

For Android: (PhoneGap for Android is included in this git repository)

- Eclipse
- ADT for Eclipse (Android development Toolkit)

Installation
========

For Desktop browser testing (Chrome/Safari):

- clone this git repository

    git clone git@github.com:gardenofwine/Open-Knesset-Mobile.git

- import the project directly under 'OKnesset Mobile' to eclipse

Installation - only for Android
========

run the following git commands to clone the PhoneGap submodule:

    git submodule init
    git submodule update

Get started (Build and Run!)
========

Eclipse:

- build the project (Project ==> Build Project)

--------

Command Line:

build the project (command-line) - run ant with no arguments form the project root directory.

    ant

you now have 3 'executable' versions of the OKnesset Mobile application. Android, iPhone and Web (for testing).

Web:

- Open 'OKnesset Mobile/target/web/www/index.html' with google chrome browser

iPhone:

- Open 'OKnesset Mobile/native/iOS/OKnesset/OKnesset' (with Xcode)

Android:

- import the eclipse project in 'OKnesset Mobile/native/Android/OKnesset/'


Troubleshooting
========

Windows:

--------

1) if you get an Error like this when running ant:

    'ant' is not recognized as an internal or external command,
    operable program or batch file.

   You need to download and install ANT on your machine.

Make a difference!
========

- When modifying javascript files, please use the 'javascriptFormatting.xml' formatting settings so that file merges and code reviews would be easier.
- Try to follow These [Guidelines](http://wiki.phonegap.com/w/page/28618504/Git%3A%20Contributor%20Workflow) from PhoneGap's Contributer Workflow on how to make pull requests for the project

How to contribute code?
========
**Making a branch for your changes**

When adding features or bug fixes, please create a separate branch for each changeset you want us to pull in. Use the issue number in the branch name, or a description of the feature. To create the branch, do something like this:

	git branch   (lists your current branches)
	git branch my_new_code   (makes a new branch called my_new_code)
	git checkout my_new_code

** Push your code and make a pull request**

When you have finished making your changes, you'll need to push up your changes to your fork so we can grab them. With them all committed, push them:

	git push origin my_new_code

This pushes everything in that branch up. Then you can go back over to the main github page and issue a pull request from there.  Tell us what you want us to merge and what it does/fixes, and one of us will pick it up.

That lets us know that there's something new from you that needs to be pulled in. We'll review it and get back to you about it if we have any questions. Otherwise, we'll integrate it and let you know when it's in!

