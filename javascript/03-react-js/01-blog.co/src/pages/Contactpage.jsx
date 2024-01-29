import TypewriterComponent from "typewriter-effect";
import pic from "../assets/images/aboutpage-banner.png";
const Contactpage = () => {
  return (
    <section className="bg-additional">
      <h1 className="text-center font-Viga pt-10 text-2xl text-gray-900">
        CONTACT US
      </h1>
      <div className="container  p-14">
        <div className="grid md:grid-cols-2 gap-y-5 md:gap-y-5 md:gap-x-10 justify-center md:ml-20 items-center">
          <section className="">
            <div className="bg-white p-10 mx-auto md: rounded space-y-3">
              <h1 className="text-3xl text-gray-700">
                <TypewriterComponent
                  options={{
                    autoStart: true,
                    strings: ["Blog.co"],
                    pauseFor: 10000,
                    loop: true,
                  }}
                />
              </h1>
              <p className="font-Viga text-gray-700">
                Thank you for your interest in reaching out to us! Whether you
                have a question, suggestion, or just want to say hello, we're
                here and eager to hear from you. Please feel free to fill the
                from below to get in touch.
              </p>
            </div>
          </section>
          <section className="max-w-md">
            <div className="bg-white space-y-3 text-gray-900 rounded">
              <div className="p-10">
                <div>
                  <label className="block my-2">Your Name</label>
                  <input
                    type="text"
                    className="px-3 py-1 rounded w-full outline-none bg-gray-200"
                  ></input>
                </div>
                <div>
                  <label className="block my-2">Email</label>
                  <input
                    type="email"
                    className="px-3 py-1 rounded w-full outline-none bg-gray-200"
                  ></input>
                </div>
                <div>
                  <label className="block my-2">Message</label>
                  <input
                    type="message"
                    className="px-3 py-1 rounded w-full outline-none bg-gray-200"
                  ></input>
                </div>
                <div className="pt-5">
                  <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded w-full">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
export default Contactpage;
