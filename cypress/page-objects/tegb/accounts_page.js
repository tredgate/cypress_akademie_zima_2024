import { customElement } from "../../helpers/custom_elements";

export class AccountsPage {
  constructor() {
    this.pageTitle = customElement('[data-testid="title"]');
  }

  titleHaveText(titleText) {
    this.pageTitle.hasText(titleText);
    return this;
  }
}
