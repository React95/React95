import React from 'react';
import type { SVGProps } from "react";

const Drvspace7_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#ff0" d="M12 3h6m-8 1h10M8 5h13M7 6h15M6 7h17M5 8h19M5 9h20M4 10h7m2 0h4m2 0h6M4 11h6m4 0h2m4 0h5M3 12h7m4 0h2m4 0h6M3 13h8m2 0h4m2 0h7M3 14h3m1 0h17m1 0h1M3 15h3m1 0h17m1 0h1M3 16h3m1 0h17m1 0h1M3 17h4m1 0h15m1 0h2M3 18h4m1 0h15m1 0h2M3 19h5m1 0h13m1 0h3M4 20h4m1 0h13m1 0h2M4 21h5m2 0h9m2 0h3M5 22h6m2 0h5m2 0h4M5 23h8m5 0h5M6 24h16M7 25h14m-10 1h8" /><path stroke="olive" d="M18 3h2m0 1h2m-1 1h3m-2 1h3m-2 1h3m-2 1h3m-2 1h2m-2 1h3m-3 1h3m-2 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-4 1h3m-3 1h3m-4 1h3m-4 1h4m-5 1h4m-5 1h4M8 26h3m8 0h5m-14 1h12m-10 1h8" /><path stroke="#000" d="M11 10h2m4 0h2m-9 1h4m2 0h4m-10 1h4m2 0h4m-9 1h2m4 0h2M6 14h1m17 0h1M6 15h1m17 0h1M6 16h1m17 0h1M7 17h1m15 0h1M7 18h1m15 0h1M8 19h1m13 0h1M8 20h1m13 0h1M9 21h2m9 0h2m-11 1h2m5 0h2m-7 1h5" /></svg>;

export const drvspace7Data = {
  '32x32_4': Drvspace7_32x32_4
};

export interface Drvspace7Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Drvspace7: React.FC<Drvspace7Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = drvspace7Data[variant];

  return <Svg {...rest} />;
};
