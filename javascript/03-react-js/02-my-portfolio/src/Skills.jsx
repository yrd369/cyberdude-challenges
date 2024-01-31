const Skills = () => {
  return (
    <div className="bg-primary font-poppins px-32 py-16">
      <h1 className="text-5xl text-secondary font-bold text-center pb-20">Skills</h1>
      <div className="grid md:grid-cols-4  mx-auto place-content-center space-y-10 md:space-y-0">
        <div className="bg-primary w-fit px-20 py-8 rounded space-y-3 shadow-lg shadow-gray-700 flex-col items-center">
          <img
            src="https://dev-portfolio-template.netlify.app/static/media/html.6a342d61.svg"
            className="w-16"
          />
          <p className="text-gray-300 font-semibold text-center">HTML</p>
        </div>
        <div className="bg-primary w-fit px-20 py-8 rounded space-y-3 shadow-lg shadow-gray-800 flex-col justify-center items-center">
          <img
            src="https://dev-portfolio-template.netlify.app/static/media/css.43b6f4bd.svg"
            className="w-16"
          />
          <p className="text-gray-300 font-semibold text-center">CSS</p>
        </div>
        <div className="bg-primary w-fit px-20 py-8 rounded space-y-3 shadow-lg shadow-gray-800 flex-col justify-center items-center">
          <img
            src="https://dev-portfolio-template.netlify.app/static/media/javascript.e9360603.svg"
            className="w-16"
          />
          <p className="text-gray-300 font-semibold text-center">JavaScript</p>
        </div>
        <div className="bg-primary w-fit px-20 py-10 rounded space-y-3 shadow-lg shadow-gray-800">
          <img
            src="https://dev-portfolio-template.netlify.app/static/media/react.2b6a0717.svg"
            className="w-16"
          />
          <p className="text-gray-300 font-semibold">React Js</p>
        </div>
      </div>
    </div>
  );
};
export default Skills;
