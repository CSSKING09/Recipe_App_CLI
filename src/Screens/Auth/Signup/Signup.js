import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import StyleSignup from './SignupStyle';
import { strings } from '../../../strings/Strings';

const SignupScreen = ({ navigation, setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={StyleSignup.container}>
      <Text style={StyleSignup.title}>{strings.Signup.Title}</Text>
      <Text style={StyleSignup.subtitle}>{strings.Signup.msg}</Text>

      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#bbb"
        style={StyleSignup.input}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#bbb"
        style={StyleSignup.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#bbb"
        secureTextEntry
        style={StyleSignup.input}
      />

      <TouchableOpacity onPress={handleLogin} style={StyleSignup.button}>
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
  );
};

export default SignupScreen;
