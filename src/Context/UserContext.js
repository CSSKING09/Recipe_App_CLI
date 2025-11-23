import { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // for login/logout buttons
  const [isReady, setIsReady] = useState(false); // for splash/loading

  // Move this function outside useEffect
  const loadStoredData = async () => {
    try {
      const name = await AsyncStorage.getItem('userName');
      const email = await AsyncStorage.getItem('userEmail');
      const password = await AsyncStorage.getItem('userPassword');

      if (name) setUserName(name);
      if (email) setUserEmail(email);
      if (password) setUserPassword(password);
    } catch (error) {
      console.log('Error loading stored data:', error);
    } finally {
      setIsReady(true); // UI ready, hide splash
    }
  };

  // Call it once on mount
  useEffect(() => {
    loadStoredData();
  }, []);

  const saveData = async (name, email, password) => {
    try {
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);
      alert('Data saved successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async () => {
    try {
      await AsyncStorage.clear();
      setUserName('');
      setUserEmail('');
      setUserPassword('');
      alert('Data cleared successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        loadData: loadStoredData, // now this works
        saveData,
        deleteData,
        isLoggedIn,
        setIsLoggedIn,
        isReady,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
