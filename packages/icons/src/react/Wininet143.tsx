import React from 'react';
import type { SVGProps } from "react";

const Wininet143_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M5 0h5M3 1h2M2 2h1M1 3h1M1 4h1M0 5h1M0 6h1M0 7h1m14 3h14m-15 1h1m13 0h1m-16 1h1m13 0h2m-16 1h1m1 0h10m2 0h2m-16 1h1m1 0h1m8 0h1m2 0h2m-16 1h1m1 0h1m8 0h1m2 0h2m-16 1h1m1 0h1m8 0h1m2 0h2m-16 1h1m1 0h1m8 0h1m2 0h2m-16 1h1m1 0h1m8 0h1m2 0h2m-16 1h1m1 0h1m8 0h1m2 0h2m-16 1h1m1 0h10m2 0h2m-16 1h1m13 0h2m-16 1h1m13 0h1m1 0h2m-18 1h1m14 0h2m-18 1h17m1 0h1m-20 1h1m17 0h2m-20 1h1m10 0h6m1 0h2m-20 1h1m17 0h2m-20 1h1m17 0h2m-20 1h19" /><path stroke="#fff" d="M5 1h2M3 2h1M1 8h1M1 9h1m12 3h13m-13 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h12m-14 4h17m-17 1h1m-1 1h1m-1 1h1" /><path stroke="#0f0" d="M7 1h1M5 2h1M4 3h1M3 4h1m7 3h1m-2 1h1M3 9h1m5 0h1m-6 1h1m-2 1h1m10 16h2" /><path stroke="green" d="M8 1h4M6 2h5M2 3h1m2 0h2m1 0h2M2 4h1m1 0h1m7 0h1M3 5h2m6 0h1m1 0h1m-4 1h1m1 0h2M1 7h2m6 0h1m2 0h2M0 8h1m2 0h1m4 0h1m2 0h3M0 9h1m3 0h2m2 0h1m1 0h4M1 10h1m1 0h1m1 0h1m3 0h4M1 11h1m2 0h2m4 0h3M2 12h3m9 16h2" /><path stroke="silver" d="M4 2h1M3 3h1m8 2h1m-2 1h1m-2 1h1M2 8h1m6 0h1M2 9h1m-1 1h1m-1 1h1m12 0h13m-2 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-13 1h13m3 1h1m-2 1h1m-17 2h9m6 0h1m-16 1h1m2 0h6m6 0h1m-16 1h1m2 0h13" /><path stroke="#00f" d="M11 2h1M7 3h1m2 0h1m1 0h1M5 4h3m1 0h1m1 0h1M1 5h2m2 0h4m1 0h1M1 6h8M4 7h4M4 8h4M6 9h1m0 1h1m0 1h1m-3 1h1" /><path stroke="navy" d="M12 2h1m-2 1h1M8 4h1m1 0h1M9 5h1M9 6h1M8 7h1M7 9h1m0 1h1m-2 1h1m1 0h1m-3 1h5m-9 1h7" /><path stroke="#000" d="M13 3h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-9 1h1m6 0h1m-8 1h1m6 0h1m15 0h1M5 12h1m6 0h1m16 0h1m-20 1h2m17 0h1M5 14h5m6 0h8m5 0h1m-14 1h1m12 0h1m-14 1h1m12 0h1m-14 1h1m12 0h1m-14 1h1m12 0h1m-14 1h1m12 0h1m-1 1h1m-1 1h1m-2 1h1m-15 1h14m3 0h1m-1 1h1m-1 1h1m-1 1h1m-10 1h6m3 0h1m-1 1h1m-2 1h1m-19 1h18" /><path stroke="red" d="M16 5h1m1 0h1m1 0h1m1 0h1m-1 2h1m-1 2h1" /><path stroke="teal" d="M3 7h1m13 8h7m-7 1h1m1 0h5m-7 1h7m-7 1h7m-7 1h7" /><path stroke="#0ff" d="M18 16h1" /></svg>;

export const wininet143Data = {
  '32x32_4': Wininet143_32x32_4
};

export interface Wininet143Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wininet143Component = ({
  variant = '32x32_4',
  ...rest
}: Wininet143Props) => {
  const Svg = wininet143Data[variant];

  return <Svg {...rest} />;
};

export const Wininet143 = React.memo(Wininet143Component);
Wininet143.displayName = 'Wininet143';
