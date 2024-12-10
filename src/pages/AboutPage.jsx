import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className="p1">
      <h1>What is Adopt Me and what do we do?</h1>
      <p1>
        Adopt Me is a non-profit project aimed at systematically solving the
        problem of homeless animals in humane ways. Thanks to the Free Online
        resource, you can find a pet or help a homeless animal find its family.
      </p1>
      <img
        src="https://res.cloudinary.com/dmvawq2ak/image/upload/v1733423691/bve084bq0djpdr9laled.png"
        alt="About Page"
      />

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
          section from the homepage and fill in all the required information
          about the pet.
          <p>Thanks for helping🙏</p>
        </p>

        <h2>People who create the web page for this project:</h2>
        <br />

        <p2>Katya Salata</p2>
        <br />
        <p3>Shayna Barclay</p3>
        <br />
        <p4>Anna Turek</p4>
        <br />
      </div>
    </div>
  );
};

export default AboutPage;
