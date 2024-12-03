import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SubmitForm from "../components/SubmitForm";

function DetailsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // state to control the modal visibility
  const location = useLocation(); // Get the current location object to access state passed via navigation
  const navigate = useNavigate(); // Hook for programmatic navigation
  const { animal } = location.state || {}; // Destructure the `animal` object from the location's state or set it to undefined if not present
  const initialImage = animal?.images ? animal.images[0] : null;
  const [selectedImage, setSelectedImage] = useState(initialImage);
  // const [selectedImage, setSelectedImage] = useState(animal?.images[0]); // State to track the selected image from the gallery ;'?' - to check if object exicts

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
      {/* Display the large version of the selected image */}
      {selectedImage && (
        <img
          src={selectedImage}
          alt={`${animal.name} large view`}
          style={{ height: "500px" }}
        />
      )}
      <div className="thumbnails">
        {animal.images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`${animal.name} thumbnail ${index + 1}`}
            className={`thumbnail ${selectedImage === imgSrc ? "active" : ""}`}
            onClick={() => setSelectedImage(imgSrc)} // Update selected image
            style={{ cursor: "pointer", width: "100px", margin: "5px" }}
          />
        ))}
      </div>
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

export default DetailsPage;

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
