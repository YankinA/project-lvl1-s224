#!/usr/bin/env node
import { brainEven } from '..';
import { cons } from 'hexlet-pairs';
import { random } from '..';

export const taskEven = 'Answer "yes" if number even otherwise answer "no".';
const even = num => num % 2 === 0;

export const questionAnswer = () => {
  const questionEven = random(100,0);
  const correctAnswerEven = even(questionEven) ? 'yes' : 'no';
  return cons(questionEven,correctAnswerEven);
};
