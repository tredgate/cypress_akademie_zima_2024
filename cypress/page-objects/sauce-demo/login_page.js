import { HomePage } from "./home_page";

export class LoginPage {
  constructor() {
    this.sauceDemoUrl = "https://www.saucedemo.com/";
    this.usernameInput = "#user-name";
    this.passwordInput = "#password";
    this.loginButton = "#login-button";
  }

  openSauceDemo() {
    cy.visit(this.sauceDemoUrl);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new HomePage();
  }
}
