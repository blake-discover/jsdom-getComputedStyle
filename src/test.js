const { JSDOM } = require("jsdom");

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      button { background-color: rgb(127, 255, 212); }
      button:hover { background-color: rgb(255, 228, 196); }
    </style>
  </head>
  <body>
    <button>Submit</button>
  </body>
</html>
`;

const { window } = new JSDOM(html);

const button = window.document.querySelector("button");
const styles = window.getComputedStyle(button);

console.log(styles.getPropertyValue("background-color"));
