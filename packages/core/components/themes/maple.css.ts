import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from './contract.css';
import { tokens } from './tokens/maple';

createGlobalTheme(':root', contract, tokens);
