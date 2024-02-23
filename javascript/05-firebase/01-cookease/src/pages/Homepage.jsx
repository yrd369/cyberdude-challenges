import { useEffect, useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Hero from "../components/Hero";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/index.js";
function Homepage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "recipes"));
      setData(querySnapshot.docs);
    }
    getData();
  }, []);
  return (
    <>
      <Hero />
      <Input input={(e) => setSearch(e.target.value)} name="input" />
      <div className="space-y-5 grid grid-cols-5 gap-x-5 mx-auto container ">
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item.data()
              : item.data().type.toLowerCase().includes(search) ||
                  item.data().recipeName.toLowerCase().includes(search);
          })
          .map((card, index) => {
            return (
              <Card
                name={card.data().recipeName}
                key={index}
                img={card.data().img}
              />
            );
          })}
      </div>
    </>
  );
}

export default Homepage;
