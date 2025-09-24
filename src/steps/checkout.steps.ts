import { When, Then } from "@cucumber/cucumber";
import type { TestWorld } from "../support/world";
import { CartPage } from "../pages/CartPage";
import { CheckoutInfoPage } from "../pages/CheckoutInfoPage";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage";

When("inicio el checkout", async function(this: TestWorld) {
  const cart = new CartPage(this.page);
  await cart.checkout();
});

When("completo mis datos: nombre {string}, apellido {string}, código {string}", async function(this: TestWorld, first: string, last: string, zip: string) {
  const info = new CheckoutInfoPage(this.page);
  await info.fillInfo(first, last, zip);
});

Then("veo el resumen y finalizo la compra", async function(this: TestWorld) {
  const overview = new CheckoutOverviewPage(this.page);
  await overview.assertLoaded();
  await overview.finish();
});

Then("debería ver la confirmación de compra", async function(this: TestWorld) {
  const complete = new CheckoutCompletePage(this.page);
  await complete.assertCompleted();
});
