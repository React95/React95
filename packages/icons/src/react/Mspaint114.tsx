import React from 'react';
import type { SVGProps } from "react";

const Mspaint114_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="red" d="M9 1h1m12 0h1M8 2h2m12 0h2M7 3h3m12 0h3M6 4h20M7 5h3m12 0h3M8 6h2m12 0h2M9 7h1m12 0h1" /><path stroke="gray" d="M0 10h31M0 11h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M31 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M0 29h32" /><path stroke="#fff" d="M1 11h29M1 12h29M1 13h29M1 14h29M1 15h29M1 16h29M1 17h29M1 18h29M1 19h29M1 20h29M1 21h29M1 22h29M1 23h29M1 24h29M1 25h29M1 26h29M1 27h29" /><path stroke="silver" d="M30 11h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 28h30" /></svg>;

export const mspaint114Data = {
  '32x32_4': Mspaint114_32x32_4
};

export interface Mspaint114Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Mspaint114Component = ({
  variant = '32x32_4',
  ...rest
}: Mspaint114Props) => {
  const Svg = mspaint114Data[variant];

  return <Svg {...rest} />;
};

export const Mspaint114 = React.memo(Mspaint114Component);
Mspaint114.displayName = 'Mspaint114';
