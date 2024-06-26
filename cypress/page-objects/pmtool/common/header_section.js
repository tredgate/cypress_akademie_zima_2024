import { LoginPage } from "../login_page";
import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection {
  constructor(path) {
    super(path);
    this.profileButton = "#user_dropdown > .dropdown-toggle";
    this.logoutButton = "#logout > a";
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
