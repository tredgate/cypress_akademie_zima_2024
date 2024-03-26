import { HeaderSection } from "./common/header_section";
import { LoginPage } from "./login_page";
import { ProjectsPage } from "./projects_page";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }
}
