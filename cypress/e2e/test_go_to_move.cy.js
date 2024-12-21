 it('Test Case 2: Verify "go to move" feature works properly', () => {
    // do some moves
    cy.get('#square-0').click(); // Player 1
    cy.get('#square-1').click(); // Player 2
    cy.get('#square-2').click(); // Player 1
  
    // Wait for the "Go to move" buttons to be visible
    cy.contains('button', 'Go to move #1', { timeout: 10000 }).should('exist');
  
    // Click "Go to move #1" and verify the board state
    cy.contains('button', 'Go to move #1').click();
    cy.get('#square-0').should('contain.text', 'X'); // Player 1's move
    cy.get('#square-1').should('not.contain.text'); // Player 2 hasn't moved yet
    cy.get('#square-2').should('not.contain.text'); // Player 1 hasn't moved yet
  });