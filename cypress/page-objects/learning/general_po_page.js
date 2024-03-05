export class GeneralPOPage {
  constructor() {
    this.someElementSelector = "selector";
  }

  logSomeElementSelector() {
    cy.log(this.someElementSelector);
  }
}
