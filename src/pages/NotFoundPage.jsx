import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      NotFound
      <div className="notFound">
        <img src="./page-not-found.PNG" alt="notFound" />
        <Link to="/">HomePage</Link>
      </div>
    </div>
  );
};
