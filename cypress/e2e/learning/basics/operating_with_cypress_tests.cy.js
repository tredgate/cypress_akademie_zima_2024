describe("Operating with Cypress Tests", () => {
  it("Failed Login Test", () => {
    cy.visit("https://tredgate.com/pmtool/");
    cy.get("#username").type("admin");
    cy.get("#password").type("admin");
    cy.get(".btn").click();
    // ! Tento get spadne, protože selektor neexistuje
    //cy.get("#username2");
  });

  it("Passed Login Test", () => {
    cy.visit("https://tredgate.com/pmtool/");
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").click();
  });
});
