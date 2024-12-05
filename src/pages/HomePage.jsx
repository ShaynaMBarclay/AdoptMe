import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const HomePage = ({ animals }) => {
  const location = useLocation(); // To capture navigation state

  // useEffect(() => {
  //   if (location.state?.refresh) {
  //     fetchAnimals();
  //   }
  // }, [location.state]);

  return (
    <div className="home-page">
      <div className="card-container">
        {animals &&
          animals.map((animal) => <Card key={animal.id} animal={animal} />)}
      </div>
    </div>
  );
};

export default HomePage;
