describe('Quiz Application', () => {
    beforeEach(() => {
      cy.visit('/')
      // First wait for the container regardless of loading state
      cy.get('div').should('exist')
      // Wait for content to load and stabilize
      cy.get('h1', { timeout: 15000 }).should('be.visible')
      // Wait for toggle groups to be fully rendered
      cy.get('[data-testid="toggle-group"]', { timeout: 15000 }).should('be.visible')
    })
  
    // Basic loading test
    it('should load the quiz', () => {
      cy.get('[data-testid="toggle-group"]').should('have.length.at.least', 1)
    })
  
    // Test toggle functionality
    it('should allow toggling answers', () => {
      cy.get('[data-testid="toggle-group"]').first().within(() => {
        // Click the first span element within the toggle group
        cy.get('span').first().click()
      })
    })
  
    // Test multiple selections
    it('should handle multiple toggle groups', () => {
      cy.get('[data-testid="toggle-group"]').each(($group) => {
        cy.wrap($group).within(() => {
          // Click the first span element within each toggle group
          cy.get('span').first().click()
        })
      })
    })
  
    // Test progress tracking
    it('should track progress', () => {
      // Wait for initial render and get initial color
      cy.get('[data-testid="quiz-container"]')
        .should('be.visible')
        .and('have.css', 'background')
        .as('initialColor')
      
      // Click all toggle groups
      cy.get('[data-testid="toggle-group"]').each(($group) => {
        cy.wrap($group).within(() => {
          cy.get('span').first().click()
          cy.wait(100)
        })
      })

      // Wait for final animation
      cy.wait(500)
      
      // Verify color change
      cy.get('[data-testid="quiz-container"]')
        .should('have.css', 'background')
        .then((newColor) => {
          cy.get('@initialColor').then((initialColor) => {
            expect(newColor).to.not.equal(initialColor)
          })
        })
    })
})