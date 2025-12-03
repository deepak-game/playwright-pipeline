import { test, expect } from "@playwright/test";

test("checking browser", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await expect(page).toHaveURL("https://www.demoblaze.com/");

  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("cgk04");
  await page.locator("#loginpassword").fill("Ram@123#");
  await page.locator("button[onclick='logIn()']").click();
  await expect(page.locator("#nameofuser")).toHaveText("Welcome cgk04");
  await page.waitForTimeout(1000);
});
