const { connect } = require("./client");
const { setupInput } = require("./input");

console.group("connecting ...");
// connect();

const connectObject = connect();

setupInput(connectObject);
