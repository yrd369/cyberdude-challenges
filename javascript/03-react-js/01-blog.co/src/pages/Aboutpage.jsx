import banner from "../assets/images/aboutpage-banner.png";
const Aboutpage = () => {
  return (
    <div className="bg-secondary max-w-sm md:max-w-5xl mx-auto p-10 rounded relative">
      <div className="bg-additional rounded md:py-48 pr-48 md:max-w-5xl md:mx-auto">
        <h1 className="bg-[#fff] px-3 py-2 w-fit rounded-md absolute  top-14 md:top-16 left-10 md:left-16 text-xs md:text-xl font-semibold font-serif">
          About Us
        </h1>
        <p className="text-left pr-20">Dhayal Blog</p>
        <p className="text-left pr-20">I am Yogha Raj Dhayal. In this site I had attached my latest news.</p>
        <img
          src={banner}
          className="w-36 md:w-80 right-10 top-12 md:top-14 absolute"
        />
      </div>
    </div>
  );
};
export default Aboutpage;
