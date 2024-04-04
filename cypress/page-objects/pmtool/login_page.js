import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.forgottenPasswordButton = "#forget_password";
    this.pageHeader = "h3.form-title";
    this.logoImg = ".login-page-logo img";
    this.rememberMeCheckbox = ".checkbox";
    this.alertDiv = "div.alert";
  }

  alertNotExist() {
    cy.get(this.alertDiv).should("not.exist");
    return this;
  }

  usernameHavePlacelhoder(placeholderValue) {
    cy.get(this.usernameInput).should(
      "have.attr",
      "placeholder",
      placeholderValue
    );
    return this;
  }

  usernameIsVisible() {
    cy.get(this.usernameInput).should("be.visible");
    return this;
  }

  usernameHaveValue(username) {
    cy.get(this.usernameInput).should("have.value", username);
    return this;
  }

  rememberMeHaveText(text) {
    cy.get(this.rememberMeCheckbox).should("contain.text", text);
    return this;
  }

  loginButtonHaveText(text) {
    cy.get(this.loginButton).should("have.text", text);
    return this;
  }

  passwordForgottenHaveText(text) {
    cy.get(this.forgottenPasswordButton).should("have.text", text);
    return this;
  }

  logoIsVisible() {
    cy.get(this.logoImg).should("be.visible");
    return this;
  }

  passwordHavePlacelhoder(placeholderValue) {
    cy.get(this.passwordInput).should(
      "have.attr",
      "placeholder",
      placeholderValue
    );
    return this;
  }

  passwordIsVisible() {
    cy.get(this.passwordInput).should("be.visible");
    return this;
  }

  pageHeaderHaveText(headerText) {
    cy.get(this.pageHeader).should("have.text", headerText);
    return this;
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

  rememberMeIsVisible() {
    cy.get(this.rememberMeCheckbox).should("be.visible");
    return this;
  }

  rememberMeHaveText(rememberMeText) {
    cy.get(this.rememberMeCheckbox).should("contain.text", rememberMeText);
    return this;
  }

  passwordForgottenIsVisible() {
    cy.get(this.forgottenPasswordButton).should("be.visible");
    return this;
  }

  passwordForgottenHaveText(elementText) {
    cy.get(this.forgottenPasswordButton).should("have.text", elementText);
    return this;
  }

  logoIsVisible() {
    cy.get(this.logoImg).should("be.visible");
    return this;
  }

  pageHeaderIsVisible() {
    cy.get(this.pageHeader).should("be.visible");
    return this;
  }

  pageHeaderHaveText(headerText) {
    cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }
}
