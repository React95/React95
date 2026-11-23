import React from 'react';
import type { SVGProps } from "react";

const Inetcpl4481_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="maroon" d="M12 1h7M9 2h3m7 0h3M7 3h2m13 0h2M6 4h1m17 0h1M5 5h1m19 0h1M4 6h1M3 7h1M3 8h1M2 9h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m0 1h1m-1 1h1" /><path stroke="red" d="M12 2h7M9 3h13M7 4h17M6 5h19M5 6h21M4 7h23M4 8h23M3 9h25M3 10h25M3 11h25M2 12h27M2 13h27M2 14h3m21 0h3M2 15h3m21 0h3M2 16h3m21 0h3M2 17h27M2 18h27M3 19h25M3 20h25M3 21h25M4 22h23M4 23h23M5 24h21M6 25h19M7 26h17M9 27h13m-10 1h7" /><path stroke="#000" d="M26 6h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1M4 24h1m21 0h1M5 25h1m19 0h1M6 26h1m17 0h1M7 27h2m13 0h2M9 28h3m7 0h3m-10 1h7" /><path stroke="gray" d="M28 8h1m0 1h1m-1 1h1m-1 1h2m-1 1h1m-1 1h1m-1 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-3 1h3m-3 1h3m-3 1h2m-3 1h3m-3 1h3m-4 1h3m-4 1h4m-5 1h4m-5 1h4M8 28h1m13 0h5M9 29h3m7 0h7m-15 1h13m-10 1h7" /><path stroke="#fff" d="M5 14h21M5 15h21M5 16h21" /></svg>;
const Inetcpl4481_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="maroon" d="M5 2h5M3 3h2m5 0h1M2 4h1M2 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m0 1h1" /><path stroke="red" d="M5 3h5M3 4h9M3 5h9M2 6h11M2 7h2m7 0h2M2 8h2m7 0h2M2 9h11M2 10h11M3 11h9m-9 1h9m-7 1h5" /><path stroke="#000" d="M11 3h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1M2 12h1m9 0h1M3 13h2m5 0h2m-7 1h5" /><path stroke="#fff" d="M4 7h7M4 8h7" /></svg>;

export const inetcpl4481Data = {
  '32x32_4': Inetcpl4481_32x32_4,
  '16x16_4': Inetcpl4481_16x16_4
};

export interface Inetcpl4481Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Inetcpl4481Component = ({
  variant = '32x32_4',
  ...rest
}: Inetcpl4481Props) => {
  const Svg = inetcpl4481Data[variant];

  return <Svg {...rest} />;
};

export const Inetcpl4481 = React.memo(Inetcpl4481Component);
Inetcpl4481.displayName = 'Inetcpl4481';
