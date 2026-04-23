import { useNavigate, useParams } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({ dogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dog = dogs.find((d) => d.id === id);
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
        <img src={dog.image?.url} alt={dog.name} />

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

          <button className="adopt-btn">Adopt Me 🐶</button>
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
