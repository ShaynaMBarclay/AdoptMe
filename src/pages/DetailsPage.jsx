// Comments added by Shayna to explain her work and what each piece of code does

// Import necessary modules and hooks and React Router
import { useLocation, useNavigate } from "react-router-dom";

// Define the DetailsPage functional component
function DetailsPage() {
  // Get the current location object to access state passed via navigation
  const location = useLocation();

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Destructure the `animal` object from the location's state or set it to undefined if not present
  const { animal } = location.state || {};

  // Check if no animal data was passed to this page
  if (!animal) {
    return (
      <div>
        {/* Display a message if no animal data is available */}
        <p>No animal data available.</p>

        {/* Button to navigate back to the homepage */}
        <button onClick={() => navigate("/")}>Go Back to Homepage</button>
      </div>
    );
  }

  // Render the details of the animal if data is available
  return (
    <div>
      {/* Display the animal's name */}
      <h1>{animal.name}</h1>
      {/* 
      <img
        src={animal.image}
        alt={animal.name}
        style={{ width: "300px", height: "auto" }}
      /> */}

      <p>
        <strong>Species:</strong> {animal.species}
      </p>

      <p>
        <strong>Age:</strong> {animal.age}
      </p>

      {/* Display a description of the animal */}
      <p>{animal.description}</p>

      {/* Button to navigate back to the homepage */}
      <button onClick={() => navigate("/")}>Go Back to Homepage</button>
    </div>
  );
}

// Export the DetailsPage component so it can be imported and used in other files
export default DetailsPage;
