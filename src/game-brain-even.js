import readLineSync from 'readline-sync';

const playGame = () => {
  const gameQuantity = 3;
  let count = 0;
  let countCorrectAnswer = 0;
  let numberOfQuestion = 0;
  let gameAnswer;
  let userAnswer;
  let result;
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < gameQuantity) {
    numberOfQuestion = Math.floor(Math.random() * 100) || Math.floor(Math.random() * 100);
    gameAnswer = numberOfQuestion % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${numberOfQuestion}`);
    userAnswer = readLineSync.question('Your answer: ');
    result = (gameAnswer === userAnswer)
      ? 'Correct!'
      : `'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'.\nLet's try again, ${name}!`;
    console.log(result);
    count += 1;
    countCorrectAnswer = (result === 'Correct!') ? countCorrectAnswer + 1 : countCorrectAnswer;
  }
  if (countCorrectAnswer === gameQuantity) {
    console.log(`Congratulations, ${name}!`);
    return true;
  }
  return false;
};

export default playGame;
