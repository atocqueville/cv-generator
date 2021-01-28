const puppeteer = require("puppeteer");

async function generate() {
  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  await page.goto("http://localhost:3000");
  await page.pdf({
    path: "./generated/my-cv.pdf",
    format: "A4",
  });
  await browser.close();
  console.log("pdf generated");
}

generate();
