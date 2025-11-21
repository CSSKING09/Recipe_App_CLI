import { FlatList, View, Text } from 'react-native';
import Loader from '../Loader/Loader';
import RecipeCard from '../Recipecard/RecipeCard';
import React from 'react';

const RecipeList = ({ recipes, loading }) => {
  if (loading) return <Loader />;

  if (!recipes || recipes.length === 0) {
    return (
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text>No recipes found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={recipes}
      keyExtractor={item => item.id?.toString()}
      renderItem={({ item }) => (
        <RecipeCard
          img={{ uri: item.image }}
          name={item.title}
          time={item.readyInMinutes}
          rating={item.spoonacularScore ? item.spoonacularScore.toFixed(1) : 0}
          recipe={item}
          nestedScrollEnabled={true}
        />
      )}
    />
  );
};

export default RecipeList;
