import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe(
  "Users Page Atomic Tests with customElement",
  { testIsolation: false },
  () => {
    before(() => {
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();

      new LoginPage()
        .openPmtool()
        .typeUsername(Cypress.env("pmtool_username"))
        .typePassword(Cypress.env("pmtool_password"))
        .clickLogin();
      new UsersPage().visit();
    });

    context("Title tests", () => {
      it("Title is visible", () => {
        new UsersPage().pageTitle.isVisible();
      });

      it("Title have text", () => {
        new UsersPage().pageTitle.hasText("Users");
      });
    });

    context("Add user button tests", () => {
      it("Add user button is visible", () => {
        new UsersPage().addUserButton.isVisible();
      });

      it("Add user button have text", () => {
        new UsersPage().addUserButton.hasText("Add User");
      });
    });
  }
);
