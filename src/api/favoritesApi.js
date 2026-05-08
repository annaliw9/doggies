const BASE_URL = "https://api.thedogapi.com/v1";
const API_KEY = import.meta.env.VITE_API_KEY;

export const getFavorites = async () => {
  const res = await fetch(`${BASE_URL}/favourites`, {
    headers: { "x-api-key": API_KEY },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch favorites");
  }

  return res.json();
};

export const addFavorite = async (imageId) => {
  await fetch(`${BASE_URL}/favourites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
    body: JSON.stringify({ image_id: imageId }),
  });
};

export const removeFavorite = async (favId) => {
  await fetch(`${BASE_URL}/favourites/${favId}`, {
    method: "DELETE",
    headers: { "x-api-key": API_KEY },
  });
};
