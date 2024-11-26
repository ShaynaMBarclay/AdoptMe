import "./App.css";
import dataAnimals from "./assets/data.json";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:cardId" element={<DetailsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
