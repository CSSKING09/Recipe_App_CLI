import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import StyleLogin from './LoginStyle';
import { strings } from '../../../strings/Strings';

const LoginScreen = ({ navigation, setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <View style={StyleLogin.container}>
      <Text style={StyleLogin.title}>{strings.Login.Welcomemsg}</Text>
      <Text style={StyleLogin.subtitle}>{strings.Login.msg}</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#bbb"
        style={StyleLogin.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#bbb"
        secureTextEntry
        style={StyleLogin.input}
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
