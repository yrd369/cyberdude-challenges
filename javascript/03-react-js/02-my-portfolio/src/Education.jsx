const Education = ({ details }) => {
  return (
    <div className="bg-primary p-10 font-poppins">
      <div className="grid md:grid-cols-2 items-center">
        <div className="md:pl-20 space-y-10">
          <h1 className="font-bold text-secondary text-5xl text-center md:text-start">
            Education
          </h1>
          <div className="bg-additional px-5 py-7 flex space-x-3 rounded w-full items-center hover:bg-orange-700">
            <img
              src="https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg"
              className="bg-secondary p-7 py-9  rounded-full"
            />
            <div>
              <p className="text-secondary font-semibold">
                {details.secondaryEducationYear}
              </p>
              <p className="text-white font-bold text-xl">
                Secondary Education
              </p>
              <p className="text-gray-300 text-lg font-semibold">
                {details.secondaryEducation}
              </p>
            </div>
          </div>
          <div className="bg-additional px-5 py-7 flex space-x-3 rounded w-full items-center hover:bg-orange-700">
            <img
              src="https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg"
              className="bg-secondary p-7 py-9  rounded-full"
            />
            <div>
              <p className="text-secondary font-semibold">
                {details.higherEducationYear}
              </p>
              <p className="text-white font-bold text-xl">
                Higher Secondary Education
              </p>
              <p className="text-gray-300 text-lg font-semibold">
                {details.higherEducation}
              </p>
            </div>
          </div>
          <div className="bg-additional px-5 py-7 flex space-x-3 rounded items-center w-full hover:bg-orange-700">
            <img
              src="https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg"
              className="bg-secondary p-7 py-9  rounded-full"
            />
            <div>
              <p className="text-secondary font-semibold">
                {details.ugEducationYear}
              </p>
              <p className="text-white font-bold text-xl">{details.ugDegree}</p>
              <p className="text-gray-300 text-lg font-semibold">
                {details.ugEducation}
              </p>
            </div>
          </div>
        </div>
        <div className="md:ml-60">
          <img
            src="https://dev-portfolio-template.netlify.app/static/media/eduOrange.c61dcfc3.svg"
            alt="banner image"
            className="md:w-96"
          />
        </div>
      </div>
    </div>
  );
};
export default Education;
