import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from './contract.css';
import { tokens } from './tokens/rose';

createGlobalTheme(':root', contract, tokens);
