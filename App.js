import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './src/navigation/RootStack';
import AppLoader from './src/Context/AppLoader';
import UserProvider from './src/Context/UserContext';

function App() {
  return (
    <UserProvider>
      <SafeAreaProvider>
        <AppLoader>
          <RootStack />
        </AppLoader>
      </SafeAreaProvider>
    </UserProvider>
  );
}

export default App;
