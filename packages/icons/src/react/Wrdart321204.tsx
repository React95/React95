import React from 'react';
import type { SVGProps } from "react";

const Wrdart321204_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h7m2 0h23M0 5h7m3 0h22M0 6h8m3 0h21M0 7h9m3 0h20M0 8h10m3 0h19M0 9h11m3 0h18M0 10h12m3 0h17M0 11h13m3 0h16M0 12h14m3 0h15M0 13h15m3 0h14M0 14h16m3 0h13M0 15h17m3 0h12M0 16h18m3 0h11M0 17h19m3 0h10M0 18h20m3 0h9M0 19h21m3 0h8M0 20h22m3 0h7M0 21h23m3 0h6M0 22h24m3 0h5M0 23h25m2 0h5M0 24h32M0 25h32M0 26h32M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M7 4h2M7 5h3M8 6h3M9 7h3m-2 1h3m-2 1h3m-2 1h3m-2 1h3m-2 1h3m-2 1h3m-2 1h3m-2 1h3m-2 1h3m-2 1h3m-2 1h3m-2 1h3m-2 1h3m-2 1h3m-2 1h3m-2 1h2" /></svg>;

export const wrdart321204Data = {
  '32x32_4': Wrdart321204_32x32_4
};

export interface Wrdart321204Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321204Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321204Props) => {
  const Svg = wrdart321204Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321204 = React.memo(Wrdart321204Component);
Wrdart321204.displayName = 'Wrdart321204';
