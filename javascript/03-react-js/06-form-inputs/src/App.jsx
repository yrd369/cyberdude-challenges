import { useState } from "react";
import FormInput from "./components/FormInput";
import Button from "./components/Button";
// const [name, setName] = useState({ name: "" });
const handleState = (e) => {
  const { name, value } = e.target;
  console.log(name, value);
};

function App() {
  return (
    <div className="bg-gray-400 p-10 h-screen">
      <h1 className="text-center text-3xl font-semibold mb-5">Contact Page</h1>
      <div className="bg-gray-700 max-w-lg mx-auto p-10 rounded  space-y-5 ">
        <FormInput
          label="Enter your name"
          id="name"
          name="name"
          handleChange={handleState}
          type="text"
        />
        <FormInput
          label="Enter your mail id"
          id="mail"
          name="mail"
          handleChange={handleState}
          type="text"
        />
        <FormInput
          label="share your thoughts"
          id="message"
          name="message"
          handleChange={handleState}
          type="textarea"
        />
        <Button />
      </div>
    </div>
  );
}

export default App;
