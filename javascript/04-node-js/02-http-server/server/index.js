const http = require("http");
const data = require("./data/data.json");
const serverPort = 3690;
http
  .createServer((req, res) => {
    res.write(JSON.stringify(data));
    res.end()
  })
  .listen(serverPort, () => {
    console.log(`server is running on: ${serverPort}`);
  });
