import { useForm } from "react-hook-form";
import { db } from "../firebase/index";
import { setDoc, doc } from "firebase/firestore";
const Recipe = () => {
  const { register, handleSubmit } = useForm();
  const sendData = (data) => {
    const querySnapshot = setDoc(doc(db, "recipes", data.recipeName), data);
    alert(`Thank you for sharing your ${data.recipeName} recipe.`);
    console.log(querySnapshot);
  };

  return (
    <div className="h-screen">
    <form
      className="bg-[#FBE1DD] p-10 max-w-2xl mx-auto rounded-lg mt-5 space-y-3"
      onSubmit={handleSubmit(sendData)}
    >
      <div>
        <label className="block mb-1.5">Recipe name</label>
        <input
          type="text "
          className="outline-none px-4 py-1 rounded-md w-full"
          name="recipeName"
          placeholder="Enter your recipe name"
          {...register("recipeName", {
            required: "recipeName",
          })}
        />
      </div>
      <div>
        <label className="block mb-1.5">Recipe type</label>
        <input
          type="text"
          name="recipeType"
          className="px-4 py-1 rounded-md outline-none w-full"
          {...register("recipeType")}
          placeholder="Ex: chicken, egg, mutton"
        />
      </div>
      <div>
        <label className="block mb-1.5">Recipe image</label>
        <input
          name="recipeImage"
          type="url"
          className="px-4 py-1 rounded-md outline-none w-full"
          placeholder="Paste your image link"
          {...register("recipeImage")}
        />
      </div>
      <button className="bg-gray-950 px-4 py-1 rounded-lg text-white w-full">
        Add recipe
      </button>
    </form>
    </div>
  );
};
export default Recipe;
