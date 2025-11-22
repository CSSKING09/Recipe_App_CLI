import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ProfileStyle from './ProfileStyle';
import { strings } from '../../strings/Strings';

const ProfileScreen = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false); // send user back to AuthStack
  };
  const user = {
    name: 'Muhammad Raffay',
    email: 'raffay@example.com',
    photo: 'https://i.pravatar.cc/300', // random profile photo
  };

  return (
    <View style={ProfileStyle.container}>
      <Image source={{ uri: user.photo }} style={ProfileStyle.profileImage} />

      <Text style={ProfileStyle.name}>{user.name}</Text>
      <Text style={ProfileStyle.email}>{user.email}</Text>

      <TouchableOpacity
        onPress={() => alert(`${strings.Profile.alert}`)}
        style={ProfileStyle.editBtn}
      >
        <Text style={ProfileStyle.editBtnText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={ProfileStyle.logoutBtn}>
        <Text style={ProfileStyle.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
