// Comments added by Shayna to explain her work and what each piece of code does

// Importing the Card component to display individual animal details
import Card from "../components/Card";


// Defining the HomePage functional component and accepting 'animals' as a prop
const HomePage = ({ animals }) => {
  return (
    <div className="home-page">
      {/* Container for displaying a list of cards */}
      <div className="card-container">
        {/* 
          Iterating over the 'animals' array using the map() method.
          For each animal, render a Card component, passing the animal object as a prop.
          Using the animal's unique 'id' as the key for each Card component to help React 
          identify and manage the list efficiently.
        */}
        {animals.map((animal) => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

// Exporting the HomePage component so it can be imported and used in other files
export default HomePage;
