import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import AddAnimalPage from "./pages/AddAnimalPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SubmitForm from "./components/SubmitForm";
import { useEffect, useState } from "react";
import axios from "axios";
import AddImage from "./components/AddImage";

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/cats")
      .then((res) => {
        console.log(res);
        setAnimals(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddAnimal = (newAnimal) => {
    setAnimals((prevAnimals) => [...prevAnimals, newAnimal]); // Add new animal
  };

  return (
    <main>
      <Navbar className="navbar" />
      <Routes>
        <Route path="/" element={<HomePage animals={animals} />} />
        <Route
          path="/add-animal"
          element={<AddAnimalPage onAdd={handleAddAnimal} />}
        />
        <Route path="/details/:cardId" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/submitForm" element={<SubmitForm />} />
        <Route path="/AddImage" element={<AddImage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
