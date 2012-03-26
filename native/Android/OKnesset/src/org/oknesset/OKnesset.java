package org.oknesset;

import org.oknessett.R;

import android.content.res.Configuration;
import android.os.Bundle;
import android.view.Display;

import com.phonegap.DroidGap;

public class OKnesset extends DroidGap {
	
	 private int mRuntimeOrientation;
	 private boolean mDisableScreenRotation = true;
	   
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        mRuntimeOrientation = this.getScreenOrientation();
    	super.setIntegerProperty("splashscreen", R.drawable.splash);
    	super.setStringProperty("loadingDialog", "×‘×•×“×§×ª ×ž×” ×—×‘×¨×™ ×”×›× ×¡×ª ×¢×©×• ×”×™×•×�");
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
        
    }
    
    @Override
    public void onConfigurationChanged(Configuration newConfig) {
       if (mDisableScreenRotation) {
          super.onConfigurationChanged(newConfig);
          this.setRequestedOrientation(mRuntimeOrientation);
       } else {
          mRuntimeOrientation = this.getScreenOrientation();
          super.onConfigurationChanged(newConfig);
       }
    }
    
    protected int getScreenOrientation() {
        Display display = getWindowManager().getDefaultDisplay();
        int orientation = display.getOrientation();

        if (orientation == Configuration.ORIENTATION_UNDEFINED) {
           orientation = getResources().getConfiguration().orientation;

           if (orientation == Configuration.ORIENTATION_UNDEFINED) {
              if (display.getWidth() == display.getHeight())
                 orientation = Configuration.ORIENTATION_SQUARE;
              else if(display.getWidth() < display.getHeight())

                 orientation = Configuration.ORIENTATION_PORTRAIT;
              else
                 orientation = Configuration.ORIENTATION_LANDSCAPE;
              }
           }
        return orientation;
     }
}