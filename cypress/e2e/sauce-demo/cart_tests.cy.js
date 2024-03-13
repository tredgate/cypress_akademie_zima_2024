import { LoginPage } from "../../page-objects/sauce-demo/login_page";

describe("Sauce Demo Cart Tests", () => {
  it("Add item and remove it from a cart test", () => {
    new LoginPage()
      .openSauceDemo()
      .typeUsername("standard_user")
      .typePassword("secret_sauce")
      .clickLogin()
      .clickAddBackpackToCart()
      .clickCart()
      .clickRemoveItem();
  });
});
