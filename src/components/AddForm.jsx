import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";  
import axios from "axios";

export const AddForm = ({ animals, setAnimals }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [species, setSpecies] = useState("");
  const [images, setImages] = useState(["", "", "", "", ""]);
  const [vaccination, setVaccination] = useState(false);
  const [sterilisation, setSterilisation] = useState(false);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams(); 

  useEffect(() => {
    if (id) {
      // Fetch the animal data if we are in edit mode
      const animalToEdit = animals.find((animal) => animal.id === id);
      if (animalToEdit) {
        setName(animalToEdit.name);
        setDescription(animalToEdit.description);
        setAge(animalToEdit.age);
        setSpecies(animalToEdit.species);
        setPetLocation(animalToEdit.petLocation || "");  
        setVaccination(animalToEdit.vaccination);
        setSterilisation(animalToEdit.sterilisation);
        setImages(animalToEdit.images);
      }
    }
  }, [id, animals]);

  // Handle image URL updates
  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const newAnimal = {
      name,
      description,
      age: parseFloat(age),
      species,
      location,
      vaccination,
      sterilisation,
      images: images.filter((img) => img.trim() !== ""), // Filter out empty URLs
    };

    try {
      if (id) {
        // If we're editing, send a PUT request
        const response = await axios.put(
          `https://adoptme-backend.vercel.app/cats/${id}`,
          newAnimal
        );
        setAnimals(animals.map((animal) => (animal.id === id ? response.data : animal)));
      } else {
        // If we're adding a new animal, send a POST request
        const response = await axios.post(
          "https://adoptme-backend.vercel.app/cats",
          newAnimal
        );
        setAnimals([response.data, ...animals]);
      }
      navigate("/"); // Redirect after submit
      resetForm(); // Reset the form fields
    } catch (error) {
      setError("Failed to save the animal. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Handle animal deletion
  const handleDelete = async () => {
    if (id) {
      try {
        await axios.delete(`https://adoptme-backend.vercel.app/cats/${id}`);
        setAnimals(animals.filter((animal) => animal.id !== id)); // Remove from state
        navigate("/"); // Redirect after deletion
      } catch (error) {
        console.error("Failed to delete the animal:", error);
        setError("Failed to delete the animal. Please try again.");
      }
    }
  };

  // Reset form fields
  const resetForm = () => {
    setName("");
    setDescription("");
    setAge("");
    setSpecies("");
    setLocation("");
    setImages(["", "", "", "", ""]);
    setVaccination(false);
    setSterilisation(false);
  };

  return (
    <div className="form-container">
      <h2>{id ? "Edit Animal" : "Add Animal"}</h2>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age (in years)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <div>
          <label>
            <input
              type="checkbox"
              checked={vaccination}
              onChange={(e) => setVaccination(e.target.checked)}
            />
            Vaccinated
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={sterilisation}
              onChange={(e) => setSterilisation(e.target.checked)}
            />
            Sterilized
          </label>
        </div>

        <h3>Images (Add up to 5 URLs)</h3>
        {images.map((image, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Image URL ${index + 1}`}
            value={image}
            onChange={(e) => handleImageChange(index, e.target.value)}
          />
        ))}

        <button type="submit" disabled={loading}>
          {loading ? "Saving Animal..." : id ? "Update Animal" : "Add Animal"}
        </button>
      </form>

      {id && (
        <div>
          <button
            onClick={handleDelete}
            style={{ marginTop: "10px", color: "red" }}
          >
            Delete Animal
          </button>
        </div>
      )}
    </div>
  );
};
