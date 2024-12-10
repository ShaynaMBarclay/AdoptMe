import { useNavigate } from "react-router-dom";

const Card = ({ animal }) => {
  //accepting 'animal' as a prop
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${animal.id}`, { state: { animal } }); //passing the 'animal' object as state; 'animal.id' is a placeholder in the URL structure
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
      {animal.images && animal.images.length > 0 && (
        <img
          src={animal.images[0]}
          alt={`Photo of ${animal.name}`}
          className="card-img"
        />
      )}
      <h3>{animal.name}</h3>
      <p>Age: {animal.age}</p>
      <p> 📍{animal.location}</p>
    </div>
  );
};

export default Card;
