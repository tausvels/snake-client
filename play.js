//const net = require('net');
const connect = require("./client");

/**
 * Establishes connection with the game server
 */
console.log("Connecting ...");
connect.connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (key){
    if(key === "\u0003"){
      process.exit()
    }
  }
  stdin.on("data", handleUserInput);
  return stdin;
};
setupInput();