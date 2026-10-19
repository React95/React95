import React from 'react';
import type { SVGProps } from "react";

const Wb32113_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M17 3h4m-9 1h5m4 0h1M9 5h3m6 0h2m1 0h1M5 6h4m3 0h8m1 0h1M0 7h5m4 0h9m2 0h10M6 8h8m16 0h1M4 9h25m2 0h1M3 10h27m1 0h1M3 11h15m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M3 12h14m13 0h1M3 13h15m1 0h1m3 0h7M3 14h18m2 0h1M3 15h14m1 0h1m1 0h1m2 0h1M3 16h13m6 0h1M3 17h17m2 0h1M5 18h11m1 0h1m1 0h1m2 0h1M8 19h7m7 0h1M0 20h4m6 0h8m3 0h1M4 21h3m6 0h1m1 0h1m1 0h1m2 0h1M7 22h2m10 0h1M9 23h3m6 0h1m-7 1h6" /><path stroke="#000" d="M17 4h4m-9 1h6m2 0h1M9 6h3m8 0h1M5 7h4m9 0h2M0 8h6m8 0h16M0 9h4m25 0h2M0 10h3m27 0h1M0 11h3m15 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3M0 12h3m14 0h13M0 13h3m15 0h1m1 0h3M0 14h3m18 0h2M0 15h3m14 0h1m1 0h1m1 0h2M0 16h3m13 0h6M0 17h3m17 0h2M0 18h5m11 0h1m1 0h1m1 0h2M0 19h8m7 0h7M4 20h6m8 0h3M7 21h6m1 0h1m1 0h1m1 0h2M9 22h10m-7 1h6" /></svg>;

export const wb32113Data = {
  '32x32_4': Wb32113_32x32_4
};

export interface Wb32113Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wb32113Component = ({
  variant = '32x32_4',
  ...rest
}: Wb32113Props) => {
  const Svg = wb32113Data[variant];

  return <Svg {...rest} />;
};

export const Wb32113 = React.memo(Wb32113Component);
Wb32113.displayName = 'Wb32113';
