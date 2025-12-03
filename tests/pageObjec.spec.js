import { test, expect } from "@playwright/test";
import Login from "./login";

test("Do Login", async ({ page }) => {
  const login = new Login(page);
  await login.goto();
  await login.performLogin();
  await page.waitForTimeout(5.0);
});
