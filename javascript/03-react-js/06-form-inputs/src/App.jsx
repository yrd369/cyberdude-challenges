import FormInput from "./components/FormInput";
import Navbar from "./components/Navbar";
import { useForm } from "react-hook-form";
import Textarea from "../src/components/Textarea";
import Button from "../src/components/Button";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendInfo = (data) => {
    console.log(data);
    alert(`Form Submitted ${data.name}..!`);
  };
  return (
    <>
      <Navbar />
      <div className="bg-gray-400 p-16">
        <h1 className="text-center text-3xl font-semibold mb-5">
          Contact Page
        </h1>

        <form
          className="bg-gray-700 max-w-lg mx-auto p-10 rounded  space-y-5"
          onSubmit={handleSubmit(sendInfo)}
        >
          <FormInput
            label="Enter your name"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required="required"
            register={register("name", {
              required: "Name field is required",
              minLength: {
                value: 3,
                message: "Name should be more than 3 characters",
              },
            })}
            error={errors.name}
          />
          <FormInput
            label="Enter your mail id"
            id="mail"
            name="mail"
            type="text"
            placeholder="Enter your mail id"
            required="required"
            register={register("mail", {
              required: "Email id required to proceed",
            })}
            error={errors.mail}
          />
          <Textarea
            label="Share your thoughts"
            id="message"
            name="message"
            placeholder="Share your thoughts"
            register={register("message", {
              required: "Message field required to proceed", minLength:{
                value: 5,
                message: "message should be more than 5 characters"
              }
            })}
            error={errors.message}
          />
          <Button />
        </form>
      </div>
    </>
  );
}
export default App;

{
  /* <div>
            <label className="mb-1 text-white">Name</label>
            <input
              type="text"
              className="px-4 py-1  w-full rounded outline-none"
              name="fullName"
              placeholder="Enter your name"
              {...register("fullName", {
                required: "Name field required",
                minLength: {
                  value: 3,
                  message: "Name should be more than 3 letter",
                },
              })}
            />
            {errors.fullName && (
              <small className="text-red-500 font-semibold">
              {errors.fullName.message}
              </small>
            )}
          </div>
          <div>
            <label className="mb-1 text-white">Email</label>
            <input
              type="email"
              className="px-4 py-1  w-full rounded outline-none"
              name="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <small className="text-red-500 font-semibold">
                Email field is required
              </small>
            )}
          </div>
          <div>
            <label className="mb-1 text-white">Message</label>
            <textarea
              type="text"
              className="px-4 py-1  w-full rounded outline-none"
              name="message"
              placeholder="Share your thoughts"
              {...register("message", {
                required: "Message field is required",
              })}
            />
            {errors.message && (
              <small className="text-red-600 font-semibold">
                {errors.message.message}
              </small>
            )}
          </div>
          <button className="px-4 py-1 bg-gray-950 text-white w-full rounded text-center">
            Submit
          </button> */
}
