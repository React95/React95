import { useContext } from 'react';
import { ClippyContext } from './ClippyContext';

export const useClippy = () => useContext(ClippyContext);
