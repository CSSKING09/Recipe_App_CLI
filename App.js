import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './src/navigation/RootStack';
import { fetchRandomRecipes } from './src/api/api';
import { hideSplash } from 'react-native-splash-view';

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        // DO NOT CALL showSplash() ❌
        await fetchRandomRecipes();

        setIsReady(true);

        hideSplash(); // Hides the RN splash overlay immediately
      } catch (error) {
        console.log('Error loading app:', error);
        hideSplash();
      }
    };

    prepareApp();
  }, []);

  if (!isReady) return null;

  return (
    <SafeAreaProvider>
      <RootStack />
    </SafeAreaProvider>
  );
}

export default App;
