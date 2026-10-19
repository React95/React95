import React from 'react';
import type { SVGProps } from "react";

const Wrdart321202_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h23m2 0h7M0 5h22m3 0h7M0 6h21m3 0h8M0 7h20m3 0h9M0 8h19m3 0h10M0 9h18m3 0h11M0 10h17m3 0h12M0 11h16m3 0h13M0 12h15m3 0h14M0 13h14m3 0h15M0 14h13m3 0h16M0 15h12m3 0h17M0 16h11m3 0h18M0 17h10m3 0h19M0 18h9m3 0h20M0 19h8m3 0h21M0 20h7m3 0h22M0 21h6m3 0h23M0 22h5m3 0h24M0 23h5m2 0h25M0 24h32M0 25h32M0 26h32M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M23 4h2m-3 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-3 1h2" /></svg>;

export const wrdart321202Data = {
  '32x32_4': Wrdart321202_32x32_4
};

export interface Wrdart321202Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321202Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321202Props) => {
  const Svg = wrdart321202Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321202 = React.memo(Wrdart321202Component);
Wrdart321202.displayName = 'Wrdart321202';
