import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from './contract.css';
import { tokens } from './tokens/highContrast';

createGlobalTheme(':root', contract, tokens);