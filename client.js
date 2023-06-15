const net = require("net");
//establishes a connection to the server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  // once a connection event is emmitted, the connect event handler prints this message
  conn.on("connect", () => {
    console.log("connection has been successfully established");
    conn.write("Name: sbm");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.group("connecting ...");
connect();

module.exports = { connect };
