import { Link } from "react-router-dom";
import data from "../data/data.json";
const Homepage = () => {
  const dataBase = data.map((val) => {
    return (
      <Link to="/desc" key={val.id}>
        <div className="bg-secondary mt-1 p-5 rounded m-5 text-white space-y-1">
          <img src={val.image}></img>
          <p className="text-xl font-semibold">{val.title}</p>
          <p className="text-sm">{val.news}</p>
        </div>
      </Link>
    );
  });
  return dataBase;
};
export default Homepage;
