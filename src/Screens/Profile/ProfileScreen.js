import React, { useContext, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import ProfileStyle from './ProfileStyle';
import { strings } from '../../strings/Strings';
import { UserContext } from '../../Context/UserContext';
import { icons } from '../../assets/Icons/icons';

const ProfileScreen = ({ setIsLoggedIn }) => {
  const { userName, userEmail, userPassword } = useContext(UserContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Animation refs
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={ProfileStyle.container}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
          width: '90%',
        }}
      >
        <View style={ProfileStyle.profileCard}>
          <View style={ProfileStyle.profileImageWrapper}>
            <Image source={icons.soup} style={ProfileStyle.profileImage} />
          </View>

          <Text style={ProfileStyle.name}>{userName}</Text>
          <Text style={ProfileStyle.email}>{userEmail}</Text>
          <Text style={ProfileStyle.email}>{userPassword}</Text>
          <TouchableOpacity
            onPress={() => alert(`${strings.Profile.alert}`)}
            style={ProfileStyle.editBtn}
          >
            <Text style={ProfileStyle.editBtnText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogout}
            style={ProfileStyle.logoutBtn}
          >
            <Text style={ProfileStyle.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default ProfileScreen;
