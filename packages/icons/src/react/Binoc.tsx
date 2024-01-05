import React from 'react';
import type { SVGProps } from "react";

const Binoc_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="#000" d="M3 1h3m3 0h3M3 2h1m1 0h1m3 0h1m1 0h1M3 3h3m3 0h3M2 4h5m1 0h5M2 5h1m1 0h3m1 0h1m1 0h3M1 6h13M0 7h2m1 0h3m1 0h2m1 0h5M0 8h2m1 0h3m1 0h2m1 0h5M0 9h2m1 0h6m1 0h5M0 10h7m1 0h7M0 11h1m1 0h3m5 0h1m1 0h3M0 12h1m1 0h3m5 0h1m1 0h3M0 13h5m5 0h5" /><path stroke="#fff" d="M4 2h1m5 0h1M3 5h1m5 0h1M2 7h1m6 0h1M2 8h1m6 0h1M2 9h1m6 0h1m-9 2h1m9 0h1M1 12h1m9 0h1" /></svg>;

export const binocData = {
  '16x16_4': Binoc_16x16_4
};

export interface BinocProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Binoc: React.FC<BinocProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = binocData[variant];

  return <Svg {...rest} />;
};
