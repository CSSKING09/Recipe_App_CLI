// AppLoader.js
import React, { useState, useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { fetchRandomRecipes } from '../api/api';

const AppLoader = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await fetchRandomRecipes();
        setIsReady(true);
        RNBootSplash.hide({ fade: true });
      } catch (error) {
        console.log(error);
        RNBootSplash.hide({ fade: true });
      }
    };

    prepareApp();
  }, []);

  if (!isReady) return null;

  return children;
};

export default AppLoader;
