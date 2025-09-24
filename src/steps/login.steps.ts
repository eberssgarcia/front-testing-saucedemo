import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import type { TestWorld } from "../support/world";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

Given("que estoy en la página de inicio de sesión", async function(this: TestWorld) {
  const login = new LoginPage(this.page);
  await login.goto();
  await login.assertOnPage();
});

When("inicio sesión con usuario {string} y contraseña {string}", async function(this: TestWorld, user: string, pass: string) {
  const login = new LoginPage(this.page);
  await login.login(user, pass);
});

Then("debería ver la página de productos", async function(this: TestWorld) {
  const products = new ProductsPage(this.page);
  await products.assertLoaded();
});

Then("debería ver un mensaje de error que contiene {string}", async function(this: TestWorld, message: string) {
  // error container can appear after login failure
  const login = new LoginPage(this.page);
  await this.expect(login.errorHeading()).toContainText(message);
});
