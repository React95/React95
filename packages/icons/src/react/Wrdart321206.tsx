import React from 'react';
import type { SVGProps } from "react";

const Wrdart321206_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h15m1 0h16M0 2h14m3 0h15M0 3h13m5 0h14M0 4h12m7 0h13M0 5h12m1 0h1m3 0h1m1 0h13M0 6h14m3 0h15M0 7h14m3 0h15M0 8h14m3 0h15M0 9h14m3 0h15M0 10h14m3 0h15M0 11h14m3 0h15M0 12h14m3 0h15M0 13h14m3 0h15M0 14h14m3 0h15M0 15h14m3 0h15M0 16h14m3 0h15M0 17h14m3 0h15M0 18h14m3 0h15M0 19h14m3 0h15M0 20h14m3 0h15M0 21h14m3 0h15M0 22h14m3 0h15M0 23h14m3 0h15M0 24h14m3 0h15M0 25h14m3 0h15M0 26h14m3 0h15M0 27h14m3 0h15M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M15 1h1m-2 1h3m-4 1h5m-6 1h7m-7 1h1m1 0h3m1 0h1m-5 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3" /></svg>;

export const wrdart321206Data = {
  '32x32_4': Wrdart321206_32x32_4
};

export interface Wrdart321206Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321206Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321206Props) => {
  const Svg = wrdart321206Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321206 = React.memo(Wrdart321206Component);
Wrdart321206.displayName = 'Wrdart321206';
