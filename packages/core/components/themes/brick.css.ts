import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from './contract.css';
import { tokens } from './tokens/brick';

createGlobalTheme(':root', contract, tokens);
