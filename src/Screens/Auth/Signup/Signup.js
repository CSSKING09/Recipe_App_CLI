import React, { useContext } from 'react';
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
import { UserContext } from '../../../Context/UserContext';

const SignupScreen = ({ navigation, setIsLoggedIn }) => {
  const {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
  } = useContext(UserContext);

  const handleSignup = () => {
    if (!userName.trim() || !userEmail.trim() || !userPassword.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
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
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#bbb"
        style={StyleSignup.input}
        value={userEmail}
        onChangeText={setUserEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#bbb"
        secureTextEntry
        style={StyleSignup.input}
        value={userPassword}
        onChangeText={setUserPassword}
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
