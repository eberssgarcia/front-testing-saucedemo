import { Page, expect } from "@playwright/test";

export class CheckoutCompletePage {
  constructor(private page: Page) {}

  completeHeader() { return this.page.locator(".complete-header"); }

  async assertCompleted() {
    await expect(this.completeHeader()).toHaveText(/thank you for your order/i);
  }
}
