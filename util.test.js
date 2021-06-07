const puppeteer = require("puppeteer");
const { generateText, checkAndValidate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Akhmadjon", 22);
  expect(text).toBe("Akhmadjon (22 years old)");
});

test("should not be valid response", () => {
  const text = checkAndValidate("Akhmadjon", 22);
  expect(text).toBe("Akhmadjon (22 years old)");
});

test("should should create element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto(
    "file:///Users/akhmadjon/Documents/projects/self/js-testing/academind/js-testing-introduction/index.html"
  );
  await page.click("input#name");
  await page.type("input#name", "Akhmadjon");
  await page.click("input#age");
  await page.type("input#age", "22");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Akhmadjon (22 years old)");
}, 10000);
