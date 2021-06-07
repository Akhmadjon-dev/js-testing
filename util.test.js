const { generateText, checkAndValidate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Akhmadjon", 22);
  expect(text).toBe("Akhmadjon (22 years old)");
});

test("should not be valid response", () => {
  const text = checkAndValidate("Akhmadjon", 22);
  expect(text).toBe("Akhmadjon (22 years old)");
});
