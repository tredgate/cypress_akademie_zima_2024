import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Chai Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login header has text 'Login'", () => {
    cy.get("h3.form-title")
      .should("have.text", "Login")
      .should("contain.text", "Login");
  });

  it.skip('Failing: Login header has test "Login2"', () => {
    cy.get("h3.form-title").should("have.text", "Login2");
  });

  it("Lost password anchor has text", () => {
    cy.get("#forget_password").should("have.text", "Password forgotten?");
  });

  it("Username have value", () => {
    cy.get("#username").type("Test").should("have.value", "Test");
  });

  it("E-mail in Lost Password page has text", () => {
    new LoginPage().clickLostPassword();
    const validationText = "TestEmail";
    cy.get('[name="email"]')
      .type(validationText)
      .should("have.value", validationText);
  });

  it("Password input has form-control class", () => {
    cy.get("#password").should("have.class", "form-control");
  });

  it("Login button has btn-info class", () => {
    cy.get("[type='submit']").should("have.class", "btn-info");
  });

  it("Login button is visible and exist", () => {
    cy.get(".btn").should("be.visible").should("exist");
  });

  it("App Title is visible", () => {
    new LoginPage()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
    cy.get(".navbar-brand").should("be.visible");
  });

  it("Lost Password anchor exist", () => {
    cy.get("#forget_password").should("exist");
  });

  it("Username has placeholder 'Username", () => {
    cy.get("#username").should("have.attr", "placeholder", "Username");
  });

  it("Password has placeholder 'password", () => {
    cy.get("#password").should("have.attr", "placeholder", "Password");
  });
});
