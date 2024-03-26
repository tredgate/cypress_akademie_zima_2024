import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Using Aliases", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Checking login placeholders consistency", () => {
    cy.get("#username").invoke("attr", "placeholder").as("usernamePlaceholder");
    cy.get("#forget_password").click();
    cy.get("#back-btn").click();
    cy.get("@usernamePlaceholder").then((placeholder) => {
      cy.log(placeholder);
      cy.get("#username").should("have.attr", "placeholder", placeholder);
    });
  });

  it("Password input placeholder is consistent", () => {
    cy.get("#password").invoke("attr", "placeholder").as("passwordPlaceholder");

    new LoginPage()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .clickProfile()
      .clickLogout();

    cy.get("@passwordPlaceholder").then((placeholder) => {
      cy.log(placeholder);
      cy.get("#password").should("have.attr", "placeholder", placeholder);
    });
  });
});
