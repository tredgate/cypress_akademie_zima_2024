import { ProjectsTasksPage } from "./projects_tasks_page";

export class CreateNewTaskModal {
  constructor() {
    this.typeSelect = '[data-testid="Type"] select';
    this.statusSelect = '[data-testid="Status"] select';
    this.nameInput = '[data-testid="Name"] input';
    this.assigneeLabel = ".checkboxes_list label";
    this.saveButton = '[type="submit"]';
  }

  selectType(taskType) {
    cy.get(this.typeSelect).select(taskType);
    return this;
  }

  selectStatus(taskStatus) {
    cy.get(this.statusSelect).select(taskStatus);
    return this;
  }

  typeName(taskName) {
    cy.get(this.nameInput).type(taskName);
    return this;
  }

  assignTask(fullName) {
    cy.contains(this.assigneeLabel, fullName).click();
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new ProjectsTasksPage();
  }
}
