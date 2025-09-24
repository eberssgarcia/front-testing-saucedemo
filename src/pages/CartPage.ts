import { Page, expect } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  cartItems() { return this.page.locator(".cart_item"); }
  itemByName(name: string) { return this.cartItems().filter({ hasText: name }); }
  checkoutButton() { return this.page.getByRole("button", { name: /checkout/i }); }

  async assertHasItem(name: string) {
    await expect(this.itemByName(name)).toHaveCount(1);
  }

  async checkout() {
    await this.checkoutButton().click();
  }

  // + abajo de checkoutButton()
continueShoppingButton() { return this.page.locator('[data-test="continue-shopping"]'); }

// + método:
async continueShopping() {
  await this.continueShoppingButton().click();
}
}
