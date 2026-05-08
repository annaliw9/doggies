const BASE_URL = "https://api.thedogapi.com/v1";
const API_KEY = import.meta.env.VITE_API_KEY;

//Helper (removes repetition)
const request = async (url) => {
  const res = await fetch(url, {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  if (!res.ok) {
    throw new Error("API request failed");
  }

  return res.json();
};

//GET ALL BREEDS
export const fetchBreeds = () => {
  return request(`${BASE_URL}/breeds`);
};

//GET SINGLE BREED
export const fetchBreedById = async (id) => {
  return request(`${BASE_URL}/breeds/${id}`);
};

//GET IMAGES
export const fetchImagesByBreed = async (id, limit, page) => {
  return request(
    `${BASE_URL}/images/search?breed_ids=${id}&limit=${limit}&page=${page}`,
  );
};
