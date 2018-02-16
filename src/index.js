import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default() => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);
};
export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const starGame = (task,questionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);

  const iter = (counter) => {
    const callQuestionAnswer = questionAnswer();
    const question = car(callQuestionAnswer);
    if (counter > 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    
    console.log(question);
    const yourAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(callQuestionAnswer);

    if (correctAnswer == yourAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    return console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
  };
  return iter(1);
};
