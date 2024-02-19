import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
function App() {
  const [interns, setInterns] = useState([]);
  useEffect(() => {
    async function api() {
      const api = await fetch("/api");
      const data = await api.json();
      setInterns(data);
    }
    api();
  }, []);
  
  return (
    <>
      <Navbar />
      {interns.map((intern) => {
        return <Cards name={intern.name} key={intern.id}/>;
      })}
    </>
  );
}

export default App;
