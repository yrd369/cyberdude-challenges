import { Link, useParams } from "react-router-dom";
import data from "../data/data.json";
import Descpage from "./Descpage";
import pic from "../assets/images/anbu.jpg";
import Blog from "./Blog";
const Homepage = () => {
  return (
    <section className="bg-additional pb-3 md:pb-0">
      <div className="container mx-auto">
        <div className="md:p-5">
          <div className="grid grid-1 md:grid-cols-2 gap-x-3">
            <section className="px-3 md:w-[900px]">
              <Blog />
            </section>
            {/* recent post */}
              <section className="w-64 ml-auto hidden md:block">
                <div className="bg-[#EBD9B4] p-5 mt-3 rounded space-y-2">
                  <img src={pic} className="w-20 mx-auto rounded-full" />
                  <p className="text-center text-xl">hai hello vanakam</p>
                  <p className="text-center text-sm">epdi irukeegaaaaa</p>
                  <div className="flex justify-center">
                    <button className="bg-black text-white px-2 py-1 rounded text-xs">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="bg-[#EBD9B4] p-5 mt-3 rounded space-y-2">
                  <img src={pic} className="w-20 mx-auto rounded-full" />
                  <p className="text-center text-xl">hai hello vanakam</p>
                  <p className="text-center text-sm">epdi irukeegaaaaa</p>
                  <div className="flex justify-center">
                    <button className="bg-black text-white px-2 py-1 rounded text-xs">
                      Read More
                    </button>
                  </div>
                </div>
              </section>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Homepage;
{
  /* <section className="container mx-auto max-w-3xl" key={val.id}>
          <div className="border mt-5">
            <Link to="/desc">
              <div className="flex">
                <div className="p-5 mt-3 rounded md:flex items-center border bg-secondary">
                  <div className="space-y-5 p-3 text-center">
                    <img src={val.image} className="w-full md:w-60" />
                    <p>{val.date}</p>
                  </div>
                  <div className="ml-5 p-3 space-y-5">
                    <h1 className=" text-2xl text-blue-900 font-Viga">
                      {val.title}
                    </h1>
                    <p className="text-lg max-w-3xl font-Viga">{val.news}</p>
                    <p className="text-sm text-blue-500 font-semibold">
                      CONTINUE READING
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section> */
}
