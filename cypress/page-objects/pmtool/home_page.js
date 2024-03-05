export class HomePage {
  constructor() {
    this.profileButton = "#user_dropdown > .dropdown-toggle";
    this.logoutButton = "cy.get('#logout > a')";
  }

  clickProfile() {
    cy.get(this.profileButton).click();
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
  }
}
