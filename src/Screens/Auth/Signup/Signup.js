import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import StyleSignup from './SignupStyle';
import { strings } from '../../../strings/Strings';

const SignupScreen = ({ navigation, setIsLoggedIn }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setIsLoggedIn(true);
  };

  return (
    <View style={StyleSignup.container}>
      {' '}
      <Text style={StyleSignup.title}>{strings.Signup.Title}</Text>{' '}
      <Text style={StyleSignup.subtitle}>{strings.Signup.msg}</Text>
      ```
      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#bbb"
        style={StyleSignup.input}
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#bbb"
        style={StyleSignup.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#bbb"
        secureTextEntry
        style={StyleSignup.input}
        value={password}
        onChangeText={setPassword}
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
  );
};

export default SignupScreen;
