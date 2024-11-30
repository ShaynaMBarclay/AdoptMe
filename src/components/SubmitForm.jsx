import { useState } from "react";

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
      setError("");
      return;
    }
    const newPerson = {
      name,
      email,
      zipCode,
      surname,
      address,
      city,
      country,
      phone,
    };
    console.log("Send data:", newPerson);

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

    // Close the modal after submission
    if (closeModal) {
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default SubmitForm;
