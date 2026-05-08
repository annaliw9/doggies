import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DogCard from "../../components/DogCard/DogCard";
import Pagination from "../../components/Pagination/Pagination";
import { getPaginationRange } from "../../utils/paginationUtils";
import { fetchBreeds } from "../../api/dogApi";

function Home() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        setLoading(true);
        const data = await fetchBreeds();
        console.log(data);
        console.log(data.length);
        setDogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const indexOfLastDog = currentPage * itemsPerPage;
  const indexOfFirstDog = indexOfLastDog - itemsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  const totalPages = Math.ceil(dogs.length / itemsPerPage);

  const paginationRange = getPaginationRange(currentPage, totalPages);

  return (
    <div className="container">
      <div className="card-grid">
        {currentDogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        range={paginationRange}
        onPageChange={(page) => setSearchParams({ page })}
      />
    </div>
  );
}

export default Home;
