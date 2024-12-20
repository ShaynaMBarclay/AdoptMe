import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SubmitForm from "../components/SubmitForm";
import axios from "axios";

function DetailsPage({animals, setAnimals}) {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isEditing, setIsEditing] = useState(false);
  const [editedAnimal, setEditedAnimal] = useState({});// state to control the modal visibility
  const location = useLocation(); // Get the current location object to access state passed via navigation
  const navigate = useNavigate(); // Hook for programmatic navigation
  const { animal } = location.state || {}; // Destructure the `animal` object from the location's state or set it to undefined if not present
  const initialImage = animal?.images ? animal.images[0] : null;
  const [selectedImage, setSelectedImage] = useState(initialImage);
  
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

  const handleDelete = async () => {
    try {
      await axios.delete(`https://adoptme-backend.vercel.app/cats/${animal.id}`);
      alert("Animal deleted successfully.");
      const filteredAnimals = animals.filter((animalOne) => {
        if (animalOne.id == editedAnimal.id){
          return false 
        } else {return true}
      })
      setAnimals(filteredAnimals);

        //signal refresh on the homepage (I learned this from google)
      navigate("/", { state: { refresh: true } });
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete. Please try again.");
    }
    };

    const handleEdit = () => {
      setEditedAnimal(animal);
      setIsEditing(true);
    };
    const handleSave = async () => {
      try {
        console.log(editedAnimal)
        await axios.put(`https://adoptme-backend.vercel.app/cats/${animal.id}`, editedAnimal);
        alert("Animal details updated successfully.");
        setIsEditing(false);
        const mappedAnimals = animals.map((animalOne) => {
          if (animalOne.id == editedAnimal.id){
            return editedAnimal 
          } else {return animalOne}
        })
        setAnimals(mappedAnimals);


        navigate("/", { state: { animal: editedAnimal } }); // redirect to refresh the details
      } catch (error) {
        console.error("Update failed:", error);
        alert("Failed to update animal details. Please try again.");
      }
  }
  return (
     <div className="details-page">
      <h1>{animal.name}</h1>
      <div className="details-container">
      <div className="image-container">
      {/* Display the large version of the selected image */}
      {selectedImage && (
        <img
          src={selectedImage}
          alt={`${animal.name} large view`}
          style={{ height: "500px" }}
          className="animal-image"
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
      </div>
      <div className="details">
      {!isEditing ? (
        <>
      <p>
        <strong>Species:</strong> {animal.species}
      </p>
      <p>
        <strong>Age:</strong> {animal.age}
      </p>
      <p>
        <strong>Vaccinated:</strong> {animal.vaccination ? "Yes" : "No"}
      </p>
      <p>
        <strong>Sterilized:</strong> {animal.sterilisation ? "Yes" : "No"}
      </p>
      <p>
        <strong>Location:</strong> {animal.location}
          </p>
          <p>{animal.description}</p>

      </>
      ) : (
        <>
        <input
       type="text"
       placeholder="Name"
       value={editedAnimal.name || ""}
       onChange={(e) =>
         setEditedAnimal({ ...editedAnimal, name: e.target.value })
       }
     />
     <input
       type="text"
       placeholder="Description"
       value={editedAnimal.description || ""}
       onChange={(e) =>
         setEditedAnimal({ ...editedAnimal, description: e.target.value })
       }
     />
     <input
       type="number"
       placeholder="Age"
       value={editedAnimal.age || ""}
       onChange={(e) =>
         setEditedAnimal({ ...editedAnimal, age: e.target.value })
       }
     />
      <input
      type="text"
      placeholder="Location"
      value={editedAnimal.location || ""}
       onChange={(e) =>
      setEditedAnimal({ ...editedAnimal, location: e.target.value })
       }
     />

     <label>
       <input
         type="checkbox"
         checked={editedAnimal.vaccination || false}
         onChange={(e) =>
           setEditedAnimal({
             ...editedAnimal,
             vaccination: e.target.checked,
           })
         }
       />
       Vaccinated
     </label>
     <label>
       <input
         type="checkbox"
         checked={editedAnimal.sterilisation || false}
         onChange={(e) =>
           setEditedAnimal({
             ...editedAnimal,
             sterilisation: e.target.checked,
           })
         }
       />
       Sterilized
     </label>
   </>
 )} 

      <button className="details-btn" onClick={openModal}>
        Adopt {animal.name} 🦝
      </button>

      {!isEditing ? (
          <button className="edit-btn" onClick={handleEdit}>Edit</button>
      ) : (
        <>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleDelete} style={{ color: "red" }}>
      Delete
    </button>
    </>
      )}
      </div>
      </div>

      {/* Modal Logic */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Submit Form</h2>
            <SubmitForm closeModal={closeModal} naviagate={navigate} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsPage;



