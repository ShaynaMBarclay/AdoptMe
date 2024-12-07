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
import 'react-chatbot-kit/build/main.css'
import { API_URL } from "../src/config/apiConfig";


function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios
    .get(`${API_URL}/posts`)
      .then((res) => {
        console.log(res);
        setAnimals(res.data.reverse());
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main>
        <Navbar className="navbar" />
        <Routes>
          <Route path="/" element={<HomePage animals={animals} />} />
          <Route
            path="/add-animal"
            element={
              <AddAnimalPage animals={animals} setAnimals={setAnimals} />
            }
          />
          <Route
            path="/details/:cardId"
            element={<DetailsPage animals={animals} setAnimals={setAnimals} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/submitForm" element={<SubmitForm />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
