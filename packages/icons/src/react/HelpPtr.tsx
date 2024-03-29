import React from 'react';
import type { SVGProps } from "react";

const HelpPtr_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M1 2h1M1 3h2M1 4h3M1 5h4M1 6h5M1 7h6M1 8h7M1 9h8m-8 1h5m-5 1h2m1 0h2m-5 1h1m3 0h2m-2 1h2m-1 1h2m-2 1h2" /><path stroke="navy" d="M10 2h5M9 3h2m3 0h2M8 4h2m4 0h2M8 5h2m4 0h2M9 6h2m3 0h2m-3 1h2m-3 1h2m-3 1h2m-2 1h2m-2 2h3m-3 1h3" /><path stroke="gray" d="M15 2h1m-3 1h1m-4 1h1m-1 1h1M8 6h1m4 0h1m1 1h1m-3 2h1m-1 1h1" /></svg>;

export const helpPtrData = {
  '16x16_4': HelpPtr_16x16_4
};

export interface HelpPtrProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const HelpPtr: React.FC<HelpPtrProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = helpPtrData[variant];

  return <Svg {...rest} />;
};
