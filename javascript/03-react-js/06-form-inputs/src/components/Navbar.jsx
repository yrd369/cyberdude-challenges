const Navbar = () => {
  return (
    <div className="flex bg-gray-700 p-3 text-white justify-between px-10 font-semibold">
      <div>
        <a href="#">
          <h1 className="text-xl">React Form</h1>
        </a>
      </div>
      <ul>
        <a
          href="https://github.com/yrd369/cyberdude-challenges/tree/master/javascript/03-react-js/06-form-inputs"
          target="blank"
        >
          <li>Github</li>
        </a>
      </ul>
    </div>
  );
};
export default Navbar;
