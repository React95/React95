import React from 'react';
import type { SVGProps } from "react";

const Wrdart321230_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h26m3 0h3M0 6h24m5 0h3M0 7h22m7 0h3M0 8h20m9 0h3M0 9h18m11 0h3M0 10h16m13 0h3M0 11h14m15 0h3M0 12h12m17 0h3M0 13h10m19 0h3M0 14h8m21 0h3M0 15h6m21 0h5M0 16h4m21 0h7M0 17h4m19 0h9M0 18h4m17 0h11M0 19h4m15 0h13M0 20h4m13 0h15M0 21h4m11 0h17M0 22h4m9 0h19M0 23h4m7 0h21M0 24h4m5 0h23M0 25h4m3 0h25M0 26h32M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M26 5h3m-5 1h5m-7 1h7m-9 1h9M18 9h11m-13 1h13m-15 1h15m-17 1h17m-19 1h19M8 14h21M6 15h21M4 16h21M4 17h19M4 18h17M4 19h15M4 20h13M4 21h11M4 22h9m-9 1h7m-7 1h5m-5 1h3" /></svg>;

export const wrdart321230Data = {
  '32x32_4': Wrdart321230_32x32_4
};

export interface Wrdart321230Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321230Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321230Props) => {
  const Svg = wrdart321230Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321230 = React.memo(Wrdart321230Component);
Wrdart321230.displayName = 'Wrdart321230';
