const Hero = () => {
  return (
    <div className="bg-[#FBE1DD] container mx-auto rounded-xl px-28 mt-2 mb-12 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-semibold mb-2 track-tight text-center">CookEase</h1>

        <p className="text-center tracking-wide">A recipe is a story that ends with a good meal.</p>
      </div>
      <img
        src="https://assets-global.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298982cb93c68_63158fe13a63792e2ddc502c_DrawKit0026_Cooking_%2526_Food_Thumbnail.png"
        className="w-96"
      />
    </div>
  );
};
export default Hero;
