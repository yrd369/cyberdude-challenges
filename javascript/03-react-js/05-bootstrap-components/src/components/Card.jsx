const Card = (props) => {
  console.log(props);
  return (
    <div className="bg-gray-200  max-w-72 rounded">
      <img
        src={props.src ? props.src : "https://placehold.co/400"}
        className="rounded"
      ></img>
      <div className="p-3 space-y-3">
        <h1 className="font-semibold text-xl">
          {props.title ? props.title : "Card Title"}
        </h1>
        <p className="text-sm">
          {props.children
            ? props.children
            : "Some quick example text to build on the card title and make up the bulk of the card's content."}
        </p>
        <a href={props.href}>
          <button className="bg-blue-500 text-white px-4 py-1 rounded w-full">
            Go Somewhere
          </button>
        </a>
      </div>
    </div>
  );
};
export default Card;
