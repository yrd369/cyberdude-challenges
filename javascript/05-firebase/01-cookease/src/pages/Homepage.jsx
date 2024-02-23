import { useEffect, useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Hero from "../components/Hero";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/index.js";
import { Link } from "react-router-dom";
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
      <div className="container">
        <div className="md:flex items-center md:px-20 md:justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Recipes</h1>
          <Input input={(e) => setSearch(e.target.value)} name="input" />
        </div>
        <div className=" grid md:grid-cols-4 gap-x-6 mx-auto px-20 items-center">
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item.data()
                : item.data().recipeType.toLowerCase().includes(search) ||
                    item.data().recipeName.toLowerCase().includes(search);
            })
            .map((card, index) => {
              return (
                <Link to={"/recipe/" + card.data().recipeName} key={index}>
                  <Card
                    name={card.data().recipeName}
                    img={card.data().recipeImage}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Homepage;
