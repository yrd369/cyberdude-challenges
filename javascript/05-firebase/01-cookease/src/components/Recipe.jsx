import { useForm } from "react-hook-form";
import { db } from "../firebase/index";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Recipe = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // adding a new data
  const sendData = (data) => {
    const querySnapshot = setDoc(doc(db, "recipes", data.recipeName), data);
    alert(`Thank you for sharing your ${data.recipeName} recipe. ✅`);
    navigate("/home");
  };

  return (
    <div className="p-5">
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
        <div>
          <label className="block mb-1.5">Procedure to cook</label>
          <textarea
            name="procedure"
            type=""
            className="px-4 py-1 rounded-md outline-none w-full"
            placeholder="Enter the procedure to prepare the meal"
            {...register("procedure")}
          ></textarea>
        </div>
        <button className="bg-gray-950 px-4 py-1 rounded-lg text-white w-full">
          Add recipe
        </button>
      </form>
    </div>
  );
};
export default Recipe;
