package org.oknesset;

import org.apache.cordova.DroidGap;

import android.os.Bundle;

public class OKnesset extends DroidGap {

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
    	super.onCreate(savedInstanceState);
    	super.setIntegerProperty("splashscreen", R.drawable.splash);
    	super.setStringProperty("loadingDialog", "בודקת מה חברי הכנסת עשו היום");
        super.loadUrl("file:///android_asset/www/index.html", 10000);
    }
}