const http = require('node:http');

const hostname = '127.0.0.1';
const port = 1237;

const server = http.createServer((req, res) => {
  // console.log("how far my dear customer")
  console.log("welcome to my server here you are going to the printing world");
  res.setHeader("Content-Type", "application/json");
  res.end({
    details: "Hello belove client welcome to my world",
  });
});

server.listen(port, hostname, () => {
  console.log(`It is the new project of self learning`);
}); 