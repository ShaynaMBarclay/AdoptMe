// Comments added by Shayna to explain her work and what each piece of code does

// Import necessary modules and hooks from React and React Router
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SubmitForm from "../components/SubmitForm"; // Import SubmitForm
const test =
  "https://res.cloudinary.com/dmvawq2ak/image/upload/v1732977208/simona1_meam0a.jpg";
// Define the DetailsPage functional component
function DetailsPage() {
  // state to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

      {/* Display the animal's image with a fixed width */}
      <img
        src={test}
        alt={animal.name}
        style={{ width: "300px", height: "auto" }}
      />

      {/* Display the animal's species */}
      <p>
        <strong>Species:</strong> {animal.species}
      </p>

      {/* Display the animal's age */}
      <p>
        <strong>Age:</strong> {animal.age}
      </p>

      {/* Display a description of the animal */}
      <p>{animal.description}</p>

      {/* Button to open the modal */}
      <button className="details-btn" onClick={openModal}>
        Adopt Me 🦝
      </button>

      {/* Modal Logic */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Submit Form</h2>
            <SubmitForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* Button to navigate back to the homepage 
      <Link to="/submitForm">
        <button className="details-btn">
          Adopt Me<h1>🦝</h1>
        </button>
      </Link>
    </div>
  );
}
*/
}

//Export the DetailsPage component so it can be imported and used in other files
export default DetailsPage;
