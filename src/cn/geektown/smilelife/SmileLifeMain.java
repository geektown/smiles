package cn.geektown.smilelife;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import cn.geektown.smilelife.util.SystemUiHider;
/**
 * An example full-screen activity that shows and hides the system UI (i.e.
 * status bar and navigation/system bar) with user interaction.
 * 
 * @see SystemUiHider
 */
public class SmileLifeMain extends DroidGap  {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		setContentView(R.layout.activity_smile_life_main);
		super.loadUrl("file:///android_asset/www/index.html");
		
	}
}
