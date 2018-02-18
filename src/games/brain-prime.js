#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { random, starGame } from '..';

export const taskPrime = 'Is this number prime?';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const questionAnswer = () => {
  const questionPrime = random(100, 1);
  const correctAnswerPrime = isPrime(questionPrime) ? 'yes' : 'no';
  return cons(questionPrime, correctAnswerPrime);
};

export default () => starGame(taskPrime, questionAnswer);
