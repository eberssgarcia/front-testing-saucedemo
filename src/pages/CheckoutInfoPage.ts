import { Page, expect } from "@playwright/test";

export class CheckoutInfoPage {
  constructor(private page: Page) {}

  firstName() { return this.page.getByRole("textbox", { name: /first name/i }); }
  lastName() { return this.page.getByRole("textbox", { name: /last name/i }); }
  postalCode() { return this.page.getByRole("textbox", { name: /zip|postal/i }); }
  continueButton() { return this.page.getByRole("button", { name: /continue/i }); }

  async fillInfo(first: string, last: string, zip: string) {
    await this.firstName().fill(first);
    await this.lastName().fill(last);
    await this.postalCode().fill(zip);
    await this.continueButton().click();
  }
}
