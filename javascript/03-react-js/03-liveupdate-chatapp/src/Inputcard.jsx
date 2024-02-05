import { useState } from "react";

const Inputcard = () => {
  const [name, setName] = useState("Name");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const [message, setMessage] = useState("message");
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const [networkService, setNetworkService] = useState("LTE");
  const handleNetworkProvider = (e) => {
    setNetworkService(e.target.value);
  };
  const [batteryPercent, setBatteryPercent] = useState(10);
  const handleBatteryPercent = (e) => {
    setBatteryPercent(e.target.value);
  };
  const [time, setTime] = useState("3.00 PM");
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  return (
    <div>
      <h1 className="text-center p-5 text-4xl font-semibold bg-slate-300">Fake Chat App</h1>
      <div className="grid md:grid-cols-2 mx-auto  container">
        <section className=" bg-green-300 p-10 mx-auto max-w-lg md:mt-5 mt-10 rounded">
          <h1 className="mb-5 text-2xl font-semibold">
            Type details as you like
          </h1>
          <div className="space-y-3">
            <div>
              <label className="block">Name</label>
              <input
                className="px-2 py-1 rounded outline-none w-full"
                placeholder="Enter sender name"
                onChange={handleName}
              ></input>
            </div>
            <div>
              <label className="block">Message</label>
              <input
                className="px-2 py-1 rounded outline-none w-full"
                placeholder="Enter message"
                onChange={handleMessage}
              ></input>
            </div>
            <div>
              <label className="block">Network Service</label>
              <select
                onChange={handleNetworkProvider}
                className="border border-gray-300 px-2 py-1 rounded outline-none w-full"
              >
                <option>--select--</option>
                <option value={"LTE"}>LTE</option>
                <option value={"3G"}>3G</option>
                <option value={"2G"}>2G</option>
              </select>
            </div>
            <div>
              <label className="block">Battery Percentage</label>
              <input
                type="range"
                onChange={handleBatteryPercent}
                min={0}
                max={100}
                value={batteryPercent}
                step={1}
                className="w-full"
              />
            </div>
            <div>
              <label className="block">Time</label>
              <input
                className="w-full border border-gray-300 px-4 py-1 rounded outline-none"
                type="time"
                onChange={handleTime}
              />
            </div>
          </div>
        </section>
        <section className="bg-white md:max-w-lg rounded md:mt-5 mt-10 m-5 md:m-0">
          <div className="bg-gray-100  py-2 md:w-full border-b-2 border-gray-300">
            <div className="flex justify-between px-5">
              <p>{networkService}</p>
              <p className="font-bold">{time}</p>
              <p className="font-medium">{batteryPercent}%</p>
            </div>
            <div className="pb-2">
              <img
                src="https://ifaketextmessage.com/images/headerButtons.png"
                className="relative top-5 rounded"
              />
              <p className="text-center font-bold text-2xl mt-2">
                {name ? name : "Name"}
              </p>
            </div>
          </div>
          <div className="rounded p-10">
            <p className="bg-gray-300 w-fit px-3 py-2 rounded">
              {message ? message : "Type your message"}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Inputcard;
