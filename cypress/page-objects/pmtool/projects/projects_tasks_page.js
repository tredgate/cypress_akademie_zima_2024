import { HeaderSection } from "../common/header_section";
import { CreateNewTaskModal } from "./create_new_task_modal";
import { ProjectInfoPage } from "./project_info_page";

export class ProjectsTasksPage extends HeaderSection {
  /**
   *
   * @param {projectId} projectId used for direct page opening in Atomic Tests
   */
  constructor(projectId = "") {
    super(`module=items/items&path=21-${projectId}/22`);
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
