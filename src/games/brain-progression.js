#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { random } from '..';
import { starGame } from '..';

const task = 'What number is missing in this progression?';

const createProgression = (arr, acc, step, leng) => {
  if (leng === 0) {
    return arr;
  }
  arr.push(acc)
return createProgression(arr, acc + step, step, leng - 1);
};

const questionAnswer = () => {
  const arrProgression  = [];
  const randomStep = random(3,1);
  const StartNum = random(10,0);
  const randomLurk = random(9,1);

  const arithmeticProgression =  createProgression(arrProgression, StartNum, randomStep, 10);

const correctAnswerProgression = arithmeticProgression[randomLurk];
arithmeticProgression[randomLurk] = '  ';
const questionProgression = arithmeticProgression.join('  ');
return cons(questionProgression, correctAnswerProgression);
};

export default () => starGame(task, questionAnswer);
