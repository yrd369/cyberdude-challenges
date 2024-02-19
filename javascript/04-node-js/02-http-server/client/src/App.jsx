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
      <div className="grid grid-cols-3 gap-5 m-10">
        {interns.map((intern) => {
          return (
            <Cards name={intern.name} gender={intern.gender} nationality={intern.country} key={intern.id} />
          );
        })}
      </div>
    </>
  );
}

export default App;
