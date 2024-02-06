const Alert = (props) => {
  const data = [
    {
      id: 1,
      value: "alert-danger",
      style:
        "bg-red-500 py-2 px-5  mt-3 rounded text-white hover:text-black space inline-block w-full",
    },
    {
      id: 2,
      value: "alert-warning",
      style:
        "bg-yellow-300 py-2 px-5  mt-3 rounded text-white hover:text-black space inline-block w-full",
    },
    {
      id: 3,
      value: "alert-success",
      style:
        "bg-green-500 py-2 px-5  mt-3 rounded text-white hover:text-black space inline-block w-full",
    },
    {
      id: 4,
      value: "alert-dark",
      style:
        "bg-black py-2 px-5  mt-3 rounded text-white hover:text-gray-400 space inline-block w-full",
    },
    {
      id: 5,
      value: "alert-primary",
      style:
        "bg-blue-400 py-2 px-5  mt-3 rounded text-white hover:text-black w-full",
    },
  ];
  const alert = data.find((val) => {
    return val.value == props.className;
  });

  return (
    <div className="px-20">
      <div className={alert.style}>
        {props.children ? props.children : alert.value}
      </div>
    </div>
  );
};
export default Alert;
