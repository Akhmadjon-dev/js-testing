const { generateText } = require("./util");

test("should output name and age", () => {
  const text = generateText("Akhmadjon", 22);
  expect(text).toBe("Akhmadjon (22 years old)");
});
test("should not be valid response", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});
