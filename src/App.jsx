import "./App.css";
import dataAnimals from "./assets/data.json"; // Data file
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SubmitForm from "./components/SubmitForm";
import AddImage from "./components/AddImage";
import { Link } from "react-router-dom";

function App() {
  return (
    <main>
      <Navbar className="navbar" />
      <Routes>
        <Route path="/" element={<HomePage animals={dataAnimals} />} />
        <Route path="/details/:cardId" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/submitForm" element={<SubmitForm />} />
        <Route path="/AddImage" element={<AddImage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Link to="/AddImage">Upload image to Cloudinary</Link>
      <Footer />
    </main>
  );
}

export default App;
