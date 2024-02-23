import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between  items-center container mx-auto p-5">
      <Link to={"/"}>
        <h1 className="text-xl font-bold tracking-tight ">CookEase</h1>
      </Link>
      <ul className="flex space-x-3 items-center">
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
