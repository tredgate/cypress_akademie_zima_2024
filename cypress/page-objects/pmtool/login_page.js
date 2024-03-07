import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.forgottenPasswordButton = "#forget_password";
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
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

  clickLostPassword() {
    cy.get(this.forgottenPasswordButton).click();
    return new LostPasswordPage();
  }
}
