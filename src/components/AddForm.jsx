import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AddForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [species, setSpecies] = useState("");
  const [images, setImages] = useState(["", "", "", "", ""]);
  const [vaccination, setVaccination] = useState(false);
  const [sterilisation, setSterilisation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();


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
      id: Date.now(),
      name,
      description,
      age: parseFloat(age),
      species,
      vaccination,
      sterilisation,
      images: images.filter((img) => img.trim() !== ""), // Filter out empty URLs
    };

    try {
      // Send to backend
      const response = await axios.post(
        "http://localhost:5005/cats",
        newAnimal
      );

      // After successful response, call the onAdd function to update the animals state in App
      onAdd(response.data);

      navigate("/");
      

      // Reset form fields
      setName("");
      setDescription("");
      setAge("");
      setSpecies("");
      setImages(["", "", "", "", ""]);
      setVaccination(false);
      setSterilisation(false);
    } catch (error) {
      setError("Failed to add the animal. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Animal</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

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

      {/* Disable the submit button and show loading text while submitting */}
      <button type="submit" disabled={loading}>
        {loading ? "Adding Animal..." : "Add Animal"}
      </button>
    </form>
  );
};
