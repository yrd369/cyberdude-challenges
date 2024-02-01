import { Link, useParams } from "react-router-dom";
import data from "../data/data.json";
const Blog = () => {
  const blogData = data.map((value) => {
    return (
      <div
        className="md:p-5 mt-3 rounded md:grid grid-cols-2 items-center bg-secondary"
        key={value.id}
      >
        <div className=" space-y-1 md:space-y-5 p-3 text-center">
          <img src={value.image} className=" mx-auto md:mx-0 md:w-96" />
          <p className="text-sm">{value.date}</p>
        </div>
        <div className="ml-5 p-3 space-y-5">
          <h1 className=" text-xl md:text-2xl text-blue-900 font-Viga">
            {value.title}
          </h1>
          <p className="text-sm md:text-lg max-w-3xl font-Viga">{value.news}</p>

          <Link to={"/post/" + value.id}>
            <p className="text-sm bg-blue-500 hover:text-gray-200 text-white w-fit px-3 py-1 rounded mt-3">
              CONTINUE READING
            </p>
          </Link>
        </div>
      </div>
    );
  });
  return blogData;
};
export default Blog;
