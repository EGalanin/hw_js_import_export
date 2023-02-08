import defaultData, { Game, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';

const game = new Game();
game.start();

console.log("Game started");
