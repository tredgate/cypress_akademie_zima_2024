import { HomePage } from "../../../page-objects/pmtool/home_page";
import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Polymorphism tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
  });

  it("Logout via polymorphism class", () => {
    new HomePage().clickProfile().clickLogout();
  });

  it("Open Projects and logout", () => {
    new HomePage().clickProjects().clickProfile().clickLogout();
  });

  it.only("Open Projects, Dashboard, Users and logout", () => {
    new HomePage()
      .clickProjects()
      .clickDashboard()
      .clickUsers()
      .clickProfile()
      .clickLogout();
  });
});
