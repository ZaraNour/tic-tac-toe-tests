class GameBoard {
  visit() {
    cy.visit('https://testing-tictactoe-sxsi7kqutq-ew.a.run.app/');
  }

  selectCell(cellId) {
    cy.get(`#square-${cellId}`).click(); // Use CSS selector instead of XPath
  }

  verifyCellContent(cellId, content) {
    cy.get(`#square-${cellId}`).should('contain.text', content); // Use CSS selector instead of XPath
  }

  verifyCellEmpty(cellId) {
    cy.get(`#square-${cellId}`).should('not.contain.text'); // Use CSS selector instead of XPath
  }

  verifyCellDisabled(cellId) {
    cy.get(`#square-${cellId}`).should('have.class', 'disabled'); // Use CSS selector instead of XPath
  }

  verifyCellClickable(cellId) {
    cy.get(`#square-${cellId}`).should('not.have.class', 'disabled'); // Use CSS selector instead of XPath
  }

  clickGoToMove(moveNumber) {
    cy.contains('button', `Go to move #${moveNumber}`).click();
  }

  verifyGoToMoveExists(moveNumber) {
    cy.contains('button', `Go to move #${moveNumber}`).should('exist');
  }
}

export const gameBoard = new GameBoard();
