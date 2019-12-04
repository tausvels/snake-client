const net = require("net");

const server = net.createServer();

server.on("connection", client => { // client is the callback
  console.log("New client connected!");
  client.write("Hello there!");

  //connection callback
  client.setEncoding("utf8"); // interpret data as text
  
  client.on("data", data => { // data is the callback here which corresponds to 'Hello there'.
    console.log("Message from client: ", data);
  });

  client.on("close", ()=>{
    console.log("Client disconnected")
  })
  

});

server.on("close", end =>{
  console.log("Connection terminated")
})



server.listen(3000, () => {
  //8000 works for me.
  console.log("Server listening on port 3000!");
});
