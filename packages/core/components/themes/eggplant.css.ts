import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from './contract.css';
import { tokens } from './tokens/eggplant';

createGlobalTheme(':root', contract, tokens);