import React from 'react';
import type { SVGProps } from "react";

const Shell32142_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M8 0h13M7 1h2m11 0h1M4 2h3m1 0h1m11 0h1M2 3h2m3 0h2m11 0h1M1 4h1m2 0h5M1 5h1m1 0h6m12 0h3M1 6h1m2 0h5M1 7h1m4 0h3m16 0h2M1 8h1m25 0h2M2 9h1m-1 1h1m-1 1h1m24 0h2M2 12h1m21 0h5M3 13h1m7 0h1m9 0h7M3 14h1m15 0h9M3 15h1m15 0h9M3 16h1m15 0h9M4 17h1m14 0h8M4 18h1m14 0h8M4 19h1m14 0h8M4 20h1m14 0h8M5 21h1m2 0h1m6 0h1m3 0h7M5 22h1m13 0h7M5 23h1m4 0h1m8 0h7M5 24h3m3 0h1m7 0h7M8 25h2m2 0h1m6 0h6m-15 1h2m7 0h6m-13 1h2m5 0h6m-11 1h2m3 0h6m-9 1h2m1 0h4m-5 1h3" /><path stroke="#fff" d="M9 1h11M7 2h1m1 0h11M4 3h3m2 0h11m1 0h1M2 4h2m5 0h11M2 5h1m6 0h2m8 0h2M2 6h2m5 0h15M4 7h2m3 0h2m11 0h2M6 8h2m2 0h14m1 0h2M8 9h2m12 0h2m3 0h2m-19 1h2m2 0h10m3 0h2m-17 1h2m10 0h3m-13 1h2m5 0h3m-8 1h5" /><path stroke="#000" d="M21 1h1m0 1h1m0 1h1m-4 1h5m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m4 0h1m-6 1h1m4 0h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1M6 25h2m17 0h1M8 26h2m15 0h1m-16 1h2m13 0h1m-14 1h2m11 0h1m-12 1h2m7 0h2m-9 1h2m3 0h2m-5 1h3" /><path stroke="silver" d="M21 2h1m0 1h1M2 7h2M2 8h4m2 0h2M3 9h5m2 0h1m14 0h2M3 10h7m2 0h2m11 0h2M3 11h9m2 0h1m7 0h2M3 12h11m2 0h5M4 13h7m3 0h2M4 14h6m5 0h1m1 0h2M4 15h2m4 0h3m4 0h2M4 16h3m3 0h4m3 0h2M5 17h1m4 0h3m4 0h2M5 18h1m2 0h1m1 0h9M5 19h1m2 0h8m1 0h2M5 20h1m2 0h4m1 0h3m1 0h2M6 21h1m2 0h2m2 0h2m2 0h2M6 22h2m1 0h1m7 0h2M6 23h4m6 0h3M8 24h3m2 0h6m-9 1h2m1 0h6m-7 1h7m-5 1h5m-3 1h3m-1 1h1" /><path stroke="#00f" d="M11 5h8m-8 2h11M11 9h11m-7 2h7" /><path stroke="green" d="M12 13h2m-4 1h5m1 0h1M6 15h4m3 0h4M7 16h3m4 0h3M6 17h4m3 0h4M6 18h2m1 0h1m-4 1h2m8 0h1M6 20h2m4 0h1m3 0h1M7 21h1m3 0h2m3 0h1m-9 1h1m1 0h7m-6 1h5m-4 1h1" /></svg>;

export const shell32142Data = {
  '32x32_4': Shell32142_32x32_4
};

export interface Shell32142Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Shell32142: React.FC<Shell32142Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = shell32142Data[variant];

  return <Svg {...rest} />;
};
