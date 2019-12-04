const net = require("net");

const server = net.createServer();

server.on("connection", client => {
  console.log("New client connected!");
  client.write("Hello there!");

  //connection callback
  client.setEncoding("utf8"); // interpret data as text
  client.on("data", data => {
    console.log("Message from client: ", data);
  });
});

server.listen(8000, () => {
  //8000 works for me.
  console.log("Server listening on port 8000!");
});
