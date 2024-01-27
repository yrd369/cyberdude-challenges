import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
