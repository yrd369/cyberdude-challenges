import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-primary text-white flex items-center justify-between p-5 px-8 mb-5">
      <h1 className="font-semibold font-sans">BLOG.CO</h1>
      <ul className="flex space-x-3">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
