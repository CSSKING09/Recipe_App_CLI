import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View>
      <ActivityIndicator size={100} color="black" />
    </View>
  );
};

export default Loader;
