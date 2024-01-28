import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-primary text-white md:flex items-center justify-center md:justify-between p-5 px-8">
      <h1 className="font-semibold font-Viga text-center mb-5 md:mb-0">BLOG.CO</h1>
      <ul className="text-center md:flex md:space-x-3 space-x-0.5 font-roboto">
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
