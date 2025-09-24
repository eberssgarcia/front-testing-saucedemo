import { setWorldConstructor, IWorldOptions, World as CucumberWorld } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page, expect } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

export interface TestWorld extends CucumberWorld {
  browser: Browser;
  context: BrowserContext;
  page: Page;
  expect: typeof expect;
}

class CustomWorld extends CucumberWorld implements TestWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  expect = expect;
  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
