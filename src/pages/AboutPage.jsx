import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <>
      <h1>About us</h1>
      <div className="p1">
        <img
          src="https://res.cloudinary.com/dmvawq2ak/image/upload/v1733423691/bve084bq0djpdr9laled.png"
          alt="About Page"
        />
        <p>
          AdoptMe is a project aimed at systematically solving the problem of
          homeless animals in humane ways. Thanks to the Free Online resource,
          you can find a pet or help a homeless animal find its family.
        </p>
      </div>
      <h2>How does it work?</h2>
      <div className="about">
        <div className="about about-text-column">
          <h3>Adopting an animal</h3>
          <ol>
            <li>
              Explore: browse the website to view animals with details like age,
              location, and health status.
            </li>
            <li>
              Search: use filters to find the perfect match based on your
              preferences.
            </li>
            <li>
              Submit a form: once you find an animal you are interested in, fill
              out the an adoption inquiry form.{" "}
            </li>
            <li>
              Wait for a Response: the shelter will contact you within two weeks
              to discuss the next steps.
            </li>
          </ol>
          <h3>Help an animal to find new home</h3>
          <p>
            Simply go to the{" "}
            <Link to="/add-animal" className="add-animal-page">
              Add Animal Page
            </Link>
            <br />
            section from the homepage and fill in all the required information
            about the pet.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dmvawq2ak/image/upload/v1733177827/simona1_blfyoz.jpg"
          alt="About Page"
        />
      </div>
      <h2>Our mission</h2>
      <div className="mission">
        <img
          src="https://res.cloudinary.com/dmvawq2ak/image/upload/v1733255658/Lypa1_c1vr2u.jpg"
          alt="About Page"
        />
        <p>
          Increase the level of responsibility and respect of society for the
          life of animals.
        </p>
      </div>

      <h2>Our goal</h2>
      <div className="goal">
        <p>Every animal has a loving owner.</p>
        <img
          src="https://res.cloudinary.com/dmvawq2ak/image/upload/v1733564468/sofi_pbwfh7.jpg"
          alt="About Page"
        />
      </div>

      <h2>CONTACT US</h2>
      <p>
        🖃 AdoptMe@FakeEmail.com
        <br />
        🕻 00000000 <br />
        Ask the chatbot on the Home Page! <br />
      </p>
      <div>
        <h2>People who create the web page for this project:</h2>
        <p>Kateryna Salata</p>
        <p>Shayna Barclay</p>
        <p>Anna Turek</p>
      </div>
    </>
  );
};

export default AboutPage;
