import React from 'react';
import type { SVGProps } from "react";

const Mspaint117_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M16 0h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1M9 7h1M8 8h1M7 9h1m-2 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M17 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="silver" d="M16 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="#fff" d="M15 2h1m-2 1h2m-3 1h3m-4 1h4m-5 1h5m-6 1h6M9 8h7M8 9h8m-9 1h9M6 11h10M6 12h10M6 13h10M6 14h10M6 15h10M6 16h10M6 17h10M6 18h10M6 19h10M6 20h9m-9 1h8m-8 1h7m-7 1h6m-6 1h5m-5 1h4m-4 1h3m-3 1h2m-2 1h1" /><path stroke="red" d="M24 7h1m-2 1h3m-4 1h5m-6 1h7m-4 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /></svg>;

export const mspaint117Data = {
  '32x32_4': Mspaint117_32x32_4
};

export interface Mspaint117Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Mspaint117Component = ({
  variant = '32x32_4',
  ...rest
}: Mspaint117Props) => {
  const Svg = mspaint117Data[variant];

  return <Svg {...rest} />;
};

export const Mspaint117 = React.memo(Mspaint117Component);
Mspaint117.displayName = 'Mspaint117';
