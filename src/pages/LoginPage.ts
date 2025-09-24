import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

async goto() {
  const base = process.env.BASE_URL || "https://www.saucedemo.com";
  console.log("Navigating to", base + "/");
  await this.page.goto(base + "/");
}


  usernameInput() { return this.page.locator('[data-test="username"]'); }
  passwordInput() { return this.page.locator('[data-test="password"]'); }
  loginButton()   { return this.page.locator('[data-test="login-button"]'); }

  errorHeading()  { return this.page.locator('h3[data-test="error"]'); }

  async login(username: string, password: string) {
    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }

  async assertOnPage() {
    await expect(this.usernameInput()).toBeVisible();
  }
}
