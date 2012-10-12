Open Knesset Mobile
========

Open Knesset Mobile (כנסת פתוחה) uses [PhoneGap](http://www.phonegap.com) and [Sencha Touch](http://www.sencha.com/products/touch/) to construct a multi-platform mobile application for the [Open Knesset](http://www.oknesset.rog) website.
This application is available free on the [App Store](http://itunes.apple.com/us/app/id475096101) and [Android Market](https://market.android.com/details?id=org.oknesset) and will always be free.
The purpose of this app is to increase transparency of Knesset activities, and to encourage people to be more involved with what is happening with the rulers of Israel's country.

This project is released as Open Source so that everyone can contribute to it.
Please check our issue [tracking system](https://track.nsa.co.il/projects/oknesset_mobile) for stuff we'd be happy be done :)

Installation (for development)
========

- Fork the repository to your github account
- Clone the forked repository (first [install git](http://help.github.com/win-set-up-git/) if you don't have it)

-

    git clone git@github.com:<YOUR_GITHUB_USER>/Open-Knesset-Mobile.git
    cd open-knesset-mobile
    ant

You have to [install ant](http://ant.apache.org/manual/install.html) first

Run the application (on a browser)
========

The Open Knesset Mobile application loads on a Google Chrome browser. After installation, open the index.html file under **target\web\www** directory


Understanding the code
========

The application is build with javascript over version 1.1 of the  [Sencha Touch](http://www.sencha.com/products/touch/) framework ([docs](http://docs.sencha.com/touch/1-1/)), and wrapped with version 1.1 of [PhoneGap](http://phonegap.com/).
The code structure follows the MVC paradigm, and specifically that which is described in this wonderfully written [tutorial](http://www.onlinesolutionsdevelopment.com/blog/mobile-development/creating-a-sencha-touch-mvc-application-from-scratch-part-1/)

The first piece of code running is in index.javascript, in the mainLaunch function - start from there!


Eclipse
========

I used to work with Eclipse and the Aptana plugin for development. However, today I use Sublime Text 2, and command line git.

For those who want a more hugging development environment (although a bit slow), do go on and install Eclispe:
I use the Egit plugin for git integration within eclipse:

- Install the latest version of [eclipse](http://www.eclipse.org/downloads/?osType=win32)
- Install the [Aptana plugin](http://update1.aptana.org/studio/3.2/024747/index.html). (detailed instructions [here](http://www.aptana.com/docs/index.php/Plugging_Aptana_into_an_existing_Eclipse_configuration#Eclipse_3.2.2C_3.3_Instructions))
- Install the [Egit plugin](http://www.eclipse.org/egit/). (Video instructions [here](http://www.youtube.com/watch?v=I7fbCE5nWPU))
- [Import](http://help.eclipse.org/helios/index.jsp?topic=%2Forg.eclipse.platform.doc.user%2Ftasks%2Ftasks-importproject.htm) the Open-Knesset-Mobile project directly under the 'Open-Knesset-Mobile' directory. ([video instructions](http://www.youtube.com/watch?v=IkYngHQTx7Y))
- Build the project (Project ==> Build Project)

XCode (iOS):
=========

- [Xcode](https://developer.apple.com/xcode/index.php) on a Mac machine
- PhoneGap for iOS (download the tag 1.0.0 from [github](https://github.com/callback/phonegap/zipball/1.0.0))
- After building to project, Open 'Open-Knesset-Mobile/native/iOS/OKnesset/OKnesset' (with Xcode)

ADT (Android):
========

(PhoneGap for Android is included in this git repository)

- run the following git commands to clone the PhoneGap submodule:

-

    git submodule init
    git submodule update

- Install The ADT plugin for Eclipse
- import the eclipse project in 'Open-Knesset-Mobile/native/Android/OKnesset/'


Troubleshooting
========

Windows:

--------

1) if you get an Error like this when running ant:

    'ant' is not recognized as an internal or external command,
    operable program or batch file.

   You need to download and install ANT on your machine.

Guidelines
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
