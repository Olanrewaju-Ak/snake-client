const net = require("net");

//establishes a connection to the server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.group("connecting ...");
connect();
