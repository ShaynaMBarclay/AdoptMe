import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <div className="notFound">
        <img
          src="https://res.cloudinary.com/dmvawq2ak/image/upload/v1733255062/NotFound_shddcr.png
"
          alt="Page not Found"
        />

        <Link to="/" className="notFoundLink">
          Home
        </Link>
      </div>
    </div>
  );
};
