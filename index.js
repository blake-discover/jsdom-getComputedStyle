const { JSDOM } = require("jsdom");

const options = {
  ... your options here ...
};
const dom = new JSDOM(`
  ... your HTML here ...
`, options);

// ... your code that reproduces the problem here, probably using dom.window ...