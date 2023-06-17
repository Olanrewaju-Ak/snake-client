const net = require("net");

const { IP, PORT } = require("./constants");

//establishes a connection to the server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  // once a connection event is emmitted, the connect event handler prints this message
  conn.on("connect", () => {
    console.log("connection has been successfully established");
    conn.write("Name: OBO");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
