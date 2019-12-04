const net = require('net');
const conn = net.createConnection({
  host: "192.168.88.173", // change to IP address
  port: 3000
});

conn.setEncoding("utf8"); // interpret data as text

conn.on("data", data => { // data received from SERVER
  console.log("Server says: ", data);
});

conn.on("connect", () => { // On CONNECTION, client sends to server.
  conn.write("Hello from Tausif...HI!!!");
});
