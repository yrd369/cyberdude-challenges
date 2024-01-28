import { Link, useParams } from "react-router-dom";
import data from "../data/data.json";
import Descpage from "./Descpage";
const Blog = () => {
  const blogData = data.map((value) => {
    return (
      <Link to={"/post/" + value.id}>
        <div className="md:p-5 mt-3 rounded md:flex items-center bg-secondary">
          <div className=" space-y-1 md:space-y-5 p-3 text-center">
            <img src={value.image} className="w-32 mx-auto md:mx-0 md:w-36" />
            <p className="text-sm">{value.date}</p>
          </div>
          <div className="ml-5 p-3 space-y-5">
            <h1 className=" text-xl md:text-2xl text-blue-900 font-Viga">
              {value.title}
            </h1>
            <p className="text-sm md:text-lg max-w-3xl font-Viga">
              {value.news}
            </p>
            <p className="text-sm text-blue-500 font-semibold">
              CONTINUE READING
            </p>
          </div>
        </div>
      </Link>
    );
  });
  return blogData;
};
export default Blog;
