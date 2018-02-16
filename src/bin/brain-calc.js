#!/usr/bin/env node
import { starGame } from '..';
import { taskEven } from '../games/brain-calc';
import { questionAnswer } from '../games/brain-calc';

starGame(taskEven, questionAnswer);
