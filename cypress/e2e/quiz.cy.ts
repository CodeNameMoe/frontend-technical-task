describe("Quiz Application", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("div").should("exist");
    cy.get("h1", { timeout: 15000 }).should("be.visible");
    cy.get('[data-testid="toggle-group"]', { timeout: 15000 }).should(
      "be.visible"
    );
  });

  it("should load the quiz", () => {
    cy.get('[data-testid="toggle-group"]').should("have.length.at.least", 1);
  });

  it("should allow toggling answers", () => {
    cy.get('[data-testid="toggle-group"]')
      .first()
      .within(() => {
        cy.get("span").first().click();
      });
  });

  it("should handle multiple toggle groups", () => {
    cy.get('[data-testid="toggle-group"]').each(($group) => {
      cy.wrap($group).within(() => {
        cy.get("span").first().click();
      });
    });
  });

  it("should track progress", () => {
    cy.get('[data-testid="quiz-container"]')
      .should("be.visible")
      .and("have.css", "background")
      .as("initialColor");

    cy.get('[data-testid="toggle-group"]').each(($group) => {
      cy.wrap($group).within(() => {
        cy.get("span").first().click();
        cy.wait(100);
      });
    });

    cy.wait(500);

    cy.get('[data-testid="quiz-container"]')
      .should("have.css", "background")
      .then((newColor) => {
        cy.get("@initialColor").then((initialColor) => {
          expect(newColor).to.not.equal(initialColor);
        });
      });
  });
});
