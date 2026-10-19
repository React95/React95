import React from 'react';
import type { SVGProps } from "react";

const Conf155_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M11 6h9M9 7h13M8 8h15M5 9h18M3 10h15m3 0h2M2 11h15m4 0h1M1 12h16m3 0h1M1 13h11m3 0h2m1 0h3M0 14h11m4 0h1m5 0h1m3 0h1M0 15h10m4 0h1m6 0h1m3 0h2M0 16h9m3 0h3m7 0h1m2 0h3M0 17h7m8 0h1m4 0h2m3 0h4M0 18h6m9 0h1m4 0h1m4 0h5M0 19h6m10 0h1m3 0h1m4 0h6M0 20h7m7 0h2m4 0h1m4 0h7M1 21h7m6 0h6m5 0h4M1 22h6m7 0h1m2 0h1m7 0h2m1 0h2M2 23h4m8 0h1m2 0h1m7 0h1m2 0h2M3 24h3m3 0h5m15 0h2M3 25h1m7 0h1m17 0h2m-20 1h1" /><path stroke="silver" d="M18 10h3m-4 1h4m-4 1h3m-6 1h1m2 0h1m-4 1h1m1 0h2m1 0h2m-6 1h6m-6 1h7m-8 1h1m1 0h4m-6 1h1m1 0h4m-6 1h2m1 0h3m-7 1h1m2 0h4m-7 1h1m-1 1h1m1 0h1m-8 1h6m1 0h1m-2 1h2m-1 1h1" /><path stroke="#fff" d="M12 13h2m-3 1h3m-4 1h4m-5 1h3m-5 1h5m1 0h1m-8 1h8m-8 1h8m-7 1h6m-5 1h5m-6 1h6m-7 1h2m-2 1h3m-5 1h6m-5 1h5m-3 1h3m-1 1h1" /><path stroke="#00f" d="M18 14h1m-7 3h1m-1 8h1m5 0h1m-7 1h3m2 0h2M3 27h2m-3 1h5m5 0h1m-9 1h5m2 0h2" /><path stroke="gray" d="M16 22h1m-1 1h1m-1 1h2m-8 1h1m5 0h1m-7 1h1m-1 1h2m-2 1h1" /><path stroke="navy" d="M18 24h1m-6 1h2m2 0h1m1 0h1M2 26h3m10 0h2m2 0h2M2 27h1m2 0h2m5 0h7M1 28h1m5 0h2m2 0h1m1 0h1M1 29h3m5 0h2m2 0h2M4 30h9" /></svg>;
const Conf155_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M2 1h7M1 2h10M1 3h10M0 4h8m2 0h1M0 5h6m3 0h1M0 6h5m4 0h1M0 7h4m6 0h1M0 8h4m5 0h1M0 9h5m4 0h1m-9 1h3m5 0h1m-8 1h2m2 0h3m-7 1h1m4 0h1m-7 1h3m4 0h1m-9 1h1m3 0h2m1 0h1m1 0h1m-4 1h2" /><path stroke="silver" d="M8 4h1M7 5h1M6 6h1M5 7h1m1 0h1m1 0h1M4 8h1m1 0h1m1 0h1M5 9h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-2 1h1" /><path stroke="#fff" d="M9 4h1M6 5h1m1 0h1M5 6h1m1 0h1M4 7h1m1 0h1m1 0h1M5 8h1m1 0h1M6 9h1m1 0h1m-4 1h1m1 0h1m-4 1h1m-2 1h1m1 0h1m-2 1h1m1 0h1" /><path stroke="navy" d="M8 6h1" /><path stroke="#00f" d="M1 14h3m4 0h1m-9 1h6m2 0h2" /></svg>;

export const conf155Data = {
  '32x32_4': Conf155_32x32_4,
  '16x16_4': Conf155_16x16_4
};

export interface Conf155Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Conf155Component = ({
  variant = '32x32_4',
  ...rest
}: Conf155Props) => {
  const Svg = conf155Data[variant];

  return <Svg {...rest} />;
};

export const Conf155 = React.memo(Conf155Component);
Conf155.displayName = 'Conf155';
