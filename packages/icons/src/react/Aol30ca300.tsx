import React from 'react';
import type { SVGProps } from "react";

const Aol30ca300_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="red" d="M14 0h1m-2 1h3m-3 1h3m-4 1h5m-5 1h5m-6 1h7m-7 1h7m-8 1h9m-9 1h3m4 0h2M9 9h2m7 0h2M9 10h1m9 0h1M8 11h1m2 0h5m4 0h1M8 12h1m1 0h7M7 13h1m1 0h9M7 14h3m1 0h8M6 15h3m2 0h8m3 0h1M6 16h2m2 0h9m3 0h1M5 17h2m3 0h9m3 0h2M5 18h2m3 0h9m2 0h3M4 19h3m3 0h9m2 0h4M4 20h3m3 0h8m2 0h5M3 21h4m4 0h7m1 0h2m1 0h4M3 22h5m4 0h5m1 0h2m2 0h4M2 23h6m5 0h6m2 0h6M2 24h7m11 0h7M1 25h9m9 0h9M1 26h11m5 0h11M0 27h29" /><path stroke="maroon" d="M16 2h1m0 2h1m0 2h1m-6 2h4m2 0h1m-9 1h7m-8 1h9m1 0h1M9 11h2m8 0h1M9 12h1m10 0h2M8 13h1m12 0h1m-12 1h1m11 0h1M9 15h2m8 0h1M8 16h2m9 0h1m3 0h1M7 17h3m9 0h2M7 18h3m9 0h2m3 0h1M7 19h3m9 0h2M7 20h2m9 0h2m5 0h1M7 21h2m1 0h1m7 0h1m2 0h1M8 22h1m2 0h1m5 0h1m2 0h2m4 0h1M8 23h1m3 0h1m6 0h2m-8 1h7m7 0h1m-14 1h5m-4 1h2m11 0h1M0 28h30M1 29h29M2 30h29" /></svg>;

export const aol30ca300Data = {
  '32x32_4': Aol30ca300_32x32_4
};

export interface Aol30ca300Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Aol30ca300Component = ({
  variant = '32x32_4',
  ...rest
}: Aol30ca300Props) => {
  const Svg = aol30ca300Data[variant];

  return <Svg {...rest} />;
};

export const Aol30ca300 = React.memo(Aol30ca300Component);
Aol30ca300.displayName = 'Aol30ca300';
