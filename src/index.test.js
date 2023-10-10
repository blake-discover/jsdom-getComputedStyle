const getJsDomStyle = require("./getJsdomStyle");

test("Returns correct style", async () => {
  const backgroundColor = await getJsDomStyle();
  expect(backgroundColor).toBe("rgb(127, 255, 212)");
});
