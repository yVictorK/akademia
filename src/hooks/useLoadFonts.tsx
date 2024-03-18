import {useEffect, useState } from "react";
import * as Font from 'expo-font';

const useLoadFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Nexa-Heavy': require('../assets/fonts/Nexa/Nexa-Heavy.ttf'),
      'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
      'Poppins-SemiBold': require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),

    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return fontsLoaded; 
}

export default useLoadFonts;