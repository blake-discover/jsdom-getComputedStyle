const { JSDOM } = require("jsdom");
const path = require("path");

const file = path.resolve(__dirname, "index.html");

async function getJsDomStyle() {
  return JSDOM.fromFile(file).then(({ window }) => {
    const button = window.document.querySelector("button");
    const styles = window.getComputedStyle(button);
    return styles.getPropertyValue("background-color");
  });
}

module.exports = getJsDomStyle;
