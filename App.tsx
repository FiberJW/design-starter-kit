import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { HomeScreen } from './screens/Home';

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Inter: require('./assets/fonts/Inter-Regular.otf'),
      'Inter Black': require('./assets/fonts/Inter-Black.otf'),
      'Inter BlackItalic': require('./assets/fonts/Inter-BlackItalic.otf'),
      'Inter Bold': require('./assets/fonts/Inter-Bold.otf'),
      'Inter BoldItalic': require('./assets/fonts/Inter-BoldItalic.otf'),
      'Inter ExtraBold': require('./assets/fonts/Inter-ExtraBold.otf'),
      'Inter ExtraBoldItalic': require('./assets/fonts/Inter-ExtraBoldItalic.otf'),
      'Inter ExtraLight': require('./assets/fonts/Inter-ExtraLight-BETA.otf'),
      'Inter ExtraLightItalic': require('./assets/fonts/Inter-ExtraLightItalic-BETA.otf'),
      'Inter Italic': require('./assets/fonts/Inter-Italic.otf'),
      'Inter Light': require('./assets/fonts/Inter-Light-BETA.otf'),
      'Inter LightItalic': require('./assets/fonts/Inter-LightItalic-BETA.otf'),
      'Inter Medium': require('./assets/fonts/Inter-Medium.otf'),
      'Inter MediumItalic': require('./assets/fonts/Inter-MediumItalic.otf'),
      'Inter SemiBold': require('./assets/fonts/Inter-SemiBold.otf'),
      'Inter SemiBoldItalic': require('./assets/fonts/Inter-SemiBoldItalic.otf'),
      'Inter Thin': require('./assets/fonts/Inter-Thin-BETA.otf'),
      'Inter ThinItalic': require('./assets/fonts/Inter-ThinItalic-BETA.otf'),
    }).then(() => {
      setFontsLoaded(true);
    });
  }, []);

  return fontsLoaded ? <HomeScreen /> : null;
}

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
