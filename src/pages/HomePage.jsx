import { useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter"; // Import the filter component

const HomePage = ({ animals }) => {
  // State to hold filtered data
  const [filteredAnimals, setFilteredAnimals] = useState(animals);

  return (
    <div className="home-page">
      {/* Include the Filter component */}
      <Filter originalData={animals} setData={setFilteredAnimals} />

      {/* Animal cards display */}
      <div className="card-container">
        {filteredAnimals.map((animal) => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

// const location = useLocation(); // To capture navigation state

// useEffect(() => {
//   if (location.state?.refresh) {
//     fetchAnimals();
//   }
// }, [location.state]);
