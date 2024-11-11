/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    // Add custom commands here
    getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
    selectAnswer(groupIndex: number, optionIndex: number): Chainable<void>
  }
} 