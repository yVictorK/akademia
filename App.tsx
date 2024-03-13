import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import primaryTheme from './src/themes/default';
import { AppRoutes } from './src/routes';
import useLoadFonts from './src/hooks/useLoadFonts';
import { AppProvider, RealmProvider, UserProvider } from '@realm/react';
import { AuthRoutes } from './src/routes/auth.routes';
import { SplashScreen } from './src/components/SplashScreen';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const fontsLoaded = useLoadFonts();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded || isLoading) {
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
