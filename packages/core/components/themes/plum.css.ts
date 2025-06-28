import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from './contract.css';
import { tokens } from './tokens/plum';

createGlobalTheme(':root', contract, tokens);
