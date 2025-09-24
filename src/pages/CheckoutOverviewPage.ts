import { Page, expect } from "@playwright/test";

export class CheckoutOverviewPage {
  constructor(private page: Page) {}

  summaryInfo() { return this.page.locator(".summary_info"); }
  finishButton() { return this.page.getByRole("button", { name: /finish/i }); }

  async assertLoaded() {
    await expect(this.summaryInfo()).toBeVisible();
  }

  async finish() {
    await this.finishButton().click();
  }
}
