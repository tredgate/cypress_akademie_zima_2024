import { customElement } from "../../helpers/custom_elements";
import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "https://tredgate.com/pmtool";
    this.usernameInput = customElement("#username");
    this.passwordInput = customElement("#password");
    this.loginButton = customElement(".btn");
    this.forgottenPasswordButton = customElement("#forget_password");
    this.pageHeader = customElement("h3.form-title");
    this.logoImg = customElement(".login-page-logo img");
    this.rememberMeCheckbox = customElement(".checkbox");
    this.alertDiv = customElement("div.alert");
  }

  alertNotExist() {
    this.alertDiv.get().should("not.exist");
    return this;
  }

  usernameHavePlacelhoder(placeholderValue) {
    this.usernameInput
      .get()
      .should("have.attr", "placeholder", placeholderValue);
    return this;
  }

  usernameIsVisible() {
    this.usernameInput.get().should("be.visible");
    return this;
  }

  usernameHaveValue(username) {
    this.usernameInput.get().should("have.value", username);
    return this;
  }

  rememberMeHaveText(text) {
    this.rememberMeCheckbox.get().should("contain.text", text);
    return this;
  }

  loginButtonHaveText(text) {
    this.loginButton.get().should("have.text", text);
    return this;
  }

  passwordForgottenHaveText(text) {
    this.forgottenPasswordButton.get().should("have.text", text);
    return this;
  }

  logoIsVisible() {
    this.logoImg.get().should("be.visible");
    return this;
  }

  passwordHavePlacelhoder(placeholderValue) {
    this.passwordInput
      .get()
      .should("have.attr", "placeholder", placeholderValue);
    return this;
  }

  passwordIsVisible() {
    this.passwordInput.get().should("be.visible");
    return this;
  }

  pageHeaderHaveText(headerText) {
    this.pageHeader.get().should("have.text", headerText);
    return this;
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.get().click();
    return new HomePage();
  }

  clickLostPassword() {
    this.forgottenPasswordButton.get().click();
    return new LostPasswordPage();
  }

  rememberMeIsVisible() {
    this.rememberMeCheckbox.get().should("be.visible");
    return this;
  }

  rememberMeHaveText(rememberMeText) {
    this.rememberMeCheckbox.get().should("contain.text", rememberMeText);
    return this;
  }

  passwordForgottenIsVisible() {
    this.forgottenPasswordButton.get().should("be.visible");
    return this;
  }

  passwordForgottenHaveText(elementText) {
    this.forgottenPasswordButton.get().should("have.text", elementText);
    return this;
  }

  logoIsVisible() {
    this.logoImg.get().should("be.visible");
    return this;
  }

  pageHeaderIsVisible() {
    this.pageHeader.get().should("be.visible");
    return this;
  }

  pageHeaderHaveText(headerText) {
    this.pageHeader.get().should("have.text", headerText);
    return this;
  }
}
