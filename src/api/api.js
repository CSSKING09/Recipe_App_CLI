const API_KEY = 'b1701fa514124c2693e499c62a9ae0b8';
const BASE_URL = 'https://api.spoonacular.com/recipes';

//c0e59dc2b8e74504b589e60738aff935
//c59bd711a50b4f2d894acf26383dc07a
//73c436e3303745a4926a479f41d42899
//b1701fa514124c2693e499c62a9ae0b8
//66e7fa7ad92a4e76a97139e2c2ab8d92 not used

export const fetchRandomRecipe = async (number = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/random?number=${number}&apiKey=${API_KEY}`,
    );
    const data = await response.json();
    return data.recipes || [];
  } catch (error) {
    console.log('Error fetching random recipes:', error);
    return [];
  }
};

export const fetchRandomRecipes = async (number = 25) => {
  try {
    const response = await fetch(
      `${BASE_URL}/random?number=${number}&apiKey=${API_KEY}`,
    );
    const data = await response.json();
    return data.recipes || [];
  } catch (error) {
    console.log('Error fetching random recipes:', error);
    return [];
  }
};

export const fetchRecipesByCategory = async (category, number = 25) => {
  try {
    const response = await fetch(
      `${BASE_URL}/random?number=${number}&tags=${category}&apiKey=${API_KEY}`,
    );
    const data = await response.json();
    return data.recipes || [];
  } catch (error) {
    console.log('Error fetching category recipes:', error);
    return [];
  }
};

export const searchRecipes = async (query, number = 25) => {
  try {
    const response = await fetch(
      `${BASE_URL}/complexSearch?query=${query}&number=${number}&addRecipeInformation=true&apiKey=${API_KEY}`,
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.log('Error searching recipes:', error);
    return [];
  }
};

export const fetchRecipeById = async id => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);

    const text = await res.text();
    console.log('Raw recipe response:', text);

    const data = JSON.parse(text);
    return data;
  } catch (err) {
    console.log('Error fetching recipe by ID:', err);
    return null;
  }
};
