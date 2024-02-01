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
  const [networkProvider, setNetworkProvider] = useState("LTE");
  const handleNetworkProvider = (e) => {
    setNetworkProvider(e.target.value);
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
    <div className="p-10 mx-auto ml-10">
      <div>
        <div className="bg-gray-900 text-white  px-10 py-2 md:w-[1155px]">
          <p className="text-2xl font-semibold ">Live Chat App</p>
          <p className="text-gray-300">
            Create a Fake Text Message Conversation
          </p>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="">
            <div className="bg-white p-10  space-y-5 shadow-xl">
              <div>
                <label className="block">Name</label>
                <input
                  className="border border-gray-300 px-4 py-1 rounded outline-none w-full"
                  placeholder="name"
                  onChange={handleName}
                />
              </div>
              <div>
                <label className="block">Message</label>
                <input
                  className="border border-gray-300 px-4 py-1 outline-none w-full"
                  placeholder="message"
                  onChange={handleMessage}
                />
              </div>
              <div>
                <label className="block">Network Provider</label>
                <select
                  onChange={handleNetworkProvider}
                  className="border border-gray-300 px-4 py-1 rounded outline-none w-full"
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
                  className="border border-gray-300 px-4 py-1 rounded outline-none "
                  placeholder="time"
                  onChange={handleTime}
                />
              </div>
            </div>
          </div>
          {/* output */}
          <div className=" bg-white mt-10 md:mt-0 md:mb-20 md:ml-5 max-w-lg w-full">
            <div className="bg-gray-100  py-2 w-full border-b-2 border-gray-300">
              <div className="flex justify-between px-5">
                <p>{networkProvider}</p>
                <p className="font-bold">{time}</p>
                <p className="font-medium">{batteryPercent}%</p>
              </div>
              <div className="pb-2">
                <img
                  src="https://ifaketextmessage.com/images/headerButtons.png"
                  className="relative top-10"
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inputcard;
