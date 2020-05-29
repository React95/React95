import { useContext } from 'react';
import ClippyContext from './ClippyContext';

const useClippy = () => useContext(ClippyContext);

export default useClippy;
