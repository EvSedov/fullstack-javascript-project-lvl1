import readLineSync from 'readline-sync';
import gameBrainEven from './games/game-brain-even.js';
import gameBrainCalc from './games/game-brain-calc.js';

const games = {
  'brain-even': gameBrainEven,
  'brain-calc': gameBrainCalc,
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const nameOfGames = ['brain-even', 'brain-calc'];
  const indexGameName = readLineSync.keyInSelect(nameOfGames, 'Еnter the number of the game we will play: ');
  if (indexGameName === -1) {
    console.log(`See you soon, ${userName}!`);
    return;
  }
  const gameName = nameOfGames[indexGameName];
  const playGame = games[gameName];
  const correctEndGame = playGame(userName);
  if (correctEndGame) {
    console.log(`Congratulations, ${userName}!`);
  }
};
