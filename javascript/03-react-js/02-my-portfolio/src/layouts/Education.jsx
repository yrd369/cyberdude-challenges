const Education = () => {
  return (
    <div className="bg-primary p-10 font-poppins">
      <div className="grid md:grid-cols-2 items-center">
        <div className="md:pl-20 space-y-10">
          <h1 className="font-bold text-secondary text-5xl">Education</h1>
          <div className="bg-additional px-5 py-7 flex space-x-3 rounded w-full">
            <img
              src="https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg"
              className="bg-secondary px-7  rounded-full"
            />
            <div>
              <p className="text-secondary font-semibold">2017-2018</p>
              <p className="text-white font-bold text-xl">
                Secondary Education
              </p>
              <p className="text-gray-300 text-lg font-semibold">
                Vivekananda Vidyalaya Matric Higher Secondary School
              </p>
            </div>
          </div>
          <div className="bg-additional px-5 py-7 flex space-x-3 rounded">
            <img
              src="https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg"
              className="bg-secondary px-7  rounded-full"
            />
            <div>
              <p className="text-secondary font-semibold">2019-2020</p>
              <p className="text-white font-bold text-xl">
                Higher Secondary Education
              </p>
              <p className="text-gray-300 text-lg font-semibold">
                Vivekananda Vidyalaya Matric Higher Secondary School
              </p>
            </div>
          </div>
          <div className="bg-additional px-5 py-7 flex space-x-3 rounded">
            <img
              src="https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg"
              className="bg-secondary px-7  rounded-full"
            />
            <div>
              <p className="text-secondary font-semibold">2020-2023</p>
              <p className="text-white font-bold text-xl">
                Bsc Computer technology
              </p>
              <p className="text-gray-300 text-lg font-semibold">
                Sri Krishna Arts and Science College
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
