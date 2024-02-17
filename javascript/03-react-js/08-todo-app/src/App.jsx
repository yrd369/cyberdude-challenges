import { TiDelete } from "react-icons/ti";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [tasks, setTask] = useState([]);

  const getTask = (e) => {
    e.preventDefault();
    setTask((t) => {
      return [...t, e.target.task.value];
    });
  };
  const task = tasks.map((val) => {
    return (
      <p className="bg-white rounded px-4 py-1 font-medium p-10" key={val}>
        {val}
      </p>
    );
  });
  return (
    <div>
      <Navbar />
      <div className="bg-[#1B1A55] md:p-10 p-5 max-w-lg m-10 mx-20 md:mx-auto rounded space-y-2">
        <h1 className="text-center text-white font-bold text-xl mb-10 font-mono">
          What do you want to do today..?
        </h1>
        {task.length === 0 ? (
          <p className="text-center p-5 font-bold text-xl bg-white text-black rounded font-mono">
            "No Data Available"
          </p>
        ) : (
          task
        )}
      </div>
      <form className="m-10 text-center flex-col space-y-3" onSubmit={getTask}>
        <input
          type="text"
          className="mx-auto rounded px-2 py-1 outline-none"
          name="task"
        />
        <button className="block mx-auto px-4 bg-[#2D9596] rounded">Add</button>
      </form>
    </div>
  );
}

export default App;
