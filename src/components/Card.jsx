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
    // 'animal.id' is a placeholder in the URL structure
    navigate(`/details/${animal.id}`, { state: { animal } });
  };

  return (
    <div
      className="card" // Assigning a CSS class for styling
      onClick={handleClick} // Adding a click event listener to the card
      style={{ cursor: "pointer" }} // Changing the cursor to indicate clickability
    >
      {animal.images && animal.images.length > 0 && (
        <img
          src={animal.images[0]}
          alt={`Photo of ${animal.name}`}
          className="card-img"
        />
      )}
      <h3>{animal.name}</h3>
      <p>Species: {animal.species}</p>
      <p>Age: {animal.age}</p>
    </div>
  );
};

// Exporting the Card component for use in other parts of the application
export default Card;
