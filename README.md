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

- clone this git repository
    git clone git@github.com:gardenofwine/Open-Knesset-Mobile.git

For the Android version development:

- retrieve the submodules:
    cd 'OKnesset Mobile'
    git submodule init
    git submodule update
- import the project directly under 'OKnesset Mobile' to eclipse

Get started
========
- build the project (eclipse) - (Project ==> Build Project)
- build the project (command-line) - run ant with no arguments form the project root directory
    ant
- you now have 3 'executable' versions of the OKnesset Mobile application. Android, iPhone and Web (for testing).

WEB:

- Open 'OKnesset Mobile/target/web/www/index.html' with chrome

IPHONE:

- Open 'OKnesset Mobile/native/iOS/OKnesset/OKnesset' (with Xcode)

Android:

- import the eclipse project in 'OKnesset Mobile/native/Android/OKnesset/'


Make a difference!
========

- When modifying javascript files, please use the 'javascriptFormatting.xml' formatting settings so that file merges and code reviews would be easier.
- Try to follow These [Guidelines](http://wiki.phonegap.com/w/page/28618504/Git%3A%20Contributor%20Workflow) from PhoneGap's Contributer Workflow on how to make pull requests for the project

