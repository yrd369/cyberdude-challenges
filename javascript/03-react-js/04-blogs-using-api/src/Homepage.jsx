import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";

const Homepage = () => {
  const [posts, setPost] = useState([]);

  // getting api
  useEffect(() => {
    const getPost = async () => {
      const api = await fetch("https://dummyjson.com/posts");
      const datas = await api.json();
      // console.log(datas);
      setPost(datas.posts);
    };
    getPost();
  });

  // getting all post
  const info = posts.map((val) => {
    return (
      <div className="bg-white rounded mb-3 p-10 space-y-3 " key={val.id}>
        <p className="font-semibold text-2xl">{val.title}</p>
        <p className="text-md">{val.body}</p>
        <div className="flex items-center space-x-1">
          <BiSolidLike />
          <p>{val.reactions}</p>
        </div>

        <Link to={"desc/" + val.id}>
          <button className="bg-black px-4 py-1 text-white rounded mt-3 hover:text-gray-200">
            Read More
          </button>
        </Link>
      </div>
    );
  });

  return <div className="container mx-auto px-10 md:px-20 py-10 ">
    <h1 className="text-center text-3xl mb-5 font-bold">Recent post</h1>
    {info}</div>;
};

export default Homepage;
