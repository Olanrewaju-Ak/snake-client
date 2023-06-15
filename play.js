const { stderr, stdin } = require("process");
const { connect } = require("./client");

//setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  const stdout = process.stdout;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = (key) => {
    if (key === "\u0003") {
      process.exit();
    }
    stdout.write(key);
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();
