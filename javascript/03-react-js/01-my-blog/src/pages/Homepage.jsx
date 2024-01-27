import { Link } from "react-router-dom";
import data from "../data/data.json";
const Homepage = () => {
  const dataBase = data.map((val) => {
    return (
      <section className="container mx-auto max-w-5xl">
        <div className="flex">
          <div className="p-5 mt-3 rounded md:flex items-center">
            <div className="space-y-5 p-3 text-center">
              <img src={val.image} className="w-full md:w-60" />
              <p>{val.date}</p>
            </div>
            <div className="ml-5 p-3 space-y-5">
              <h1 className=" text-2xl font-serif text-blue-900">
                {val.title}
              </h1>
              <p className="text-lg font-serif max-w-3xl">{val.news}</p>
              <p className="font-serif text-sm text-blue-500 font-semibold">
                CONTINUE READING
              </p>
            </div>
          </div>
          <div className="border-8 px-4 py-5 space-y-2 rounded text-sm mt-8">
            <img src={val.image} className="w-48" />
            <h1 className="font-serif text-blue-600">{val.title}</h1>
          </div>
        </div>
      </section>
    );
  });
  return dataBase;
};
export default Homepage;
