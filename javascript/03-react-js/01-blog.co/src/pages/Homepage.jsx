import { Link, useParams } from "react-router-dom";
import Blog from "./Blog";
import Card from "./Cards";
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
              <Card />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Homepage;
