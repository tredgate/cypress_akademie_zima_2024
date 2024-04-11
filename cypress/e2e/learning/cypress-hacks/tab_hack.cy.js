describe("Tab hack checks", () => {
  it("Modify tab to open in same screen", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    //! Toto nebude fungovat cy.get("#contact-us").click();
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').should("be.visible");
  });
});
