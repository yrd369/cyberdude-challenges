import { useParams } from "react-router-dom";
import pic from "../assets/images/anbu.jpg";
import { FaCalendarDays } from "react-icons/fa6";
function Descpage() {
  const { id } = useParams();
  return (
    <section className="bg-[#eee2d2]">
      <main className="container max-auto">
        <section className="max-w-96 md:max-w-[800px] w-full text-black mx-auto p-5">
          <div>
            <div className="border bg-[#f8e0c6] p-3">
              <div className="flex justify-center">
                <img src={pic} alt="blogImg" className="object-cover" />
              </div>
              <div className="mt-5">
                <h1 className="font-semibold md:text-2xl text-xl lg:text-4xl text-center">
                  React will Start from next Week
                </h1>
                {/* ICONS */}
                <div className="flex gap-x-3 text-gray-100 mt-3 ml-6">
                  <div className="flex items-center gap-x-1">
                    <span>
                      <FaCalendarDays className="text-cyan-600" />
                    </span>
                    <span className="text-gray-800">July 19, 2019</span>
                  </div>
                </div>

                <div className="px-2 ">
                  <p className="text-gray-800 ml-5 mt-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur numquam dolore officiis consectetur itaque earum
                    ipsa id, eveniet aperiam dolorem maiores ipsam consequatur
                    exercitationem corporis, tenetur veniam quia hic optio!
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
