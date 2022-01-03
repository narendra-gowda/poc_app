package com.poc_app;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // add this
import android.os.Bundle; // add this

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "poc_app";
  }
  
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);  
    super.onCreate(savedInstanceState);
  }
}
