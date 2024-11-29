// Comments added by Shayna to explain her work and what each piece of code does

// Importing the useNavigate hook from React Router for programmatic navigation
import { useNavigate } from "react-router-dom";

// Defining the Card functional component and accepting 'animal' as a prop
const Card = ({ animal }) => {
  // Initializing the navigate function for programmatic routing
  const navigate = useNavigate();

  // Function to handle the card click event
  const handleClick = () => {
    // Navigate to the 'details' page, passing the 'animal' object as state
    // ':cardId' is a placeholder in the URL structure, which can be used later for dynamic routing
    navigate("/details/:cardId", { state: { animal } });
  };

  return (
    <div
      className="card" // Assigning a CSS class for styling
      onClick={handleClick} // Adding a click event listener to the card
      style={{ cursor: "pointer" }} // Changing the cursor to indicate clickability
    >
      {/* Display the animal's image */}
      <img src={animal.image} alt={animal.name} />

      {/* Display the animal's name */}
      <h3>{animal.name}</h3>

      {/* Display the animal's species */}
      <p>Species: {animal.species}</p>

      {/* Display the animal's age */}
      <p>Age: {animal.age}</p>

      {/* Display the animal's description */}
      <p>{animal.description}</p>
    </div>
  );
};

// Exporting the Card component for use in other parts of the application
export default Card;
