import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <>
      <h1>What is Adopt Me and what do we do?</h1>
      <div className="p1">
        <img
          src="https://res.cloudinary.com/dmvawq2ak/image/upload/v1733423691/bve084bq0djpdr9laled.png"
          alt="About Page"
        />
        <p>
          Adopt Me is a non-profit project aimed at systematically solving the
          problem of homeless animals in humane ways. Thanks to the Free Online
          resource, you can find a pet or help a homeless animal find its
          family.
        </p>
      </div>
      <h1>How it's work?</h1>
      <div className="about">
        <p>
          This is a project that allows anyone to help our smaller brothers.
          <br />
          How? <br />
          On the homepage, you can choose any pet that you like. Then, by
          clicking the "Adopt" button, you fill in some basic information about
          yourself.
          <br /> After that, we will contact you for further arrangements.
          <br />
          Also, if you find an animal on the street and are unable to keep it at
          home, but would like to help find it a family, you can use our
          website.
          <br /> Simply go to the{" "}
          <Link to="/add-animal" className="add-animal-page">
            Add Animal Page
          </Link>
          <br />
          section from the homepage and fill in all the required information
          about the pet.
        </p>
        <img
          src="https://res.cloudinary.com/dmvawq2ak/image/upload/v1733177827/simona1_blfyoz.jpg"
          alt="About Page"
        />
      </div>
      <h1>Our mission</h1>
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
      <h1>Our goal</h1>
      <div className="goal">
        <p>Every animal has a loving owner.</p>
        <img
          src="https://res.cloudinary.com/dmvawq2ak/image/upload/v1733564468/sofi_pbwfh7.jpg"
          alt="About Page"
        />
      </div>
      <h1>Thanks for helping🙏</h1>

      <div className="contact">
        <div className="left-side">
          <h2>CONTACT US</h2>
          <p>
            🖃 AdoptMe@FakeEmail.com
            <br />
            🕻 00000000 <br />
            Ask the chatbot on the Home Page! <br />
          </p>
          <div className="right-side">
            <h3>TECHNICAL STAFF</h3>
            <br />
            <p1>KATYA SALATA</p1> <br />
            <p2>SHAYNA BARCLAY</p2> <br />
            <p3>ANNA TUREK</p3> <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
