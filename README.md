Open Knesset Mobile
========

Open Knesset Mobile (כנסת פתוחה) uses [PhoneGap](http://www.phonegap.com) and [Sencha Touch](http://www.sencha.com/products/touch/) to construct a multi-platform mobile application for the [Open Knesset](http://www.oknesset.rog) website.

---
Prerequisites
========

- Git (obviously)
- Eclipse

For iOS:
- [Xcode](https://developer.apple.com/xcode/index.php) on a Mac machine
- PhoneGap for iOS (download the tag 1.0.0 from [github](https://github.com/callback/phonegap/zipball/1.0.0))

For Android: (PhoneGap for Android is included in this git repository)
- ADT for Eclipse (Android development Toolkit)

Installation
========

- clone this git repository
    git clone http://
- retrieve the submodules:
    cd 'OKnesset Mobile'
    git submodule init
    git submodule update
- import the project directly under 'OKnesset Mobile' to eclipse

Get started
========
- build the project (Project ==> Build Project)
- you now have 3 'executable' versions of the OKnesset Mobile application. Web, Android and iPhone. Open 'OKnesset Mobile/target/web/www/index.html' For the web version.

