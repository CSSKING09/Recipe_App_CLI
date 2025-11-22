// navigation/BottomTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Search from '../Screens/Search/Search';
import HomeScreen from '../Screens/Home/HomeScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import Detail from '../Screens/Detail/Detail';
import { icons } from '../assets/Icons/icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs({ setIsLoggedIn }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.home}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#FF6B00' : '#999',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.search}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#FF6B00' : '#999',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.detail}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#FF6B00' : '#999',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.user}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#FF6B00' : '#999',
              }}
            />
          ),
        }}
      >
        {props => <ProfileScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
