import React from 'react';
import type { SVGProps } from "react";

const Mspaint116_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="red" d="M19 3h1m-1 1h2m-2 1h3M6 6h17m-4 1h3m-3 1h2m-2 1h1" /><path stroke="gray" d="M15 13h16m-17 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="#000" d="M31 13h1m-1 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1M0 29h17" /><path stroke="#fff" d="M15 14h15m-16 1h15m-16 1h15m-16 1h15m-16 1h15m-16 1h15M9 20h15M8 21h15M7 22h15M6 23h15M5 24h15M4 25h15M3 26h15M2 27h15" /><path stroke="silver" d="M30 14h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1M1 28h16" /></svg>;

export const mspaint116Data = {
  '32x32_4': Mspaint116_32x32_4
};

export interface Mspaint116Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Mspaint116Component = ({
  variant = '32x32_4',
  ...rest
}: Mspaint116Props) => {
  const Svg = mspaint116Data[variant];

  return <Svg {...rest} />;
};

export const Mspaint116 = React.memo(Mspaint116Component);
Mspaint116.displayName = 'Mspaint116';
