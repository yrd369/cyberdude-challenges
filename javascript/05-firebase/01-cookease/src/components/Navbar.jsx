import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="md:flex md:justify-between  items-center container md:mx-auto md:p-5 p-3">
      <Link to={"/"}>
        <h1 className="text-xl font-semibold tracking-tight ">CookEase</h1>
      </Link>
      <ul className="md:flex space-x-3 items-center">
        <Link to={"/home"}>
          <li>Home</li>
        </Link>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Link to={"/newrecipe"}>
        <button className="bg-gray-950 px-4 py-1 rounded text-white">
          Add Recipe
        </button>
      </Link>
    </div>
  );
};
export default Navbar;
