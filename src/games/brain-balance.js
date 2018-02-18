#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { random, starGame } from '..';

const taskGcd = 'Balance the given number.';

const balanse = (num) => {
  const arr = String(num).split('').map(Number).sort();
  while ((arr[arr.length - 1] - arr[0]) > 1) {
    arr[arr.length - 1] = arr[arr.length - 1] - 1;
    arr[0] += 1;
    arr.sort();
  }
  const result = arr.join('');
  return result;
};

const questionAnswer = () => {
  const randomNum = random(99, 10);
  const questionEven = `${randomNum}`;
  const correctAnswerEven = balanse(randomNum);

  return cons(questionEven, correctAnswerEven);
};

export default () => starGame(taskGcd, questionAnswer);
