import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar.jsx";
import Footer from "./layouts/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
