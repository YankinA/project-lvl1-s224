#!/usr/bin/env node

import { starGame } from '..';
import { taskGcd } from '../games/brain-gcd';
import { questionAnswer } from '../games/brain-gcd';

starGame(taskGcd, questionAnswer);
