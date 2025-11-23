import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './src/navigation/RootStack';
import { fetchRandomRecipes } from './src/api/api';
import RNBootSplash from 'react-native-bootsplash'; // <-- new import

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await fetchRandomRecipes();

        setIsReady(true);

        RNBootSplash.hide({ fade: true }); // <-- hide BootSplash smoothly
      } catch (error) {
        console.log('Error loading app:', error);
        RNBootSplash.hide({ fade: true });
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
