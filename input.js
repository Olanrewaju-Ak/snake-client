const { stderr, stdin } = require("process");

//event hadnler for standard input
const handleUserInput = (key) => {
  const stdout = process.stdout;
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w" || key === "W") {
    stdout.write("Move: up\n");
  }
  if (key === "a" || key === "A") {
    stdout.write("Move: left\n");
  }
  if (key === "s" || key === "S") {
    stdout.write("Move: down\n");
  }
  if (key === "d" || key === "D") {
    stdout.write("Move: right\n");
  }
  // stdout.write(key);
};

//setup interface to handle user input from stdin
const setupInput = function () {
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
