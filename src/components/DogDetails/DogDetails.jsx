import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBreedById } from "../../api/dogApi";
import "./DogDetails.css";

const DogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDog = async () => {
      try {
        setLoading(true);

        const dog = await fetchBreedById(id);
        console.log(dog);

        setDog(dog);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDog();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!dog) return <p>Dog not found</p>;

  const parser = (text) => {
    if (!text) return null;

    const maleMatch = text.match(/Male:\s*([^;]+)/);
    const femaleMatch = text.match(/Female:\s*([^;]+)/);

    const isGendered = maleMatch || femaleMatch;

    return {
      male: maleMatch?.[1] || null,
      female: femaleMatch?.[1] || null,
      range: !isGendered ? text : null,
    };
  };

  const height = parser(dog.height.metric);
  const weight = parser(dog.weight.metric);

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <div className="details-hero">
        {/* <img src={dog.image?.url || "Not image found"} alt={dog.name} /> */}

        <div className="details-info">
          <h1>{dog.name}</h1>
          <span className="badge">{dog.breed_group}</span>

          <div className="quick-stats">
            <div>
              <strong>Height</strong>
              {height?.range ? (
                <p>{height.range}cm</p>
              ) : (
                <>
                  {height?.male && <p>Male: {height.male}cm</p>}
                  {height?.female && <p>Female: {height.female}cm</p>}
                </>
              )}
            </div>

            <div>
              <strong>Weight</strong>
              {weight?.range ? (
                <p>{weight.range}kg</p>
              ) : (
                <>
                  {weight?.male && <p>Male: {weight.male}kg</p>}
                  {weight?.female && <p>Female: {weight.female}kg</p>}
                </>
              )}
            </div>

            <div>
              <strong>Life Span</strong>
              <p>{dog.life_span} Years</p>
            </div>
          </div>

          <div className="details-description">{dog.description}</div>

          <button
            className="adopt-btn"
            onClick={() => navigate(`/breed/${id}/images`)}
          >
            Explore Dogs 🐶
          </button>
        </div>
      </div>

      <div className="details-sections">
        <section className="card-section">
          <h2>Personality</h2>
          <p>{dog.temperament}</p>
        </section>

        <section className="card-section">
          <h2>History</h2>
          <p>
            <strong>Origin:</strong> {dog.origin}
          </p>
          <p>{dog.history}</p>
        </section>
      </div>
    </div>
  );
};

export default DogDetails;
