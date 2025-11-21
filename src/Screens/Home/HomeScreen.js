import {
  StatusBar,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import HomeStyle from './HomeStyle';
import Header from '../../components/Header/Header';
import { icons } from '../../assets/Icons/icons';
import { strings } from '../../strings/Strings';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import Title from '../../components/common/Title/Title';
import FeatureRecipe from '../../components/FeaturedRecipe/FeaturedRecipe';
import PopularCard from '../../components/PopularRecipes/PopularCard';

const HomeScreen = () => {
  return (
    <>
      {/* Status Bar */}
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        translucent={false}
      />

      {/* Safe Area */}
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Tap anywhere to dismiss keyboard */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            {/* Scroll Content */}
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <Header title={strings.appName} icon={icons.soup} />

              <SearchBar />

              <Title text={strings.Featured} />
              <FeatureRecipe />

              <Title text={strings.Popular} />
              <PopularCard />
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
