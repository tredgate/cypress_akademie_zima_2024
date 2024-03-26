import { fakerCS_CZ as faker } from "@faker-js/faker";

describe("Faker", () => {
  it("Czech faker", () => {
    const czechPhone = faker.phone.number("+420#########");
    // alternativně: const czechPhone = faker.phone.number("+420737######");
    cy.log(czechPhone);
  });
});
