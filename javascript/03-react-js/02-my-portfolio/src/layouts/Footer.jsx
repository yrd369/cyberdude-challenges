const Footer = () => {
  return (
    <div className="bg-primary p-10 font-poppins">
      <div className="grid md:grid-cols-2 items-center">
        <div className="md:pl-20 space-y-10">
          <h1 className="font-bold text-secondary text-5xl text-center md:text-start">
            Contact
          </h1>
          <div>
            <label className="block text-secondary">Name</label>
            <input
              type="text"
              className="border-2 border-secondary rounded outline-none px-2 py-1 bg-primary w-full text-white"
            />
          </div>
          <div>
            <label className="block text-secondary">Email</label>
            <input
              type="email"
              className="border-2 border-secondary rounded outline-none px-2 py-1 bg-primary w-full text-white"
            />
          </div>
          <div>
            <label className="block text-secondary">Message</label>
            <input
              type="textarea"
              className="border-2 border-secondary rounded outline-none px-2 bg-primary w-full text-white gap-y-10 pb-20 pt-2"
            />
          </div>
          <div>
            <button className="bg-secondary px-3 py-1 rounded">
              Send Message
            </button>
          </div>
        </div>
        <div className="ml-72">
          <img src="https://dev-portfolio-template.netlify.app/static/media/contactsOrange.75754594.svg" className="w-96"/>
        </div>
      </div>
    </div>
  );
};
export default Footer;
