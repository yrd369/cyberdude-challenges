const Navbar = () => {
  return (
    <div className="bg-primary p-3 text-white px-10 py-5">
      <div className="flex justify-between">
        <div className="font-bold">BLOG</div>
        <ul className="flex gap-x-5">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
