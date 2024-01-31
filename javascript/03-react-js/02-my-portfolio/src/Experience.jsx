const Experience = () => {
  return (
    <div className="bg-primary p-10 font-poppins">
      <div className="grid md:grid-cols-2 items-center">
        <div className="px-20 space-y-10">
          <h1 className="font-bold text-secondary text-5xl">Experience</h1>
          <div className="bg-additional px-5 py-7 flex space-x-3 rounded">
            <img
              src="https://dev-portfolio-template.netlify.app/static/media/expImgWhite.0b896d9c.svg"
              className="bg-secondary p-5  rounded-full "
            />
            <div>
              <p className="text-secondary font-semibold">2023-2024</p>
              <p className="text-white font-bold text-xl">
                Junior Full Stack Engineer
              </p>
              <p className="text-gray-300 text-lg font-semibold">
                CyberDude Networks Pvt Ltd
              </p>
            </div>
          </div>
        </div>
        <div className="md:ml-60">
          <img
            src="https://dev-portfolio-template.netlify.app/static/media/expOrange.9383b2df.svg"
            className="w-96"
          />
        </div>
      </div>
    </div>
  );
};
export default Experience;
