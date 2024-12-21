import { gameBoard } from '../support/pageObjects/gameBoard';

describe('Tic Tac Toe Test - Verify Cell Cannot Be Overridden', () => {
  beforeEach(() => {
    gameBoard.visit();
  });

  it('should not allow a cell to be overwritten once selected', () => {
    // Player 1 selects a cell
    gameBoard.selectCell(0);
    gameBoard.verifyCellContent(0, 'X');

    // Player 2 tries to overwrite the same cell
    gameBoard.selectCell(0);

    // Verify the content remains 'X' and not overwritten
    gameBoard.verifyCellContent(0, 'X');
  });
});
