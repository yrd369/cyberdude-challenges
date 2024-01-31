const Experience = ({ details }) => {
  const workData = details.workExperience.map((value) => {
    return (
      <div className="bg-additional px-5 py-7 flex space-x-3 rounded items-center w-full hover:bg-orange-700">
        <img
          src="https://dev-portfolio-template.netlify.app/static/media/expImgWhite.0b896d9c.svg"
          className="bg-secondary p-9  rounded-full "
        />
        <div>
          <p className="text-secondary font-semibold"></p>
          <p className="text-white font-bold text-xl">{value.experience}</p>
          <p className="text-gray-300 text-lg font-semibold">
            {value.companyName}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="bg-primary p-10 font-poppins">
      <div className="grid md:grid-cols-2 items-center space-y-10 md:space-y-0">
        <div className="md:px-20 space-y-10">
          <h1 className="font-bold text-secondary text-5xl text-center md:text-start">
            Experience
          </h1>
          {workData}
        </div>
        <div className="md:ml-60">
          <img
            src="https://dev-portfolio-template.netlify.app/static/media/expOrange.9383b2df.svg"
            className="w-80"
          />
        </div>
      </div>
    </div>
  );
};
export default Experience;
