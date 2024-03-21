import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Mocha Tests", () => {
  beforeEach(() => {
    cy.viewport(800, 600);
    cy.log("Jsem v beforeEach");
  });

  it("Visit pmtool", () => {
    new LoginPage().openPmtool();
  });

  it("Visit pmtool and login", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
    cy.get("Ahoj").click();
  });

  afterEach(() => {
    cy.log("Jsem v afterEach");
  });
});
