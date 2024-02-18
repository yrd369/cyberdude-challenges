const fs = require("fs");
const data = require("./data/data.json");
function createDetail() {
  fs.mkdir("cities", () => {});
  data.map((city) => {
    fs.mkdir(`cities/${city.cityName}`, () => {});
    city.popularPlaces.map((place) => {
      fs.writeFile(
        `cities/${city.cityName}/${place.place}`,
        `${place.desc}`,
        () => {}
      );
    });
  });
}
createDetail();
