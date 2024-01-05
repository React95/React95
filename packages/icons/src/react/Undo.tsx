import React from 'react';
import type { SVGProps } from "react";

const Undo_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="navy" d="M8 4h4M2 5h1m3 0h2m4 0h1M2 6h2m1 0h1m7 0h1M2 7h3m8 0h1M2 8h4m7 0h1M2 9h5m5 0h1m-1 1h1" /><path stroke="gray" d="M12 4h1m0 1h1m-1 4h1m-3 1h1" /></svg>;

export const undoData = {
  '16x16_4': Undo_16x16_4
};

export interface UndoProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Undo: React.FC<UndoProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = undoData[variant];

  return <Svg {...rest} />;
};
