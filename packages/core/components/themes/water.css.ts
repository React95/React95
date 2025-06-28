import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from './contract.css';
import { tokens } from './tokens/water';

createGlobalTheme(':root', contract, tokens);
