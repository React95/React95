import React from 'react';
import type { SVGProps } from "react";

const Wrdart321213_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h32M0 6h32M0 7h3m25 0h4M0 8h4m23 0h5M0 9h4m23 0h5M0 10h5m21 0h6M0 11h5m20 0h7M0 12h6m19 0h7M0 13h6m18 0h8M0 14h7m16 0h9M0 15h8m15 0h9M0 16h8m14 0h10M0 17h9m12 0h11M0 18h9m11 0h12M0 19h10m10 0h12M0 20h11m8 0h13M0 21h11m7 0h14M0 22h12m6 0h14M0 23h12m5 0h15M0 24h13m3 0h16M0 25h13m3 0h16M0 26h14m1 0h17M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M3 7h25M4 8h23M4 9h23M5 10h21M5 11h20M6 12h19M6 13h18M7 14h16M8 15h15M8 16h14M9 17h12M9 18h11m-10 1h10m-9 1h8m-8 1h7m-6 1h6m-6 1h5m-4 1h3m-3 1h3m-2 1h1" /></svg>;

export const wrdart321213Data = {
  '32x32_4': Wrdart321213_32x32_4
};

export interface Wrdart321213Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321213Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321213Props) => {
  const Svg = wrdart321213Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321213 = React.memo(Wrdart321213Component);
Wrdart321213.displayName = 'Wrdart321213';
