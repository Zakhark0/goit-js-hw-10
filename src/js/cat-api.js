const API_KEY = `live_9kaNTiM1E7C27JBRH2l7IXgcPi1pTShG3PL8HINXzZy2hDBsGpgWAOi2X7mQ0vmr`;
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

function fetchBreeds() {
  return fetch(BASE_URL, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
export { fetchBreeds, fetchCatByBreed };
