import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Lost Passwords tests", () => {
  it("E2E lost password test", () => {
    new LoginPage()
      .openPmtool()
      .clickLostPassword()
      .typeUsername("test")
      .typeEmail("test@tredgate.cz")
      .clickSend();
  });

  it("Open Lost Password page and return back", () => {
    new LoginPage().openPmtool().clickLostPassword().clickBack();
  });
});
