import React from 'react';
import type { SVGProps } from "react";

const Wmsui325085_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="gray" d="M3 2h4M2 3h1m4 0h1M1 4h1m6 0h1M0 5h1m8 0h1M0 6h1m8 0h1M0 7h1m8 0h1M0 8h1m8 0h1M1 9h1m6 0h1m1 0h1m-9 1h1m4 0h1m-5 1h4" /><path stroke="silver" d="M7 2h1M0 9h1m8 1h1m-2 1h1m-2 1h1" /><path stroke="#000" d="M15 2h1M8 3h1m4 0h2M9 4h1m1 0h2m2 0h1m-6 1h1m2 0h2m-5 1h3m2 0h1m-6 1h1m2 0h2m-5 1h3m2 0h1M9 9h1m3 0h2M1 10h1m6 0h1m2 0h2M2 11h1m4 0h1m-5 1h4" /><path stroke="#fff" d="M3 3h4M4 4h2M1 5h2m4 0h2M1 6h3m2 0h3M1 7h2m4 0h2M1 8h1m2 0h2m1 0h2M4 9h3m-4 1h4" /><path stroke="red" d="M2 4h1m3 0h2M3 5h1m2 0h1M4 6h2M3 7h4M2 8h2m2 0h1M2 9h2m3 0h1" /><path stroke="maroon" d="M3 4h1m0 1h2" /></svg>;

export const wmsui325085Data = {
  '32x32_4': Wmsui325085_32x32_4
};

export interface Wmsui325085Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Wmsui325085: React.FC<Wmsui325085Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wmsui325085Data[variant];

  return <Svg {...rest} />;
};
