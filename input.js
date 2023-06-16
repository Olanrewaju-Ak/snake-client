// stores the active TCP object sent from the server
let connection;

//event handler for standard input
const handleUserInput = (key) => {
  let message = "ouch!";
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w" || key === "W") {
    connection.write("Move: up");
  }
  if (key === "a" || key === "A") {
    connection.write("Move: left");
  }
  if (key === "s" || key === "S") {
    connection.write("Move: down");
  }
  if (key === "d" || key === "D") {
    connection.write("Move: right");
  }

  if (key === "m" || key === "M") {
    connection.write(`Say: ${message}`);
  }
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
