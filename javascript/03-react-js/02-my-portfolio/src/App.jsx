import { Outlet } from "react-router-dom";
import Portfolio from "./layouts/Portflio";

function App() {
  return (
    <>
      <Portfolio />
      <Outlet />
    </>
  );
}

export default App;
