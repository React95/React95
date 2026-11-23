import React from 'react';
import type { SVGProps } from "react";

const Sysdm601_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M15 3h3m-5 1h2m3 0h2m-8 1h1m7 0h1M11 6h1m1 0h3m5 0h1M10 7h1m5 0h2m4 0h1M9 8h1m1 0h3m9 0h1M8 9h1m5 0h2m8 0h1M7 10h1m9 0h2m6 0h1M7 11h1m8 0h1m2 0h1m5 0h2M7 12h2m6 0h1m4 0h1m4 0h2M6 13h1m2 0h1m4 0h2m3 0h2m3 0h2m1 0h1M5 14h1m4 0h1m2 0h2m1 0h3m2 0h1m1 0h2m2 0h1M6 15h1m3 0h1m1 0h2m8 0h2m1 0h2m1 0h1M6 16h2m1 0h1m1 0h2m14 0h1m1 0h1M4 17h1m1 0h1m1 0h1m18 0h1m1 0h1M4 18h1m1 0h1m8 0h4m8 0h1m1 0h1M2 19h1m1 0h1m7 0h3m4 0h2m5 0h1m1 0h1M2 20h1m1 0h1m5 0h2m3 0h4m2 0h2m2 0h1m1 0h1M2 21h1m6 0h1m2 0h3m4 0h2m2 0h2m1 0h1M8 22h1m1 0h2m9 0h2m2 0h1M8 23h1m1 0h1m6 0h3m3 0h2M8 24h1m1 0h1m3 0h3m2 0h3M8 25h1m1 0h4m2 0h1m2 0h1m2 0h1M9 26h1m4 0h3m2 0h3m-12 1h4m3 0h3" /><path stroke="silver" d="M15 4h3m-5 1h3m3 0h1m-8 1h1m-2 1h3m-4 1h1M9 9h3m-4 1h3m-3 1h2m-2 2h1m12 0h1M7 14h2m13 0h1M5 15h1m1 0h1m-3 1h1m-3 1h1m-1 1h1m-3 1h1m-1 1h1m18 5h2" /><path stroke="gray" d="M16 5h3m-3 1h5m-7 1h2m2 0h4m-8 1h9M12 9h2m2 0h8m-13 1h6m2 0h6m-15 1h6m4 0h5M9 12h6m6 0h4m-15 1h4m8 0h2M9 14h1m1 0h2m-5 1h2m1 0h1m-8 1h1m3 0h1m-4 1h1m1 0h1m-6 1h1m2 0h1m-3 1h1m1 0h1m-3 1h1m-3 1h1m1 0h1" /><path stroke="#f0f" d="M17 11h2m-3 1h4m-4 1h3" /><path stroke="#fff" d="M7 13h1m-2 1h1" /><path stroke="olive" d="M26 13h1m-2 1h2m-9 11h1m-2 1h2" /><path stroke="#ff0" d="M27 15h1m0 1h1m-1 1h1m-1 1h1m-14 1h4m8 0h1m-16 1h3m4 0h2m5 0h1m-17 1h2m9 0h2m2 0h1M9 22h1m13 0h2M9 23h1m-1 1h1m7 0h2M9 25h1m4 0h2m1 0h1m-8 1h4" /></svg>;

export const sysdm601Data = {
  '32x32_4': Sysdm601_32x32_4
};

export interface Sysdm601Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Sysdm601Component = ({
  variant = '32x32_4',
  ...rest
}: Sysdm601Props) => {
  const Svg = sysdm601Data[variant];

  return <Svg {...rest} />;
};

export const Sysdm601 = React.memo(Sysdm601Component);
Sysdm601.displayName = 'Sysdm601';
