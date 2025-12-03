import { test, expect } from "@playwright/test";

test("Verify prompt box", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", async function (dialog) {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("Mamta Devi!");
  });

  const promptEl = page.locator("#promptBtn");
  await promptEl.click();
  await expect(page.locator("#demo")).toHaveText(
    "Hello Mamta Devi!! How are you today?"
  );
});
