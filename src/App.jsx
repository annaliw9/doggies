import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import DogDetails from "./components/DogDetails/DogDetails";
import Favorites from "./Pages/Favorites/Favorites";
import Home from "./Pages/Home/Home";
import DogImages from "./Pages/DogImages/DogImages";

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breed/:id" element={<DogDetails />} />
          <Route path="/breed/:id/images" element={<DogImages />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
