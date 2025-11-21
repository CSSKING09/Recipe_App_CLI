import { Image, Text, View, Pressable } from 'react-native';
import { RecipeCardStyle } from './RecipeCardStyle';
import React from 'react';
import { strings } from '../../../strings/Strings';
import { useNavigation } from '@react-navigation/native';
const RecipeCard = ({ name, img, time, rating, recipe }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Detail', { recipe })}>
      <View style={RecipeCardStyle.container}>
        <Image style={RecipeCardStyle.img} source={img} />
        <View style={RecipeCardStyle.TextContainer}>
          <Text style={RecipeCardStyle.Name}>{name}</Text>
          <View>
            <Text style={RecipeCardStyle.Time}>
              {time}
              {strings.RecipeCard.Time}
            </Text>
            <Text style={RecipeCardStyle.Time}>
              {rating}
              {strings.RecipeCard.Stars}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default RecipeCard;
