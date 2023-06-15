
const { connect } = require("./client");
const { setupInput } = require("./input");


console.group("connecting ...");
connect();

setupInput();
