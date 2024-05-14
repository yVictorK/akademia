import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import primaryTheme from './src/themes/default';
import { AppRoutes } from './src/routes';
import { AppProvider, UserProvider } from '@realm/react';
import { AuthRoutes } from './src/routes/auth.routes';
import { SplashScreen } from './src/components/SplashScreen';
import { useFonts } from 'expo-font';
import { realmContext } from './src/models/RealmContext';
import { StatusBar } from 'react-native';


const { RealmProvider } = realmContext;

export default function App() {

  const [loaded] = useFonts({
    NexaHeavy: require('./src/assets/fonts/Nexa/Nexa-Heavy.ttf'),
    PoppinsMedium: require('./src/assets/fonts/Poppins/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('./src/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      <SplashScreen />
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (
    <ThemeProvider theme={primaryTheme}>
      <AppProvider id='bd_akademia-xsxws'>
        <UserProvider fallback={AuthRoutes}>
          <RealmProvider
            sync={{
              flexible: true,
              onError: (session, error) => {
                console.error(error.message);
              }
            }}
          >
            <StatusBar />
            <AppRoutes />
          </RealmProvider>
        </UserProvider>
      </AppProvider>
    </ThemeProvider>
  );
}
