import React from 'react';
import RecipeCard from '../common/Recipecard/RecipeCard';
import { fetchRandomRecipe } from '../../api/api';

const FeaturedRecipe = () => {
  const [recipe, setRecipe] = React.useState('');

  React.useEffect(() => {
    async function getRecipe() {
      const data = await fetchRandomRecipe(1);
      setRecipe(data[0] || null);
    }
    getRecipe();
  }, []);

  if (!recipe) return null;

  return (
    <RecipeCard
      img={{ uri: recipe.image }}
      name={recipe.title}
      time={recipe.readyInMinutes}
      rating={recipe.spoonacularScore?.toFixed(1)}
      recipe={recipe}
    />
  );
};

export default FeaturedRecipe;
