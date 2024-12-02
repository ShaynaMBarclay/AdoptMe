import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SubmitForm from "../components/SubmitForm";

function DetailsPage() {
  // state to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Get the current location object to access state passed via navigation
  const location = useLocation();

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Destructure the `animal` object from the location's state or set it to undefined if not present
  const { animal } = location.state || {};

  if (!animal) {
    return (
      <div>
        <p>No animal data available.</p>
        <button onClick={() => navigate("/")}>Go Back to Homepage</button>
      </div>
    );
  }

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>{animal.name}</h1>
      <img
        src={animal.images[0]}
        alt={animal.name}
        style={{ height: "500px" }}
      />
      <p>
        <strong>Species:</strong> {animal.species}
      </p>
      <p>
        <strong>Age:</strong> {animal.age}
      </p>

      <p>{animal.description}</p>

      <button className="details-btn" onClick={openModal}>
        Adopt {animal.name} 🦝
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
export default DetailsPage;
