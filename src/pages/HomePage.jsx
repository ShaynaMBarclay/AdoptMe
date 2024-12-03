import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const HomePage = () => {
  const [animals, setAnimals] = useState([]); // State for the list of animals
  const location = useLocation(); // To capture navigation state

  // Fetch animals from the server
  const fetchAnimals = async () => {
    try {
      const response = await axios.get("http://localhost:5005/cats");
      setAnimals(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Failed to fetch animals:", error);
    }
  };

  useEffect(() => {
    fetchAnimals(); // Initial load
  }, []);

  // Refresh the animals list when navigating with a refresh signal
  useEffect(() => {
    if (location.state?.refresh) {
      fetchAnimals();
    }
  }, [location.state]);

  return (
    <div className="home-page">
      <div className="card-container">
        {animals.map((animal) => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
