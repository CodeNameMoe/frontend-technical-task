/// <reference types="cypress" />

// Custom command to select an answer in a toggle group
Cypress.Commands.add('selectAnswer', (groupIndex: number, optionIndex: number) => {
  cy.get('[class*="toggle-group"]')
    .eq(groupIndex)
    .within(() => {
      cy.get('span').eq(optionIndex).click()
    })
})

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      selectAnswer(groupIndex: number, optionIndex: number): Chainable<void> 
    }
  }
}

export {} 