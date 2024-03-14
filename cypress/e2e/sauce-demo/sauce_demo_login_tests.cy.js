import { LoginPage } from "../../page-objects/sauce-demo/login_page";

describe("Sauce Demo Login Tests", () => {
  it("Login Test", () => {
    new LoginPage()
      .openSauceDemo()
      .typeUsername("standard_user")
      .typePassword("secret_sauce")
      .clickLogin();
  });

  it("Login and Logout Test", () => {
    new LoginPage()
      .openSauceDemo()
      .typeUsername("standard_user")
      .typePassword("secret_sauce")
      .clickLogin()
      .clickMenu()
      .clickLogout();
  });
});
