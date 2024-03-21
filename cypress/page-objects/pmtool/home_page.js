import { LoginPage } from "./login_page";

export class HomePage {
  constructor() {
    this.profileButton = "#user_dropdown > .dropdown-toggle";
    this.logoutButton = "#logout > a";
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }

  clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
}
