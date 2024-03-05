import { faker } from "@faker-js/faker";

describe("Using Faker", () => {
  it("Generate unique data with faker", () => {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    const randomFish = faker.animal.fish();

    cy.log(randomName);
    cy.log(randomEmail);
    cy.log(randomFish);
  });
});
