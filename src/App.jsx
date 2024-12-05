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

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/cats")
      .then((res) => {
        console.log(res);
        setAnimals(res.data.reverse());
      })
      .catch((err) => console.log(err));
  }, []);

  // const handleAddAnimal = async (newAnimal) => {
  //   const newAnimals = await axios.post("http://localhost:5005/cats", newAnimal)
  //   console.log("New Animals", newAnimals)
  //   setAnimals((prevAnimals) => {
  //     const updatedAnimals = [...prevAnimals];
  //     updatedAnimals.unshift(newAnimal); // Add new animal at the start
  //     return updatedAnimals;
  //   });
  // };

  return (
    <main>
      <Navbar className="navbar" />
      <Routes>
        <Route path="/" element={<HomePage animals={animals} />} />
        <Route
          path="/add-animal"
          element={<AddAnimalPage animals={animals} setAnimals={setAnimals} />}
        />
        <Route path="/details/:cardId" element={<DetailsPage animals={animals} setAnimals={setAnimals} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/submitForm" element={<SubmitForm />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
