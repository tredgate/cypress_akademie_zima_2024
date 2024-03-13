import { LoginPage } from "./login_page";
import { ShoppingCartPage } from "./shopping_cart_page";

export class HomePage {
  constructor() {
    this.menuButton = "#react-burger-menu-btn";
    this.logoutButton = "#logout_sidebar_link";
    this.AddBackpackToCartButton =
      'button[data-test="add-to-cart-sauce-labs-backpack"]';
    this.cartButton = "#shopping_cart_container a";
  }

  clickMenu() {
    cy.get(this.menuButton).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }

  clickAddBackpackToCart() {
    cy.get(this.AddBackpackToCartButton).click();
    return this;
  }

  clickCart() {
    cy.get(this.cartButton).click();
    return new ShoppingCartPage();
  }
}
