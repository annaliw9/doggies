import React, { useEffect, useState } from "react";
import { fetchImagesByBreed } from "../../api/dogApi";
import { useNavigate, useParams } from "react-router-dom";
import "./DogImages.css";
import { addFavorite } from "../../api/favoritesApi";

const DogImages = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const limit = 12;

  // console.log(id);

  const loadImages = async () => {
    try {
      setLoading(true);

      const data = await fetchImagesByBreed(id, limit, page);

      // console.log(data[0].breeds.length);
      console.log(data);
      console.log(data.length);

      setDogs((prev) => [...prev, ...data]);
      if (data.length < limit) setHasMore(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, [page]);

  useEffect(() => {
    setDogs([]);
    setPage(0);
    setHasMore(true);
  }, [id]);

  const onSaveHandler = async (imgId) => {
    try {
      await addFavorite(imgId);
    } catch (err) {
      console.log(err);
    }
  };

  //   const validImages = images.filter((img) => img.breeds?.[0]?.id === id);
  //   console.log(validImages);

  if (loading && dogs.length === 0) {
    return <p>Loading...</p>;
  }
  if (error) return <p>Error: {error}</p>;
  if (!dogs) return <p>Dogs not found</p>;

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <div className="card-grid">
        {dogs.map((dog) => (
          <div className="card dog-img" key={dog.id}>
            <img src={dog.url} alt="a dog" />
            <div className="card-content">
              <button className="button" onClick={() => onSaveHandler(dog.id)}>
                Save &#10084;
              </button>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <button
          className="load-more--button"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default DogImages;
