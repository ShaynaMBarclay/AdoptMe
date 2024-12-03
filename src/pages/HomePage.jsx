import Card from "../components/Card";

const HomePage = ({ animals }) => {
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
