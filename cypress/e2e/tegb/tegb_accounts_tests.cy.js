import { AccountsPage } from "../../page-objects/tegb/accounts_page";
import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page";

describe("TegB Accounts Tests", () => {
  beforeEach(() => {
    new TegBLoginPage()
      .openTegB()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin()
      .clickAccounts();
  });

  it("Accounts Title have text", () => {
    new AccountsPage().titleHaveText("Account");
  });
});
