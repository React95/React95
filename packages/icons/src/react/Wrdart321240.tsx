import React from 'react';
import type { SVGProps } from "react";

const Wrdart321240_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h32M0 6h15m3 0h14M0 7h14m5 0h13M0 8h13m7 0h12M0 9h13m7 0h12M0 10h13m7 0h12M0 11h12m9 0h11M0 12h12m4 0h1m4 0h11M0 13h12m4 0h1m4 0h11M0 14h11m4 0h3m4 0h10M0 15h11m4 0h3m4 0h10M0 16h11m4 0h3m4 0h10M0 17h11m3 0h5m3 0h10M0 18h10m4 0h5m4 0h9M0 19h10m13 0h9M0 20h10m13 0h9M0 21h10m4 0h5m4 0h9M0 22h9m5 0h5m5 0h8M0 23h9m4 0h7m4 0h8M0 24h9m4 0h7m4 0h8M0 25h8m5 0h7m5 0h7M0 26h8m4 0h9m4 0h7M0 27h7m6 0h7m6 0h6M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="gray" d="M15 6h1m1 0h1m-4 1h1m3 0h1m-6 2h1m5 0h1m-4 2h1m-5 1h1m7 0h1m-6 1h1m1 0h1m-7 2h1m9 0h1m-8 1h1m3 0h1m-9 3h1m11 0h1m-10 2h1m5 0h1M9 23h1m13 0h1m-12 1h1m7 0h1M8 26h1m15 0h1" /><path stroke="#000" d="M16 6h1m-2 1h3m-4 1h5m-5 1h5m-6 1h7m-7 1h3m1 0h3m-7 1h3m1 0h3m-8 1h3m3 0h3m-9 1h3m3 0h3m-9 1h3m3 0h3m-10 1h3m5 0h3m-11 1h3m5 0h3m-11 1h3m5 0h3m-11 1h11m-12 1h13m-13 1h3m7 0h3m-13 1h3m7 0h3m-13 1h3m7 0h3M9 24h3m9 0h3M9 25h3m9 0h3M9 26h3m9 0h3M7 27h6m7 0h6" /><path stroke="silver" d="M13 8h1m5 0h1m-8 3h1m7 0h1m-10 3h1m9 0h1m-12 4h1m11 0h1M9 22h1m3 0h1m5 0h1m3 0h1M8 25h1m3 0h1m7 0h1m3 0h1" /></svg>;
const Wrdart321240_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h32M0 6h15m3 0h14M0 7h14m5 0h13M0 8h13m7 0h12M0 9h13m7 0h12M0 10h13m7 0h12M0 11h12m9 0h11M0 12h12m4 0h1m4 0h11M0 13h12m4 0h1m4 0h11M0 14h11m4 0h3m4 0h10M0 15h11m4 0h3m4 0h10M0 16h11m4 0h3m4 0h10M0 17h11m3 0h5m3 0h10M0 18h10m4 0h5m4 0h9M0 19h10m13 0h9M0 20h10m13 0h9M0 21h10m4 0h5m4 0h9M0 22h9m5 0h5m5 0h8M0 23h9m4 0h7m4 0h8M0 24h9m4 0h7m4 0h8M0 25h8m5 0h7m5 0h7M0 26h8m4 0h9m4 0h7M0 27h7m6 0h7m6 0h6M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M15 6h3m-4 1h5m-6 1h7m-7 1h7m-7 1h7m-8 1h9m-9 1h4m1 0h4m-9 1h4m1 0h4m-10 1h4m3 0h4m-11 1h4m3 0h4m-11 1h4m3 0h4m-11 1h3m5 0h3m-12 1h4m5 0h4m-13 1h13m-13 1h13m-13 1h4m5 0h4M9 22h5m5 0h5M9 23h4m7 0h4M9 24h4m7 0h4M8 25h5m7 0h5M8 26h4m9 0h4M7 27h6m7 0h6" /></svg>;

export const wrdart321240Data = {
  '32x32_4': Wrdart321240_32x32_4,
  '32x32_1': Wrdart321240_32x32_1
};

export interface Wrdart321240Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '32x32_1';
}

const Wrdart321240Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321240Props) => {
  const Svg = wrdart321240Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321240 = React.memo(Wrdart321240Component);
Wrdart321240.displayName = 'Wrdart321240';
