import Draggable from 'react-draggable';

declare module 'react-draggable' {
  export interface DraggableProps {
    children: React.ReactNode;
  }
}
