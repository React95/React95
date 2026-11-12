import React from 'react';
import type { SVGProps } from "react";

const Moricons58_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="red" d="M15 0h1m-1 1h1m-2 1h3m-3 1h3m-4 1h5m-5 1h5m-6 1h7m-7 1h7m-8 1h9m-9 1h9m-10 1h11m-11 1h11M9 12h13M9 16h13m-12 1h11m-11 1h11M6 19h1m4 0h9m4 0h1M6 20h1m4 0h9m4 0h1M5 21h3m4 0h7m4 0h3M5 22h3m4 0h7m4 0h3M4 23h5m4 0h5m4 0h5M4 24h5m4 0h5m4 0h5M3 25h7m4 0h3m4 0h7M3 26h7m4 0h3m4 0h7M2 27h9m4 0h1m4 0h9M2 28h9m4 0h1m4 0h9M1 29h11m7 0h11M1 30h11m7 0h11M0 31h13m5 0h13" /></svg>;

export const moricons58Data = {
  '32x32_4': Moricons58_32x32_4
};

export interface Moricons58Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons58Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons58Props) => {
  const Svg = moricons58Data[variant];

  return <Svg {...rest} />;
};

export const Moricons58 = React.memo(Moricons58Component);
Moricons58.displayName = 'Moricons58';
