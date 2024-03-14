export class ShoppingCartPage {
  constructor() {
    this.removeItemButton = 'button[data-test="remove-sauce-labs-backpack"]';
  }

  clickRemoveItem() {
    cy.get(this.removeItemButton).click();
    return this;
  }
}
