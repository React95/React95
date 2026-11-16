import React from 'react';
import type { SVGProps } from "react";

const Cryptui3409_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M4 0h7M2 1h2M1 2h1M1 3h1m4 0h1M0 4h1M0 5h1m4 0h1M0 6h1m5 0h1M0 7h1m5 0h1M0 8h1m5 0h1M1 9h1" /><path stroke="#fff" d="M4 1h7M2 2h4m3 0h3M2 3h4m3 0h4M1 4h12M1 5h4m4 0h5M1 6h5m3 0h5M1 7h5m3 0h5M2 8h4m3 0h4M2 9h3m5 0h2m-8 1h7m-5 1h3m-1 1h1m-1 1h1" /><path stroke="#000" d="M11 1h2m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1M2 10h1m9 0h1M3 11h2m5 0h2m-7 1h2m2 0h1m-3 1h1m1 0h1m-2 1h2" /><path stroke="#00f" d="M6 2h3M7 3h2M6 5h3M7 6h2M7 7h2M7 8h2M5 9h5" /><path stroke="silver" d="M12 2h1m0 2h1M1 8h1m11 0h1m-2 1h1M3 10h1m7 0h1m-7 1h1m3 0h1m-3 1h1" /></svg>;
const Cryptui3409_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M11 0h8M8 1h3m8 0h3M6 2h2m14 0h2M5 3h1m18 0h1M4 4h1M3 5h1M2 6h1M1 7h1M1 8h1m27 0h1M0 9h1m29 0h1M0 10h1m29 0h1M0 11h1m29 0h2M0 12h1m29 0h2M0 13h1m29 0h2M0 14h1m29 0h2M0 15h1m29 0h2M1 16h1m27 0h3M1 17h1m27 0h3M2 18h1m25 0h3m-4 1h4m-5 1h4m-5 1h4m-5 1h4M7 23h1m14 0h5M8 24h3m8 0h7m-16 1h4m5 0h5m-11 1h1m5 0h2m-2 1h2m-2 1h2m-2 1h2m-3 1h3m-2 1h2" /><path stroke="silver" d="M11 1h1m6 0h1M8 2h1m12 0h1M6 3h1m16 0h1M12 4h1m4 0h1M2 7h1m9 0h1m4 0h1m9 0h1M1 9h1m26 0h1M1 15h1m26 0h1M2 17h1m24 0h1M6 21h1m16 0h1M8 22h1m12 0h1m-11 1h1m6 0h1m-5 1h1" /><path stroke="#fff" d="M12 1h6M9 2h12M7 3h16M5 4h7m6 0h7M4 5h8m6 0h8M3 6h9m6 0h9M3 7h9m6 0h9M2 8h26M2 9h26M1 10h10m7 0h11M1 11h12m5 0h11M1 12h12m5 0h11M1 13h12m5 0h11M1 14h12m5 0h11M2 15h11m5 0h10M2 16h11m5 0h10M3 17h10m5 0h9M3 18h8m9 0h7M4 19h22M5 20h20M7 21h16M9 22h12m-9 1h6m-3 1h3m-3 1h3m-3 1h3m-2 1h2m-1 1h1" /><path stroke="#00f" d="M13 4h4m-5 1h6m-6 1h6m-5 1h4m-6 3h7m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-7 1h9" /><path stroke="#000" d="M25 4h1m0 1h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1M3 19h1m22 0h1M4 20h1m20 0h1M5 21h1m18 0h1M6 22h2m14 0h2M8 23h3m8 0h3m-11 1h3m4 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-2 1h2" /></svg>;

export const cryptui3409Data = {
  '16x16_4': Cryptui3409_16x16_4,
  '32x32_4': Cryptui3409_32x32_4
};

export interface Cryptui3409Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4' | '32x32_4';
}

const Cryptui3409Component = ({
  variant = '16x16_4',
  ...rest
}: Cryptui3409Props) => {
  const Svg = cryptui3409Data[variant];

  return <Svg {...rest} />;
};

export const Cryptui3409 = React.memo(Cryptui3409Component);
Cryptui3409.displayName = 'Cryptui3409';
