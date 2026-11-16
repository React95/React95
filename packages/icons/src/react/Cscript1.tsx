import React from 'react';
import type { SVGProps } from "react";

const Cscript1_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M3 3h16M3 4h1m14 0h2M3 5h1m14 0h1m1 0h1M3 6h1m14 0h1m2 0h1M3 7h1m14 0h1m3 0h1m5 0h2M3 8h1m14 0h1m4 0h1m2 0h1m3 0h1M3 9h1m14 0h1m4 0h1m1 0h1m5 0h1M3 10h1m14 0h1m1 0h6m5 0h1M3 11h1m14 0h1m4 0h1m1 0h1m5 0h1M3 12h1m14 0h1m4 0h1m6 0h1M3 13h1m14 0h1m4 0h1m5 0h1M3 14h1m14 0h1m4 0h1M3 15h16m4 0h1M4 16h1m14 0h1m3 0h1M5 17h1m14 0h1m2 0h1M6 18h1m1 0h1m12 0h1m1 0h1M7 19h2m13 0h2M8 20h16M8 21h1m-1 1h1m-1 1h1m-1 1h1m-2 1h3m0 1h1m0 1h1m-1 1h1m-1 1h1m-6 1h1m3 0h1m-4 1h3" /><path stroke="red" d="M4 4h14M4 5h14M4 6h14M4 7h14M4 8h14M4 9h14M4 10h14M4 11h14M4 12h14M4 13h14M4 14h14" /><path stroke="#0f0" d="M19 5h1m-1 1h2m-2 1h3m-3 1h4m-4 1h4m-4 1h1m-1 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-3 1h3m-2 1h2m-1 1h1" /><path stroke="#fff" d="M27 8h3m-4 1h5m-5 1h5m-5 1h1m1 0h3m-2 1h1M8 26h2m-3 1h4m-3 1h3m-5 1h5m-4 1h3" /><path stroke="#ff0" d="M27 11h1m-4 1h5m-3 1h3m-3 1h1m1 0h1m-3 1h1m1 0h2M2 25h2m-1 1h2m1 0h2m-4 1h3m-5 1h6m-6 1h4m-2 1h2m-1 1h2" /><path stroke="#00f" d="M5 16h14M6 17h14M7 18h1m1 0h12M9 19h13" /></svg>;

export const cscript1Data = {
  '32x32_4': Cscript1_32x32_4
};

export interface Cscript1Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Cscript1Component = ({
  variant = '32x32_4',
  ...rest
}: Cscript1Props) => {
  const Svg = cscript1Data[variant];

  return <Svg {...rest} />;
};

export const Cscript1 = React.memo(Cscript1Component);
Cscript1.displayName = 'Cscript1';
