import React from 'react';
import type { SVGProps } from "react";

const Wb32109_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="navy" d="M1 0h6M0 1h1m5 0h2M0 2h1m5 0h3M0 3h1m7 0h1M0 4h1m7 0h1M0 5h1m7 0h1M0 6h1M0 7h1M0 8h1M0 9h1m0 1h4" /><path stroke="#fff" d="M1 1h5M1 2h5M1 3h7M1 4h3m3 0h1M1 5h2m4 0h1M1 6h2m3 0h1M1 7h2m3 0h1M1 8h2M1 9h3m4 2h2m-3 1h1m2 0h1m0 1h1m0 1h1m0 1h1" /><path stroke="silver" d="M4 4h1m0 1h1M4 6h1m2 0h1M7 7h1M5 8h1m1 0h1M6 9h1m4 0h1m-5 1h1m4 0h1m-6 1h1m4 0h1m-5 1h1m-1 1h2m-1 1h2m-1 1h2m-1 1h2" /><path stroke="#000" d="M5 4h1M4 5h1m1 0h1M3 6h1m1 0h1m2 0h3M3 7h1m1 0h1m2 0h1m2 0h1M6 8h1m1 0h1m3 0h1M4 9h1m3 0h1m4 0h1m-9 1h1m5 0h1m2 0h1m-9 1h1m7 0h1m-9 1h1m7 0h1m-8 1h1m6 0h1m-7 1h1m5 0h1m-6 1h1m4 0h1m-5 1h1m2 0h1m-3 1h1" /><path stroke="gray" d="M6 4h1M3 5h1m0 2h1m4 0h2M3 8h2m4 0h3M5 9h1m1 0h1m1 0h2m1 0h1m-7 1h1m1 0h3m2 0h1m-4 1h2m1 0h1m-5 1h1m1 0h3m-4 1h1m1 0h2m-3 1h1m1 0h1m-2 1h1m-1 2h1" /></svg>;

export const wb32109Data = {
  '32x32_4': Wb32109_32x32_4
};

export interface Wb32109Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wb32109Component = ({
  variant = '32x32_4',
  ...rest
}: Wb32109Props) => {
  const Svg = wb32109Data[variant];

  return <Svg {...rest} />;
};

export const Wb32109 = React.memo(Wb32109Component);
Wb32109.displayName = 'Wb32109';
