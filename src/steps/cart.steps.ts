import { Given, When, Then } from "@cucumber/cucumber";
import type { TestWorld } from "../support/world";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";

Given("que estoy autenticado como {string} con {string}", async function (this: TestWorld, user: string, pass: string) {
  const login = new LoginPage(this.page);
  await login.goto();               // ✅ navega usando baseURL
  await login.login(user, pass);

  const products = new ProductsPage(this.page);
  await products.assertLoaded();
});


When("agrego el producto {string} al carrito", async function (name: string) {
  const { ProductsPage } = await import("../pages/ProductsPage");
  const { CartPage } = await import("../pages/CartPage");

  const products = new ProductsPage(this.page);

  // Si estoy en el carrito, vuelvo a Productos antes de intentar agregar
  if (!(await products.inventoryList().isVisible().catch(() => false))) {
    const cart = new CartPage(this.page);
    if (await cart.continueShoppingButton().isVisible().catch(() => false)) {
      await cart.continueShopping();
    }
    await products.assertLoaded();
  }

  await products.addProductToCartByName(name);
});


Then("el badge del carrito debería mostrar {int}", async function (this: TestWorld, count: number) {
  const products = new ProductsPage(this.page);
  await this.expect(products.cartBadge()).toHaveText(String(count));
});

When("voy al carrito", async function (this: TestWorld) {
  const products = new ProductsPage(this.page);
  await products.goToCart();
});

Then("debería ver en el carrito el producto {string}", async function (this: TestWorld, name: string) {
  const cart = new CartPage(this.page);
  await cart.assertHasItem(name);
});
