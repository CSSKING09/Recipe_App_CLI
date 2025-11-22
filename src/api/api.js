const BASE_URL = 'https://api.spoonacular.com/recipes';

// List of API keys
const API_KEYS = [
  'c0e59dc2b8e74504b589e60738aff935',
  'c59bd711a50b4f2d894acf26383dc07a',
  '73c436e3303745a4926a479f41d42899',
  'b1701fa514124c2693e499c62a9ae0b8',
  '66e7fa7ad92a4e76a97139e2c2ab8d92',
];

let currentKeyIndex = 0;
const keyStatus = API_KEYS.map(() => ({ blockedUntil: 0 }));

// Helper: get current valid key
const getApiKey = () => {
  const now = Date.now();

  for (let i = 0; i < API_KEYS.length; i++) {
    const index = (currentKeyIndex + i) % API_KEYS.length;
    if (keyStatus[index].blockedUntil < now) {
      currentKeyIndex = index;
      return API_KEYS[index];
    }
  }

  // All keys are blocked
  return null;
};

// Rotate and block a key temporarily (e.g., 1 hour)
const blockCurrentKey = () => {
  keyStatus[currentKeyIndex].blockedUntil = Date.now() + 60 * 60 * 1000; // 1 hour
  console.log('Blocked key temporarily:', API_KEYS[currentKeyIndex]);
};

// Generic fetch with automatic key rotation
const fetchWithKey = async url => {
  for (let i = 0; i < API_KEYS.length; i++) {
    const key = getApiKey();
    if (!key) {
      console.log('All API keys are temporarily blocked.');
      return null;
    }

    try {
      const response = await fetch(url.replace('API_KEY', key));
      const data = await response.json();

      // Spoonacular returns code 402 when quota exceeded
      if (data.code === 402 || data.status === 'failure') {
        console.log('API key quota exceeded, rotating key:', key);
        blockCurrentKey();
        continue;
      }

      return data;
    } catch (err) {
      console.log('API fetch error:', err, 'with key:', key);
      blockCurrentKey();
    }
  }

  console.log('All API keys failed.');
  return null;
};

// API functions
export const fetchRandomRecipe = async (number = 1) => {
  const data = await fetchWithKey(
    `${BASE_URL}/random?number=${number}&apiKey=API_KEY`,
  );
  return data?.recipes || [];
};

export const fetchRandomRecipes = async (number = 25) => {
  const data = await fetchWithKey(
    `${BASE_URL}/random?number=${number}&apiKey=API_KEY`,
  );
  return data?.recipes || [];
};

export const fetchRecipesByCategory = async (category, number = 25) => {
  const data = await fetchWithKey(
    `${BASE_URL}/random?number=${number}&tags=${category}&apiKey=API_KEY`,
  );
  return data?.recipes || [];
};

export const searchRecipes = async (query, number = 25) => {
  const data = await fetchWithKey(
    `${BASE_URL}/complexSearch?query=${query}&number=${number}&addRecipeInformation=true&apiKey=API_KEY`,
  );
  return data?.results || [];
};

export const fetchRecipeById = async id => {
  const data = await fetchWithKey(
    `${BASE_URL}/${id}/information?apiKey=API_KEY`,
  );
  return data || null;
};
