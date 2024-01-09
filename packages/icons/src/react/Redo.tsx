import React from 'react';
import type { SVGProps } from "react";

const Redo_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M2 4h1M1 5h1M1 9h1m1 1h1" /><path stroke="navy" d="M3 4h4M2 5h1m4 0h2m3 0h1M1 6h1m7 0h1m1 0h2M1 7h1m8 0h3M1 8h1m7 0h4M2 9h1m5 0h5M2 10h1" /></svg>;

export const redoData = {
  '16x16_4': Redo_16x16_4
};

export interface RedoProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Redo: React.FC<RedoProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = redoData[variant];

  return <Svg {...rest} />;
};
