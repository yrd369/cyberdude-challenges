const Card = ({ img, name }) => {
  return (
    <div className="space-y-2 container mx-auto mt-5 ">
      <img
        src={img}
        className="rounded-lg"
      ></img>
      <h1 className="font-semibold">{name}</h1>
    </div>
  );
};
export default Card;
