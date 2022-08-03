import readLineSync from 'readline-sync';

const playGame = () => {
  const gameQuantity = 3;
  const signs = ['+', '-', '*', '/'];
  let count = 0;
  let countCorrectAnswer = 0;
  let firstNumber = 0;
  let secondNumber = 0;
  let gameAnswer;
  let userAnswer;
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  while (count < gameQuantity) {
    firstNumber = Math.floor(Math.random() * 30);
    secondNumber = Math.floor(Math.random() * 10);
    const sign = signs[Math.floor(Math.random() * 4)];
    switch (sign) {
      case '+':
        gameAnswer = firstNumber + secondNumber;
        break;
      case '-':
        gameAnswer = firstNumber - secondNumber;
        break;
      case '*':
        gameAnswer = firstNumber * secondNumber;
        break;
      default:
        gameAnswer = firstNumber / secondNumber;
        break;
    }
    console.log(`Question: ${firstNumber} ${sign} ${secondNumber}`);
    userAnswer = readLineSync.question('Your answer: ');
    if (gameAnswer.toString() === userAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'.\nLet's try again, ${name}!`);
      return false;
    }
    count += 1;
    countCorrectAnswer += 1;
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default playGame;