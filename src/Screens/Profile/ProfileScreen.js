import React, { useContext, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import ProfileStyle from './ProfileStyle';
import { strings } from '../../strings/Strings';
import { UserContext } from '../../Context/UserContext';
import { icons } from '../../assets/Icons/icons';

const ProfileScreen = () => {
  const {
    userName,
    userEmail,
    userPassword,
    loadData,
    deleteData,
    setIsLoggedIn,
  } = useContext(UserContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    deleteData();
  };

  const handleLoadData = () => {
    loadData();
  };
  const handleDeleteData = () => {
    deleteData();
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
    <>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        translucent={false}
      />
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

            <Text style={ProfileStyle.name}>
              {strings.Profile.name}
              {userName}
            </Text>
            <Text style={ProfileStyle.email}>
              {strings.Profile.email}
              {userEmail}
            </Text>
            <Text style={ProfileStyle.email}>
              {strings.Profile.password}
              {userPassword}
            </Text>
            <TouchableOpacity
              onPress={handleLoadData}
              style={ProfileStyle.editBtn}
            >
              <Text style={ProfileStyle.editBtnText}>
                {strings.Profile.loadbtn}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleLogout}
              style={ProfileStyle.logoutBtn}
            >
              <Text style={ProfileStyle.logoutText}>
                {strings.Profile.Logoutbtn}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </>
  );
};

export default ProfileScreen;
