# Tic Tac Toe Test Automation

This repository contains automated tests for the Tic Tac Toe game. The tests are written using Cypress and follow the Page Object Model (POM) structure.

## Features
- Verify that cells cannot be overridden once selected.
- Test the "Go to move" feature.
- Ensure adherence to game rules.

## Prerequisites
- Node.js 
- npm 
- Cypress installed globally or locally in the project

## Installation
1. Clone the repository:
   git clone https://github.com/ZaraNour/tic-tac-toe-tests.git

2. Navigate to the project directory:
cd tic-tac-toe-tests

3. Install dependencies:
npm install 

## Running Tests
npx cypress open

## Test Cases
## Test Case 1: Verify Cell Cannot Be Overridden
Description: Ensures that once a cell is selected by a player, it cannot be overridden by the other player or the same player.
Steps:
1. Player 1 selects a cell.
2. check the cell contains Player 1's (X).
3.Try to override the cell with Player 2's.
4. Verify the cell still contains Player 1's (X).

## Test Case 2: Verify "Go to Move" Feature
Description: Ensures that the "Go to move" feature correctly reverts the game board to a previous move.
Steps:
1. Perform a sequence of moves.
2. Check the presence of "Go to move" buttons.
3. Click a specific "Go to move" button.
4.Verify the game board reflects the state corresponding to that move.

## Project Structure
1. cypress/e2e/: Contains test cases.
2. cypress/support/pageObjects/: Contains Page Object Model classes.
3. README.md: Project documentation.
