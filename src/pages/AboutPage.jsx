import { Link } from "react-router-dom";
const AboutPage = () => {
  const picAnna =
    "https://res.cloudinary.com/dmvawq2ak/image/upload/v1734052410/1734037165872_l6khpz.jpg";
  const picShayna =
    "https://res.cloudinary.com/dmvawq2ak/image/upload/v1734052796/1728245495165_xysokp.jpg";
  const picKatya =
    "https://res.cloudinary.com/dmvawq2ak/image/upload/v1734053048/1728847868286_ezkj7a.jpg";
  const imgGithub =
    "https://res.cloudinary.com/dmvawq2ak/image/upload/v1734051523/25231_dedr2s.png";
  const imgLinked =
    "https://res.cloudinary.com/dmvawq2ak/image/upload/v1734051196/Linkedin_ymeqxm.png";
  return (
    <div className="about-wrapper">
      <h1>About us</h1>
      <div className="about-box">
        <img
          src="https://res.cloudinary.com/dmvawq2ak/image/upload/v1733423691/bve084bq0djpdr9laled.png"
          alt="dog Ragnar photo"
        />
        <p className="about-text">
          AdoptMe is a project aimed at systematically solving the problem of
          homeless animals in humane ways. Thanks to the Free Online resource,
          you can find a pet or help a homeless animal find its family.
        </p>
      </div>
      <h2>How does it work?</h2>
      <div className="about-box">
        <div className=" about-box-column">
          <h3>Adopting an animal</h3>
          <ol>
            <li className="about-text">
              Explore: browse the website to view animals with details like age,
              location, and health status.
            </li>
            <li className="about-text">
              Search: use filters to find the perfect match based on your
              preferences.
            </li>
            <li className="about-text">
              Submit a form: once you find an animal you are interested in, fill
              out the an adoption inquiry form.{" "}
            </li>
            <li className="about-text">
              Wait for a Response: the shelter will contact you within two weeks
              to discuss the next steps.
            </li>
          </ol>
          <h3>Help an animal to find new home</h3>
          <p className="about-text">
            Simply go to the{" "}
            <Link className="about-link" to="/add-animal">
              Add Animal Page
            </Link>{" "}
            and fill in all the required information about the pet.
          </p>
        </div>
        <img
          className="about-pic-height"
          src="https://res.cloudinary.com/dmvawq2ak/image/upload/v1733177827/simona1_blfyoz.jpg"
          alt="cat Simona picture"
        />
      </div>
      <h2>Our mission</h2>
      <div className="about-box">
        <img
          src="https://res.cloudinary.com/dmvawq2ak/image/upload/v1733255658/Lypa1_c1vr2u.jpg"
          alt="cat Lypa picture"
        />
        <p className="about-text">
          Increase the level of responsibility and respect of society for the
          life of animals.
        </p>
      </div>
      <h2>Our goal</h2>
      <div className="about-box">
        <p className="about-text">Every animal has a loving owner.</p>
        <img
          src="https://res.cloudinary.com/dmvawq2ak/image/upload/v1733564468/sofi_pbwfh7.jpg"
          alt="cat Sofi picture"
        />
      </div>
      <section className="about-devs">
        <h2>Development Team</h2>
        <div className="dev-card-box">
          <div className="dev-card">
            <img className="dev-photo" src={picKatya} />
            <h3>Kateryna Salata</h3>
            <a href="https://www.linkedin.com/in/kateryna-salata-a54b111aa">
              <img className="dev-card-linkedin" src={imgLinked} />
            </a>
            <a href="https://github.com/kateryna-salata">
              {" "}
              <img className="dev-card-github" src={imgGithub} />
            </a>
          </div>
          <div className="dev-card">
            <img className="dev-photo" src={picShayna} />
            <h3>Shayna Barclay</h3>
            <a href="https://www.linkedin.com/in/shaynambarclay/">
              {" "}
              <img className="dev-card-linkedin" src={imgLinked} />
            </a>
            <a href="https://github.com/ShaynaMBarclay">
              {" "}
              <img className="dev-card-github" src={imgGithub} />
            </a>
          </div>
          <div className="dev-card">
            <img className="dev-photo" src={picAnna} />
            <h3>Anna Turek</h3>
            <a href="https://www.linkedin.com/in/anna-turek-7694931a3/">
              <img className="dev-card-linkedin" src={imgLinked} />
            </a>
            <a href="https://github.com/Unicorn3737">
              <img className="dev-card-github" src={imgGithub} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
