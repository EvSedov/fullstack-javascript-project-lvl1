import readLineSync from 'readline-sync';

const greetPlayer = () => {
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default greetPlayer;
