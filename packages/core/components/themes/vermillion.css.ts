import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from './contract.css';
import { tokens } from './tokens/vermillion';

createGlobalTheme(':root', contract, tokens);
