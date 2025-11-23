import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import StyleLogin from './LoginStyle';
import { strings } from '../../../strings/Strings';

const LoginScreen = ({ navigation, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    Alert.alert(
      'Notice',
      'Please sign up first to fill in your details. Only then the profile screen will display your information.',
      [{ text: 'OK' }],
    );
  }, []);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    setIsLoggedIn(true);
  };

  return (
    <View style={StyleLogin.container}>
      {' '}
      <Text style={StyleLogin.title}>{strings.Login.Welcomemsg}</Text>{' '}
      <Text style={StyleLogin.subtitle}>{strings.Login.msg}</Text>
      ```
      <TextInput
        placeholder="Email"
        placeholderTextColor="#bbb"
        style={StyleLogin.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#bbb"
        secureTextEntry
        style={StyleLogin.input}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleLogin} style={StyleLogin.button}>
        <Text style={StyleLogin.buttonText}>{strings.Login.LoginBtn}</Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style={StyleLogin.switchText}>
          {strings.Login.SignUpLine}
          <Text style={StyleLogin.switchTextHighlight}>
            {strings.Login.SignupBtn}
          </Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
