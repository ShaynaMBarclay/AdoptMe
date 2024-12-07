import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitForm = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  
  const navigate = useNavigate(); //for navigation

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError("Name and email are required.");
      return;
    }
    const newSubmission = {
      name,
      email,
      zipCode,
      surname,
      address,
      city,
      country,
      phone,
    };
    console.log("Send data:", newSubmission);

     // Store the new submission in the array
     setSubmissions((prevSubmissions) => [...prevSubmissions, newSubmission]);

    // Reset form and close the modal
    setName("");
    setSurname("");
    setAddress("");
    setZipCode("");
    setCity("");
    setCountry("");
    setPhone("");
    setEmail("");
    setError("");
    setSuccess(true); // Success notification

       // Simulate a small delay for notification display
       setTimeout(() => {
        setSuccess(false); // Hide success notification
        // Close the modal after submission
    if (closeModal) {
      closeModal();
    }
    navigate("/"); //navigate to the homescreen    
  }, 7000); //7 second delay
};


  return (
    <>
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Form submitted successfully!</p>}
      <div className="form-container">
        <div>
          <label className="submit-name" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="*"
          />
        </div>

        <div>
          <label className="submit-surname" htmlFor="surname">
            Surname:
          </label>
          <input
            type="text"
            id="Surname"
            value={surname}
            onChange={handleSurnameChange}
            placeholder="*"
          />
        </div>
        <div>
          <label className="submit-address" htmlFor="address">
            Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            placeholder="*"
          />
        </div>
        <div>
          <label className="submit-zipCode" htmlFor="zipCode">
            ZipCode:
          </label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={handleZipCodeChange}
            placeholder="*"
          />
        </div>
        <div>
          <label className="submit-city" htmlFor="city">
            City:
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            placeholder="*"
          />
        </div>
        <div>
          <label className="submit-country" htmlFor="country">
            Country:
          </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={handleCountryChange}
            placeholder="*"
          />
        </div>
        <div>
          <label className="submit-phone" htmlFor="phone">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="*"
          />
        </div>
        <div>
          <label className="submit-email" htmlFor="email">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="*"
          />
        </div>
        <div>
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </form>

<div className="submissions-confirmation">
{success ? (
  <p style={{ color: "green", fontSize: "1.2em"}}>
    We will contact you within next 2 weeks after submission.
    </p>
) : (
  <p>No submissions yet. Please fill out the form above</p>
)}
</div>
</>
  );
};

export default SubmitForm;
