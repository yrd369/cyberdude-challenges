import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { Link, useParams } from "react-router-dom";

const Descpage = () => {
  const { id } = useParams();
  const [desc, setDesc] = useState([]);
  //   const [tags, setTags] = useState();
  useEffect(() => {
    const getDesc = async () => {
      const api = await fetch("https://dummyjson.com/posts");
      const datas = await api.json();

      //   getting correct data
      setDesc(
        datas.posts.find((val) => {
          return id == val.id;
        })
      );
    };
    getDesc();
  });
  //   console.log(desc);
//   const data = desc.tags.map((val) => {
//     return <span className="m-2 px-2 bg-gray-400 py-1 ">{val}</span>;
//   });
  return (
    <div className="bg-[#647D87] p-5 h-screen">
      <div className="bg-white p-10 rounded max-w-xl mx-auto">
        <div className="mb-5 text-center">
          <Link to={"/"}>
            <ImCross className="text-red-500" />
          </Link>
        </div>
        <div className="space-y-5">
          <p className="text-2xl font-semibold">{desc.title}</p>
          <p className="">{desc.body}</p>
          {/* <p>{data}</p> */}
        </div>
      </div>
    </div>
  );
};
export default Descpage;
