#!/usr/bin/env node
import { starGame } from '..';
import { taskEven } from '../games/brain-even';
import { questionAnswer } from '../games/brain-even';

starGame(taskEven, questionAnswer);
