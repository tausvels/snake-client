const net = require('net');
const {IP, PORT} = require("./constants");
const connect = function() {
    const conn = net.createConnection({ 
      host: IP,
      port: PORT
    });
    
    // interpret incoming data as text
    conn.setEncoding('utf8');

    conn.on("connect", () => { // On CONNECTION, client sends to server.
        console.log("Successfully Connected!!!")
        conn.write("Name: TEK");
        // setInterval(()=>{
        //     conn.write("Move: up")
        // },50)
    });

    conn.on("data", (data) =>{
        console.log(data)
    })

    
    return conn;
}

module.exports = {connect};