const { stderr, stdin } = require("process");

//event hadnler for standard input
const handleUserInput = (key) => {
  const stdout = process.stdout;
  if (key === "\u0003") {
    process.exit();
  }
  stdout.write(key);
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
