import React from 'react';
import type { SVGProps } from "react";

const Setupx8_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M10 1h18M9 2h1m17 0h1M8 3h1m17 0h2M7 4h1m18 0h2M7 5h1m2 0h14m2 0h2M7 6h1m18 0h2M7 7h1m18 0h2M7 8h1m18 0h2M7 9h1m18 0h2M7 10h1m18 0h2M7 11h1m18 0h2M7 12h1m18 0h2M7 13h1m18 0h2M7 14h1m18 0h2M7 15h1m18 0h2M7 16h1m18 0h2M7 17h1m18 0h2m1 0h2M7 18h20m1 0h2M7 19h1m19 0h2m1 0h1M5 20h23m1 0h2m-3 1h3m-3 1h3M8 23h18m2 0h3m-14 1h2m9 0h3m-12 1h2m1 0h1m5 0h3m-3 1h2m-8 1h7m-12 1h3m4 1h1m-12 1h10" /><path stroke="silver" d="M10 2h16M9 4h17M9 5h1m15 0h1M9 6h1m15 0h1M9 7h1m15 0h1M9 8h1m15 0h1M9 9h1m15 0h1M9 10h1m15 0h1M9 11h1m15 0h1M9 12h1m15 0h1M9 13h1m15 0h1M9 14h1m15 0h1M9 15h1m15 0h1M9 16h1m15 0h1M9 17h17m4 1h1m-2 1h1m-2 1h1M8 22h20m-2 1h2M8 24h1m17 0h2M8 25h1m12 0h1m1 0h5M8 26h1m13 0h6M8 27h3m-1 1h3m-2 1h4m8 0h1" /><path stroke="#fff" d="M26 2h1M9 3h17M8 4h1M8 5h1m15 0h1M8 6h1m15 0h1M8 7h1m15 0h1M8 8h1m15 0h1M8 9h1m15 0h1M8 10h1m15 0h1M8 11h1m15 0h1M8 12h1m15 0h1M8 13h1m15 0h1M8 14h1m15 0h1M8 15h1m15 0h1M8 16h1m1 0h15M8 17h1m-2 4h21M9 24h8m-8 1h10M9 26h6m1 0h5m-10 1h5m-3 1h4m-2 1h8" /><path stroke="#000" d="M28 2h1m-1 1h1m-1 1h1m-1 1h1M10 6h13m5 0h1M10 7h1m17 0h1M10 8h1m17 0h1M10 9h1m17 0h1m-19 1h1m17 0h1m-19 1h1m17 0h1m-19 1h1m17 0h1m-19 1h1m17 0h1m-19 1h1m17 0h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m3 0h1M8 19h19m4 0h1m-1 1h1m-1 1h1M7 22h1m23 0h1M7 23h1m23 0h1M7 24h1m11 0h7m5 0h1M7 25h1m23 0h1M7 26h1m7 0h1m5 0h1m8 0h1M7 27h1m8 0h6m7 0h1M7 28h3m10 0h9M7 29h1m2 0h1m14 0h1M0 30h7m4 0h2m10 0h2m-12 1h10" /><path stroke="navy" d="M23 6h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-14 1h14M0 21h7m-7 3h7m-7 1h7m-7 1h7m-7 1h7m-7 1h7m-7 1h7" /><path stroke="#00f" d="M11 7h12M11 8h1m1 0h10M11 9h1m1 0h10m-12 1h12m-12 1h12m-12 1h12m-12 1h12m-12 1h12M0 22h7m-7 1h7" /><path stroke="#0ff" d="M12 8h1m-1 1h1" /></svg>;

export const setupx8Data = {
  '32x32_4': Setupx8_32x32_4
};

export interface Setupx8Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Setupx8Component = ({
  variant = '32x32_4',
  ...rest
}: Setupx8Props) => {
  const Svg = setupx8Data[variant];

  return <Svg {...rest} />;
};

export const Setupx8 = React.memo(Setupx8Component);
Setupx8.displayName = 'Setupx8';
