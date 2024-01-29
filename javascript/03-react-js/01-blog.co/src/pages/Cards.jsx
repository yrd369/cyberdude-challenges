import { Link, useParams } from "react-router-dom";
import data from "../data/data.json";

const Card = () => {
  const { id } = useParams();
  const newsData = data.map((val) => {
    return (
      <div className="bg-[#EBD9B4] p-5 mt-3 rounded space-y-2" key={val.id}>
        <img src={val.image} className="w-40 mx-auto rounded" />
        <p className="text-lg">{val.title}</p>
        <p className="text-sm">{val.news}</p>
        <div className="flex justify-center">
          <Link to={"/post/" + val.id}>
            <button className="bg-black text-white px-2 py-1 rounded text-xs">
              Read More
            </button>
          </Link>
        </div>
      </div>
    );
  });
  return newsData;
};

export default Card;
