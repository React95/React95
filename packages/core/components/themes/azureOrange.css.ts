import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from './contract.css';
import { tokens } from './tokens/azureOrange';

createGlobalTheme(':root', contract, tokens);
