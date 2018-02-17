#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { random } from '..';
import { starGame } from '..';

export const taskGcd = 'Find the greatest common divisor of given numbers.';

export const questionAnswer = () => {
  const firstRandomNum = random(100, 1);
  const lastRandomNum = random(100, 1);
  const questionEven = `${firstRandomNum} ${lastRandomNum}`;

const gcd = (n, m) => {
    if (m > 0) {
      const k = n % m;
      return gcd(m, k);
}
    return Math.abs(n);
  }


const correctAnswerEven = gcd(firstRandomNum, lastRandomNum);

  return cons(questionEven, correctAnswerEven);
};

export default () => starGame(taskGcd, questionAnswer);
