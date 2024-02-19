const Cards = ({ name, gender, nationality }) => {
  return (
    <div className="bg-gray-200 rounded p-3 font-poppins">
      <h1>
        Intern name: <span className="font-semibold">{name}</span>
      </h1>
      <p>
        Gender: <span className="font-semibold">{gender}</span>
      </p>
      <p>
        Gender: <span className="font-semibold">{nationality}</span>
      </p>
    </div>
  );
};
export default Cards;
