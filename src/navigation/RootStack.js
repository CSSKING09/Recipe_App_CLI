import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import BottomTabs from './BottomTabs';
import React from 'react';
import { UserContext } from '../Context/UserContext';

const Stack = createNativeStackNavigator();

function RootStack() {
  const { isLoggedIn, isReady, userName, userEmail, userPassword } =
    React.useContext(UserContext);

  if (!isReady) return null; // splash screen

  // Check if there is stored data to skip Auth
  const skipAuth = userName && userEmail && userPassword;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!skipAuth && !isLoggedIn ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="MainTabs" component={BottomTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
