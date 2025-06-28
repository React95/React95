import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from './contract.css';
import { tokens } from './tokens/storm';

createGlobalTheme(':root', contract, tokens);
