import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Login Page Atomic Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  context("Username input tests", () => {
    it("Username is visible", () => {
      new LoginPage().usernameIsVisible();
    });

    it("Username have placeholder", () => {
      new LoginPage().usernameHavePlacelhoder("Username");
    });

    it("Username have value after type", () => {
      const username = "user";
      new LoginPage().typeUsername(username).usernameHaveValue(username);
    });
  });

  context("Password input tests", () => {
    it("Password is visible", () => {
      new LoginPage().passwordIsVisible();
    });

    it("Password have placeholder", () => {
      new LoginPage().passwordHavePlacelhoder("Password");
    });
  });

  context("Page Header Tests", () => {
    it("Page Header is visible", () => {
      new LoginPage().pageHeaderIsVisible();
    });

    it("Page Header has text", () => {
      new LoginPage().pageHeaderHaveText("Login");
    });
  });

  context("Lost Password Anchor Tests", () => {
    it("Lost password anchor is visible", () => {
      new LoginPage().passwordForgottenIsVisible();
    });

    it("Lost password have test", () => {
      new LoginPage().passwordForgottenHaveText("Password forgotten?");
    });
  });

  context("Remember Me Checkbox Tests", () => {
    it("Remember Me Checkbox is visible", () => {
      new LoginPage().rememberMeIsVisible();
    });

    it("Remember Me Checkbox has text", () => {
      new LoginPage().rememberMeHaveText("Remember Me");
    });
  });

  context("Logo tests", () => {
    it("Logo is visible", () => {
      new LoginPage().logoIsVisible();
    });
  });
});
