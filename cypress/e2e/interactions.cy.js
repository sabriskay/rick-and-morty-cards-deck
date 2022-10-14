/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays two todo items by default", () => {
    cy.get("[data-cy=playground]").should("be.visible");

    // When no element clicked, all back should be visible and no front should be visible
    cy.get("[data-cy=front]").should("not.be.visible");
    cy.get("[data-cy=back]").should("be.visible");

    // Blur should not be visible if no element active
    cy.get("[data-cy=blur]").should(
      "have.css",
      "backdrop-filter",
      "opacity(0)",
    );

    // Click the card to activate it
    cy.get("[data-cy=card]").first().click({ force: true });

    // Wait
    cy.wait(1000);

    // When active back should be not visible, and front should
    cy.get("[data-cy=front]").first().should("be.visible");
    cy.get("[data-cy=back]").first().should("not.be.visible");

    // Blur should be visible if element active
    cy.get("[data-cy=blur]").should(
      "have.css",
      "backdrop-filter",
      "opacity(1) blur(10px)",
    );

    // The rest should remain the same
    cy.get("[data-cy=front]").first().nextAll().should("not.be.visible");

    // Click other element
    cy.get("[data-cy=card]").eq(1).click({ force: true });

    // First element should not be visible anymore
    cy.get("[data-cy=front]").first().should("not.be.visible");
    cy.get("[data-cy=back]").first().should("be.visible");

    // Second element should be visible
    cy.get("[data-cy=front]").eq(1).should("be.visible");
    cy.get("[data-cy=back]").eq(1).should("not.be.visible");
  });
});
