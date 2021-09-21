describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('Basic operators', () => {
  it('7+2 should return 9', () => {
   // 1. Arrange
   cy.visit('http://127.0.0.1:5500/index.html')
   // 2. Act
   cy.get('[data-cy="7"]').click()
   cy.get('[data-cy="+"]').click()
   cy.get('[data-cy="2"]').click()
   cy.get('[data-cy="="]').click()
   
   // 3. Assert
   cy.get('[data-cy="display-bot"]').should('contain', '9')
  })
   it('7-2 should return 5', () => {
   // 1. Arrange
   cy.visit('http://127.0.0.1:5500/index.html')
   // 2. Act
   cy.get('[data-cy="7"]').click()
   cy.get('[data-cy="-"]').click()
   cy.get('[data-cy="2"]').click()
   cy.get('[data-cy="="]').click()
   
   // 3. Assert
   cy.get('[data-cy="display-bot"]').should('contain', '5')
   })
   it('7*2 should return 14', () => {
   // 1. Arrange
   cy.visit('http://127.0.0.1:5500/index.html')
   // 2. Act
   cy.get('[data-cy="7"]').click()
   cy.get('[data-cy="*"]').click()
   cy.get('[data-cy="2"]').click()
   cy.get('[data-cy="="]').click()
   
   // 3. Assert
   cy.get('[data-cy="display-bot"]').should('contain', '14')
   })
   it('7/2 should return 3.5', () => {
   // 1. Arrange
   cy.visit('http://127.0.0.1:5500/index.html')
   // 2. Act
   cy.get('[data-cy="7"]').click()
   cy.get('[data-cy="/"]').click()
   cy.get('[data-cy="2"]').click()
   cy.get('[data-cy="="]').click()
   
   // 3. Assert
   cy.get('[data-cy="display-bot"]').should('contain', '3.5')
  })
})

describe('Multiple digit operationst', () => {
  it('316 * 91 should return 28756', () => {
   // 1. Arrange
   cy.visit('http://127.0.0.1:5500/index.html')
   // 2. Act
   cy.get('[data-cy="3"]').click()
   cy.get('[data-cy="1"]').click()
   cy.get('[data-cy="6"]').click()
   cy.get('[data-cy="*"]').click()
   cy.get('[data-cy="9"]').click()
   cy.get('[data-cy="1"]').click()
   cy.get('[data-cy="="]').click()
   
   // 3. Assert
   cy.get('[data-cy="display-bot"]').should('contain', '28756')
  })
})