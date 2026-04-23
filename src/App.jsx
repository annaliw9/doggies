import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { DogCard } from "./components/DogCard/DogCard";
import Pagination from "./components/Pagination/Pagination";
import { getPaginationRange } from "./utils/paginationUtils";
import { Route, Routes } from "react-router-dom";
import DogDetails from "./components/DogDetails/DogDetails";

function App() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(getPageFromUrl);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = "https://api.thedogapi.com/v1/breeds";

  const fetchDogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(URL, {
        headers: {
          "x-api-key": API_KEY,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch dog image");
      }

      const data = await res.json();
      setDogs(data);
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", currentPage);
    window.history.pushState({}, "", `?${params.toString()}`);
  }, [currentPage]);

  if (loading) return <p>Dogs Loading</p>;
  if (error) return <p>Error: {error} </p>;

  //PAGINATION
  const itemsPerPage = 8;
  const indexOfLastDog = currentPage * itemsPerPage;
  const indexOfFirstDog = indexOfLastDog - itemsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
  const totalPages = Math.ceil(dogs.length / itemsPerPage);
  const paginationRange = getPaginationRange(currentPage, totalPages);

  function getPageFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("page")) || 1;
  }

  return (
    <div className="app-layout">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="card-grid">
                {currentDogs.map((dog) => (
                  <DogCard key={dog.id} dog={dog} />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                range={paginationRange}
                onPageChange={setCurrentPage}
              />
            </>
          }
        ></Route>
        <Route path="/dog/:id" element={<DogDetails dogs={dogs} />}></Route>
        <Route path="/favorites"></Route>{" "}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
