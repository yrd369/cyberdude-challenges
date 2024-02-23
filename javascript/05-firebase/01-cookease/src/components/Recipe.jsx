import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { db } from "../firebase/index";
import { collection,setDoc } from "firebase/firestore";
const Recipe = () => {
  const { register, handleSubmit } = useForm();
  const sendData = (data) => {
    console.log(data);
  };
  return (
    <form
      className="bg-[#FBE1DD] p-12 max-w-2xl mx-auto rounded-lg mt-2 space-y-3"
      onSubmit={handleSubmit(sendData)}
    >
      <div>
        <label className="block mb-1.5">Recipe name</label>
        <input
          type="text "
          className="outline-none px-4 py-1 rounded-md w-full"
          name="recipeName"
          {...register("recipeName")}
        />
      </div>
      <div>
        <label className="block mb-1.5">Recipe type</label>
        <input
          type="text"
          name="recipeType"
          className="px-4 py-1 rounded-md outline-none w-full"
          {...register("recipeType")}
        />
      </div>
      <div>
        <label className="block mb-1.5">Recipe image</label>
        <input
          name="recipeImage"
          type="upload"
          className="px-4 py-1 rounded-md outline-none w-full"
          {...register("recipeImage")}
        />
      </div>
      <button className="bg-black px-4 py-1 rounded-lg text-white w-full">
        Add recipe
      </button>
    </form>
  );
};
export default Recipe;
