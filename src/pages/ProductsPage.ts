import { Page, expect } from "@playwright/test";

export class ProductsPage {
  constructor(private page: Page) {}

  title() { return this.page.locator(".title"); }
  inventoryList() { return this.page.locator(".inventory_list"); }
  cartLink() { return this.page.locator(".shopping_cart_link"); }
  cartBadge() { return this.page.locator(".shopping_cart_badge"); }

  async assertLoaded() {
    await expect(this.title()).toHaveText(/products/i);
    await expect(this.inventoryList()).toBeVisible();
  }

  async addProductToCartByName(name: string) {
    const item = this.page.locator(".inventory_item").filter({ hasText: name });
    await item.getByRole("button", { name: /add to cart/i }).click();
  }
  

  async goToCart() {
    await this.cartLink().click();
  }
}
