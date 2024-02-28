import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="md:flex md:justify-between items-center md:container md:mx-auto md:p-5 p-3">
      <Link to={"/"} className="text-center md:text-left">
        <h1 className="text-xl font-semibold tracking-tight">CookEase</h1>
      </Link>
      <ul className="md:flex md:space-x-3 text-center md:text-left">
        <Link to={"/home"}>
          <li>Home</li>
        </Link>
        <Link>
          <li>About</li>
        </Link>
        <li>Contact</li>
      </ul>
      <Link to={"/newrecipe"}>
        <button className="bg-gray-950 px-4 py-1 rounded text-white mx-32 md:mx-0">
          Add Recipe
        </button>
      </Link>
    </div>
  );
};
export default Navbar;
