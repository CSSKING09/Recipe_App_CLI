import { View } from 'react-native';
import React from 'react';
import Categorieslist from '../CategoriesList/Categorieslist';
import { fetchRandomRecipes, fetchRecipesByCategory } from '../../api/api';
import RecipeList from '../common/FlatLists/RecipeList';

const PopularCard = () => {
  const [loading, setLoading] = React.useState(true);
  const [recipes, setRecipes] = React.useState([]);
  const [category, setCategory] = React.useState(null);

  // Load random recipes on first load
  React.useEffect(() => {
    async function getRecipes() {
      setLoading(true);
      const data = await fetchRandomRecipes(25);
      setRecipes(data);
      setLoading(false);
    }
    getRecipes();
  }, []);

  // Fetch recipes when category changes
  React.useEffect(() => {
    if (!category) return;

    async function getCategoryRecipes() {
      setLoading(true);
      const data = await fetchRecipesByCategory(category);
      setRecipes(data);
      setLoading(false);
    }

    getCategoryRecipes();
  }, [category]);

  return (
    <View style={{ flex: 1 }}>
      <Categorieslist onCategoryPress={cat => setCategory(cat)} />
      <RecipeList recipes={recipes} loading={loading} />
    </View>
  );
};

export default PopularCard;
