import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  StatusBar,
} from 'react-native';
import StyleSignup from './SignupStyle';
import { strings } from '../../../strings/Strings';
import { UserContext } from '../../../Context/UserContext';

const SignupScreen = ({ navigation }) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const {
    setUserName,
    setUserEmail,
    setUserPassword,
    saveData,
    setIsLoggedIn,
  } = useContext(UserContext);

  const handleSignup = async () => {
    if (!nameInput.trim() || !emailInput.trim() || !passwordInput.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Update context states
    setUserName(nameInput);
    setUserEmail(emailInput);
    setUserPassword(passwordInput);

    // Mark user as logged in
    setIsLoggedIn(true);

    // Save to AsyncStorage
    await saveData(nameInput, emailInput, passwordInput);
  };

  return (
    <>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        translucent={false}
      />
      <View style={StyleSignup.container}>
        <Text style={StyleSignup.title}>{strings.Signup.Title}</Text>
        <Text style={StyleSignup.subtitle}>{strings.Signup.msg}</Text>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#bbb"
          style={StyleSignup.input}
          value={nameInput}
          onChangeText={setNameInput}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#bbb"
          style={StyleSignup.input}
          value={emailInput}
          onChangeText={setEmailInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#bbb"
          secureTextEntry
          style={StyleSignup.input}
          value={passwordInput}
          onChangeText={setPasswordInput}
        />
        <TouchableOpacity onPress={handleSignup} style={StyleSignup.button}>
          <Text style={StyleSignup.buttonText}>{strings.Signup.SignUpBtn}</Text>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={StyleSignup.switchText}>
            {strings.Signup.LoginText}
            <Text style={StyleSignup.switchTextHighlight}>
              {strings.Signup.LoginBtn}
            </Text>
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default SignupScreen;
