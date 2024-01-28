import { useParams } from "react-router-dom";
import pic from "../assets/images/anbu.jpg";
import { FaCalendarDays } from "react-icons/fa6";
import data from "../data/data.json";
function Descpage() {
  const { id } = useParams();
  const selectedValue = data.find((value) => {
    return value.id == id;
  });
  return (
    <section className="bg-[#eee2d2]">
      <main className="container max-auto">
        <section className="max-w-96 md:max-w-[800px] w-full text-black mx-auto p-5">
          <div>
            <div className="border bg-[#f8e0c6] p-3 max-w-2xl">
              <div className="flex justify-center">
                <img
                  src={selectedValue.image}
                  alt="blogImg"
                  className="object-cover"
                />
              </div>
              <div className="mt-5">
                <h1 className="font-semibold text-2xl">
                  {selectedValue.title}
                </h1>
                {/* ICONS */}
                <div className="flex gap-x-3 text-gray-100 mt-3">
                  <div className="flex items-center gap-x-1">
                    <span>
                      <FaCalendarDays className="text-cyan-600" />
                    </span>
                    <span className="text-gray-800">{selectedValue.date}</span>
                  </div>
                </div>

                <div className="px-2 ">
                  <p className="text-gray-800 mt-6">
                    {selectedValue.fullNews}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
export default Descpage;
