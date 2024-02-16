import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="bg-gray-950 p-5 md:px-16 text-white md:flex items-center md:justify-between">
      <ul className="md:flex md:space-x-7 text-center mb-3">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <h1 className="text-xl text-center md:mr-24">DashDeals</h1>
      <ul className="md:flex items-center space-x-5 text-center ">
        <li>Login</li>
        <FiShoppingCart className="text-2xl"/>
      </ul>
    </div>
  );
};
export default Navbar;