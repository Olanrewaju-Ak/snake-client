const { stderr, stdin } = require("process");
// stores the active TCP object sent from the server
let connection;

//event hadnler for standard input
const handleUserInput = (key) => {
  const stdout = process.stdout;
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w" || key === "W") {
    connection.write("Move: up\n");
  }
  if (key === "a" || key === "A") {
    connection.write("Move: left\n");
  }
  if (key === "s" || key === "S") {
    connection.write("Move: down\n");
  }
  if (key === "d" || key === "D") {
    connection.write("Move: right\n");
  }
  // stdout.write(key);
};

//setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};
