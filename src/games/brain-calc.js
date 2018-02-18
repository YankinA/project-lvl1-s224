import { cons } from 'hexlet-pairs';
import { random, starGame } from '..';

const taskCalc = 'What is the result of the expression?';

const questionAnswer = () => {
  const firstRandomNum = random(100, 0);
  const lastRandomNum = random(100, 0);
  const arr = ['+', '-', '*'];
  const rand = random(2, 0);
  const sing = arr[rand];
  const questionEven = `${firstRandomNum} ${sing} ${lastRandomNum}`;

  let correctAnswerEven;

  switch (sing) {
    case '+': correctAnswerEven = firstRandomNum + lastRandomNum; break;
    case '-': correctAnswerEven = firstRandomNum - lastRandomNum; break;
    case '*': correctAnswerEven = firstRandomNum * lastRandomNum; break;
    default:
  }
  return cons(questionEven, correctAnswerEven);
};

export default () => starGame(taskCalc, questionAnswer);
