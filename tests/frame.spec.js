import { test, expect } from "@playwright/test";

test("getting frame", async function ({ page }) {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame_1 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });

  await frame_1.fill("//input[@name='mytext1']", "frame await!");
  await page.waitForTimeout(1000);
});

// test("getting frame", async ({ page }) => {
//   await page.goto("https://ui.vision/demo/webtest/frames/");

//   const frame_1 = page.frameLocator("frame[src='frame_1.html']");

//   await frame_1.locator("//input[@name='mytext1']").fill("Much await!");
//   await page.waitForTimeout(2000);
// });
