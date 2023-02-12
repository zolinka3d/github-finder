import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Ops!</h1>
          <p className="text-xl font-light mb-8">404 - Page Not Found</p>
          <Link to="/" className="btn btn-primary">
            <FaHome className="inline-block mr-2" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
