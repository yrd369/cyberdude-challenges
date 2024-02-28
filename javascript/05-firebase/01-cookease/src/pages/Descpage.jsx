import { Link, useNavigate, useParams } from "react-router-dom";
import { collection, getDocs, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { useForm } from "react-hook-form";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { IoCloseSharp } from "react-icons/io5";

const Descpage = () => {
  const { register, handleSubmit } = useForm({ defaultValues: {} });
  const [data, setData] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  // getting data
  useEffect(() => {
    async function getRecipe() {
      const querySnapshot = await getDoc(doc(db, "recipes", id));
      setData(querySnapshot.data());
    }
    getRecipe();
  }, []);

  // delete file
  const handleDel = () => {
    const deleteFucntion = async () => {
      await deleteDoc(doc(db, "recipes", id));
      alert(`${id} recipe deleted. 🗑️`);
      navigate("/home");
    };
    deleteFucntion();
  };

  // edit file
  const handleEdit = () => {
    document.getElementById("editForm").style.display = "block";
  };
  const closeEditForm = () => {
    document.getElementById("editForm").style.display = "";
  };
  const updateInfoToDB = (value) => {
    const updateData = async () => {
      const updateRef = doc(db, "recipes", id);
      await updateDoc(updateRef, {
        ...id,
        recipeName: value.recipeName,
        recipeType: value.recipeType,
        recipeImage: value.recipeImage,
      });
      alert(`Edit succeed !`);
      document.getElementById("editForm").style.display = "";
      navigate("/recipe/" + id);
      // await setDoc(doc(db, "recipes", id));
      // document.getElementById("editForm").style.display = "";
    };
    updateData();
  };
  // console.log(cardValue);
  return (
    <div className="">
      <div className="bg-[#FBE1DD] p-5 max-w-6xl md:mx-auto mx-10 mt-10 rounded-xl relative">
        <div className="mt-5 space-y-3">
          <div className="flex justify-between items-center mb-7">
            <Link to="/home">
              <MdArrowBackIosNew className="text-xl" />
            </Link>
            <h1 className="text-2xl font-semibold tracking-tight">
              {data.recipeName}
            </h1>
            <div className="flex items-center space-x-2 text-2xl">
              <FiEdit
                className="text-gray-700 cursor-pointer"
                onClick={handleEdit}
              />
              <MdDelete
                className="text-red-500 cursor-pointer"
                onClick={handleDel}
              />
            </div>
          </div>
          <div className="md:flex justify-between items-center space-y-3 md:space-y-0">
            <img src={data.recipeImage} className="rounded-xl w-[500px]" />
            <p className="tracking-wide max-w-md items-center">
              {data.procedure}
            </p>
            <form
              className="bg-[#fff] max-w-2xl mx-auto rounded-lg mt-5 absolute right-20 top-10 hidden"
              id="editForm"
              onSubmit={handleSubmit(updateInfoToDB)}
            >
              <IoCloseSharp
                className="text-2xl text-red-500 mt-3 ml-80 cursor-pointer"
                onClick={closeEditForm}
              />
              <div className="p-7 px-8 space-y-3">
                <div>
                  <label className="block mb-1.5">Recipe name</label>
                  <input
                    type="text "
                    className="outline-none px-4 py-1 rounded-md w-full bg-gray-100"
                    name="recipeName"
                    placeholder="Enter your recipe name"
                    {...register("recipeName", {})}
                  />
                </div>
                <div>
                  <label className="block mb-1.5">Recipe type</label>
                  <input
                    type="text"
                    name="recipeType"
                    className="px-4 py-1 rounded-md outline-none w-full bg-gray-100"
                    {...register("recipeType")}
                    placeholder="Ex: chicken, egg, mutton"
                  />
                </div>
                <div>
                  <label className="block mb-1.5">Recipe image</label>
                  <input
                    name="recipeImage"
                    type="url"
                    className="px-4 py-1 rounded-md outline-none w-full bg-gray-100"
                    placeholder="Paste your image link"
                    {...register("recipeImage")}
                  />
                </div>
                <input
                  name="recipeId"
                  type="hidden"
                  {...register("id")}
                  value={id}
                />
                <div>
                  <label>Procedure</label>
                  <textarea className="px-4 py-1 rounded-md outline-none w-full bg-gray-100"></textarea>
                </div>
                <button className="bg-gray-950 px-4 py-1 rounded-lg text-white w-full">
                  Edit recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Descpage;
