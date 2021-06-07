const { generateText } = require("./util");

test("should output name and age", () => {
  const text = generateText("Akhmadjon", 22);
  expect(text).tobe("");
});
