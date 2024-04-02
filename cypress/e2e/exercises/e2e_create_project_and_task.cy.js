import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";
import { faker } from "@faker-js/faker";

describe("Create new Project and Task E2E Test", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickProjects();
  });

  it("Create project and task", () => {
    const projectName = `FIFKA_self-exercise_${faker.number.int({
      min: 1000,
      max: 99999,
    })}`;
    const taskName = `FIFKA_TASK_${faker.number.int({
      min: 1000,
      max: 99999,
    })}`;
    const startDate = "2024-03-28";
    cy.log(projectName);
    cy.fixture("upload_test.txt").as("projectUploadFile");

    new ProjectsPage()
      .clickAddProject()
      .selectPriority("High")
      .selectStatus("Open")
      .typeProjectName(projectName)
      .insertFile()
      .typeStartDate(startDate)
      .clickSave()
      .clickAddTask()
      .typeName(taskName)
      .selectStatus("Open")
      .selectType("Change")
      .assignTask("Petr Fifka")
      .clickSave()
      .clickProjectInfo()
      .projectTitleHasText(projectName)
      .createdByHasText("Cypress Zima 2024")
      .dateAddedHasText("02/04/2024")
      .projectHavePriority("High")
      .projectHaveStatus("Open")
      .projectHaveStartDate("28/03/2024");
  });
});
