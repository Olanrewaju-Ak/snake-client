const {
  MOVE_UP_KEY,
  MOVE_RIGHT_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MESSAGES
} = require("./constants");

// stores the active TCP object sent from the server
let connection;

//event handler for standard input
const handleUserInput = (key) => {
  key = key.toUpperCase();

  if (key === "\u0003") {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  // to get the messages from the object
  for (const prompt in MESSAGES) {
    if (key === prompt) {
      connection.write(`Say: ${MESSAGES[prompt]}`);
    }
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
