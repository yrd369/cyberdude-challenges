// import button from "../data/button.json";
const data = [
  {
    id: 1,
    value: "btn btn-danger",
    style:
      "bg-red-500 py-2 px-5  mt-3 rounded text-white hover:text-black space inline-block",
  },
  {
    id: 2,
    value: "btn btn-warning",
    style:
      "bg-yellow-400 py-2 px-5  mt-3 rounded text-white hover:text-black space inline-block",
  },
  {
    id: 3,
    value: "btn btn-success",
    style:
      "bg-green-500 py-2 px-5  mt-3 rounded text-white hover:text-black space inline-block",
  },
  {
    id: 4,
    value: "btn btn-secondary",
    style:
      "bg-gray-500 py-2 px-5  mt-3 rounded text-white hover:text-black space inline-block",
  },
  {
    id: 5,
    value: "btn btn-info",
    style: "bg-blue-500 py-2 px-5  mt-3 rounded text-white hover:text-black ",
  },
];

const Button = (props) => {
  const variant = data.find((val) => {
    return val.value == props.className;
  });
  return (
    <>
      <button className={`${variant.style}`}>
        {props.children ? props.children : props.className}
      </button>
    </>
  );
};
export default Button;
