import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login page tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Page header has text 'Login'", () => {
    new LoginPage().pageHeaderHaveText("Login");
  });

  it("Visibility, placeholders, texts Tests", () => {
    new LoginPage()
      .usernameHavePlacelhoder("Username")
      .passwordHavePlacelhoder("Password")
      .rememberMeHaveText("Remember Me")
      .loginButtonHaveText("Login")
      .passwordForgottenHaveText("Password forgotten?")
      .logoIsVisible();
  });

  it("Alert not exist after open pmtool", () => {
    new LoginPage().alertNotExist();
  });
});
