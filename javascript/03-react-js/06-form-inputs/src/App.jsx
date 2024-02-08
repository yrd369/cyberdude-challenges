import { useState } from "react";
import FormInput from "./components/FormInput";
import Button from "./components/Button";
import Textarea from "./components/Textarea";
import Navbar from "./components/Navbar";

function App() {
  const [form, setForm] = useState({ name: "", mail: "", message: "" });
  const handleState = (e) => {
    const { name, value } = e.target;
    setForm((pre) => ({ ...pre, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for the submission ${form.name}..!`)
    console.log(form);
  };
  return (
    <>
      <Navbar />
      <div className="bg-gray-400 p-16">
        <h1 className="text-center text-3xl font-semibold mb-5">
          Contact Page
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="bg-gray-700 max-w-lg mx-auto p-10 rounded  space-y-5">
            <FormInput
              label="Enter your name"
              id="name"
              name="name"
              handleChange={handleState}
              type="text"
              placeholder="Enter your name"
              required="required"
            />
            <FormInput
              label="Enter your mail id"
              id="mail"
              name="mail"
              handleChange={handleState}
              type="text"
              placeholder="Enter your mail id"
              required="required"
            />
            <Textarea
              label="Share your thoughts"
              id="message"
              name="message"
              handleChange={handleState}
              type="textarea"
              placeholder="Share your thoughts"
            />
            <Button />
          </div>
        </form>
      </div>
    </>
  );
}
export default App;
