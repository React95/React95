import React from 'react';
import type { SVGProps } from "react";

const Regwiz129_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M11 2h2m-3 1h1m2 0h1m1 0h2M9 4h1m4 0h1m2 0h1M8 5h1m6 0h1m2 0h1M7 6h1m8 0h1m2 0h1M6 7h1m3 0h1m6 0h1m2 0h1M5 8h1m5 0h1m6 0h1m2 0h1M4 9h1m4 0h1m2 0h1m6 0h1m2 0h1M3 10h1m4 0h1m1 0h1m2 0h1m4 0h1m1 0h1m2 0h1M3 11h1m5 0h1m1 0h1m2 0h1m2 0h1m1 0h1m1 0h1m2 0h1M4 12h1m5 0h1m1 0h1m2 0h1m2 0h1m3 0h1m1 0h1M4 13h2m5 0h1m1 0h1m2 0h1m6 0h2M4 14h1m1 0h1m5 0h1m9 0h1m1 0h1M4 15h1m2 0h1m3 0h7m3 0h1m2 0h1M4 16h1m3 0h1m1 0h1m7 0h1m1 0h1m3 0h1M4 17h1m4 0h1m9 0h1m4 0h1M4 18h1m3 0h1m11 0h1m3 0h1M4 19h1m2 0h1m13 0h1m2 0h1M4 20h1m1 0h1m15 0h1m1 0h1M4 21h2m17 0h2M4 22h21" /><path stroke="#ff0" d="M11 3h2m-3 1h4M9 5h6M8 6h8M7 7h3m1 0h6M6 8h5m1 0h6M5 9h4m1 0h2m1 0h6M4 10h4m1 0h1m1 0h2m1 0h4m1 0h1M4 11h5m1 0h1m1 0h2m1 0h2m1 0h1m1 0h1M5 12h5m1 0h1m1 0h2m1 0h2m1 0h3M6 13h5m1 0h1m1 0h2m1 0h6M7 14h5m1 0h9M8 15h3m7 0h3M9 16h1m9 0h1" /><path stroke="gray" d="M15 4h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h1m1 0h1m-1 1h1M5 14h1m17 0h1m1 0h1M6 15h1m15 0h1m2 0h1M5 16h1m1 0h1m4 0h1m1 0h1m1 0h1m4 0h1m1 0h1m1 0h1M6 17h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m2 0h1M5 18h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m1 0h1M6 19h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1m2 0h1M5 20h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1M7 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m-1 1h1M5 23h21" /></svg>;

export const regwiz129Data = {
  '32x32_4': Regwiz129_32x32_4
};

export interface Regwiz129Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Regwiz129: React.FC<Regwiz129Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = regwiz129Data[variant];

  return <Svg {...rest} />;
};
