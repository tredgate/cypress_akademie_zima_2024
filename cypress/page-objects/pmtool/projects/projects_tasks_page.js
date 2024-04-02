import { HeaderSection } from "../common/header_section";
import { CreateNewTaskModal } from "./create_new_task_modal";
import { ProjectInfoPage } from "./project_info_page";

export class ProjectsTasksPage extends HeaderSection {
  constructor() {
    super();
    this.addTaskButton = '[test_id="Add Task"]';
    this.projectInfoMenu = "div.navbar-header a.navbar-brand";
  }

  clickAddTask() {
    cy.get(this.addTaskButton).click();
    return new CreateNewTaskModal();
  }

  clickProjectInfo() {
    cy.get(this.projectInfoMenu).click();
    return new ProjectInfoPage();
  }
}
