import { useEffect, useState } from "react";
import { getFavorites, removeFavorite } from "../../api/favoritesApi";

import React from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        setLoading(true);
        const data = await getFavorites();
        setFavorites(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadFavorites();
  }, []);

  const handleRemove = async (id) => {
    await removeFavorite(id);
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!favorites) return <p>Favorites not found</p>;

  return (
    <div className="container">
      <h1>My Favorites ❤️</h1>
      <div className="card-grid">
        {favorites.map((fav) => (
          <div className="card" key={fav.id}>
            <img src={fav.image.url} alt="dog" />
            <div className="card-content">
              <button className="button" onClick={() => handleRemove(fav.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
