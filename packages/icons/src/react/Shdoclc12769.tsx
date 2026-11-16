import React from 'react';
import type { SVGProps } from "react";

const Shdoclc12769_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M19 0h6m-8 1h2m6 0h2M16 2h1m10 0h1M15 3h1m12 0h1M14 4h1m14 0h1M14 5h1m14 0h2M13 6h1m17 0h1M13 7h1m17 0h1M13 8h1m17 0h1M13 9h1m17 0h1m-19 1h1m17 0h1m-19 1h1m17 0h1m-18 1h1m15 0h1M5 13h1m5 0h1m1 0h2m15 0h1M4 14h1m5 0h1m1 0h1m1 0h1m14 0h1M3 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m12 0h1m-13 1h1m10 0h1m-11 1h2m6 0h2m-8 1h6m-4 1h1m0 1h1m-2 1h1m0 1h1m-2 1h1m0 1h1m-2 1h1m0 1h1m-2 1h1m0 1h1m-2 1h1m-1 1h1" /><path stroke="red" d="M19 1h6m-8 1h10M16 3h12M15 4h2m2 0h6m2 0h2M15 5h2m3 0h4m3 0h2M14 6h4m3 0h2m3 0h4M14 7h5m6 0h5M14 8h6m4 0h6M14 9h6m4 0h6m-16 1h5m6 0h5m-16 1h4m3 0h2m3 0h4m-15 1h2m3 0h4m3 0h2m-14 1h2m2 0h6m2 0h2m-13 1h12m-11 1h10m-8 1h6" /><path stroke="olive" d="M11 2h4M9 3h2M8 4h1m2 0h3M7 5h1m2 0h1M6 6h1m2 0h1M6 7h1m1 0h1M6 8h1m1 0h1M6 9h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h2m1 0h1m1 0h4M4 13h1m1 0h1m1 0h1m1 0h1m1 0h1M3 14h1m1 0h1m5 0h1m1 0h1M2 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 16h1m-1 1h1m-1 1h1m-1 1h1m19 0h1M2 20h1m18 0h1M2 21h1m19 0h1M2 22h1m18 0h1M2 23h1m19 0h1M2 24h1m18 0h1M2 25h1m19 0h1M2 26h1m18 0h1M2 27h1m19 0h1M2 28h1m18 0h1M2 29h1m19 0h1M2 30h19" /><path stroke="#ff0" d="M11 3h4M9 4h2M8 5h1M7 6h1M7 7h1M7 8h1M7 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-4 4h13M4 18h15M4 19h1m14 0h1M4 20h16M4 21h1m14 0h1M4 22h16M4 23h1m14 0h1M4 24h16M4 25h1m14 0h1M4 26h16M4 27h1m14 0h1M4 28h16M4 29h16" /><path stroke="#fff" d="M17 4h2m6 0h2M17 5h3m4 0h3m-9 1h3m2 0h3m-7 1h6m-5 1h4m-4 1h4m-5 1h6m-7 1h3m2 0h3m-9 1h3m4 0h3m-10 1h2m6 0h2M4 16h12M3 17h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M9 5h1M8 6h1M3 16h1m1 3h14m1 0h1m-1 1h1M5 21h14m1 0h1m-1 1h1M5 23h14m1 0h1m-1 1h1M5 25h14m1 0h1m-1 1h1M5 27h14m1 0h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M11 5h3m-4 1h1m19 0h1M9 7h1m20 0h1M9 8h1m20 0h1M9 9h1m20 0h1M9 10h1m20 0h1M9 11h1m20 0h1M9 12h1m19 0h1M9 13h1m19 0h1M6 14h4m5 0h1m12 0h1m-13 1h1m10 0h1m-11 1h2m6 0h2m-8 1h6m-2 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1M3 31h19" /></svg>;

export const shdoclc12769Data = {
  '32x32_4': Shdoclc12769_32x32_4
};

export interface Shdoclc12769Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Shdoclc12769Component = ({
  variant = '32x32_4',
  ...rest
}: Shdoclc12769Props) => {
  const Svg = shdoclc12769Data[variant];

  return <Svg {...rest} />;
};

export const Shdoclc12769 = React.memo(Shdoclc12769Component);
Shdoclc12769.displayName = 'Shdoclc12769';
