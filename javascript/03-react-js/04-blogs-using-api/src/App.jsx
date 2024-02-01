import { Outlet } from "react-router-dom";
import Homepage from "./Homepage.jsx"
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
