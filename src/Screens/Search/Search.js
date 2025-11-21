import React, { useState } from 'react';
import {
  StatusBar,
  Keyboard,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import { searchRecipes, fetchRecipeById } from '../../api/api';
import RecipeList from '../../components/common/FlatLists/RecipeList';
import Button from '../../components/common/Buttons/Button';

const Search = () => {
  const [query, setQuery] = useState(''); // typed text
  const [recipes, setRecipes] = useState([]); // search results
  const [loading, setLoading] = useState(false); // loader

  // Search function called only on button press
  const handleSearch = async () => {
    if (!query.trim()) return setRecipes([]);

    setLoading(true);
    try {
      console.log('Searching recipes for query:', query.trim());

      const results = await searchRecipes(query.trim());
      console.log('Search results:', results); // Check basic search results

      // fetch full details for each recipe
      const detailedResults = await Promise.all(
        results.map(async r => {
          const fullRecipe = await fetchRecipeById(r.id);
          console.log('Fetched full recipe:', fullRecipe?.title); // Check each full recipe
          return fullRecipe;
        }),
      );

      console.log('All detailed recipes:', detailedResults); // Check all full recipes
      setRecipes(detailedResults);
    } catch (err) {
      console.log('Search API error:', err);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
    setQuery('');
  };

  return (
    <>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        translucent={false}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ flex: 1, padding: 10 }}>
            {/* Search input */}
            <SearchBar
              value={query}
              onChangeText={text => setQuery(text)} // only update state
            />

            {/* Search button */}
            <Button
              title="Search"
              onPress={handleSearch} // call search with latest query
              style={{ marginVertical: 10 }}
            />

            {/* Recipe results */}
            <RecipeList recipes={recipes} loading={loading} />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

export default Search;
