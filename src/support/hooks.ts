import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import type { TestWorld } from "./world";

let sharedBrowser: any;

BeforeAll(async function() {
  sharedBrowser = await chromium.launch({ headless: process.env.HEADLESS !== "false" });
});

AfterAll(async function() {
  await sharedBrowser?.close();
});

Before(async function(this: TestWorld) {
  this.browser = sharedBrowser;
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function(this: TestWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    await this.page.screenshot({ path: `reports/screenshot-${Date.now()}.png` });
  }
  await this.context.close();
});
