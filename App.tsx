import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import primaryTheme from './src/themes/default';
import { AppRoutes } from './src/routes';
import { AppProvider, RealmProvider, UserProvider } from '@realm/react';
import { AuthRoutes } from './src/routes/auth.routes';
import { SplashScreen } from './src/components/SplashScreen';
import * as Font from 'expo-font';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const useLoadFonts = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
  
    const loadFonts = async () => {
      await Font.loadAsync({
        'Nexa-Heavy': require('./src/assets/fonts/Nexa/Nexa-Heavy.ttf'),
        'Poppins-Medium': require('./src/assets/fonts/Poppins/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('./src/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
  
      });
      setFontsLoaded(true);
    }
  
    useEffect(() => {
      loadFonts();
    }, []);
  
    return fontsLoaded; 
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!useLoadFonts || isLoading) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider theme={primaryTheme}>
      <AppProvider id='bd_akademia-xsxws'>
        <UserProvider fallback={AuthRoutes}>
          <RealmProvider
            sync={{
              flexible: true,
            }}
          >
            <AppRoutes />
          </RealmProvider>
        </UserProvider>
      </AppProvider>
    </ThemeProvider>
  );
}
