import React from 'react';
import type { SVGProps } from "react";

const Wmsui325086_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M3 2h4M2 3h1m4 0h1M1 4h1m6 0h1M0 5h1m8 0h1M0 6h1m8 0h1M0 7h1m8 0h1M0 8h1m8 0h1M1 9h1m6 0h1m1 0h1m-9 1h1m4 0h1m-5 1h4" /><path stroke="silver" d="M7 2h1M0 9h1m8 1h1m-2 1h1m-2 1h1" /><path stroke="#000" d="M15 2h1M8 3h1m4 0h2M9 4h1m1 0h2m2 0h1m-6 1h1m2 0h2m-5 1h3m2 0h1m-6 1h1m2 0h2m-5 1h3m2 0h1M9 9h1m3 0h2M1 10h1m6 0h1m2 0h2M2 11h1m4 0h1m-5 1h4" /><path stroke="#fff" d="M3 3h4M2 4h3m1 0h2M1 5h4m2 0h2M1 6h1m6 0h1M1 7h1m6 0h1M1 8h4m2 0h2M2 9h3m1 0h2m-5 1h4" /><path stroke="green" d="M5 4h1M5 5h2M2 6h6M2 7h6M5 8h2M5 9h1" /></svg>;

export const wmsui325086Data = {
  '32x32_4': Wmsui325086_32x32_4
};

export interface Wmsui325086Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Wmsui325086: React.FC<Wmsui325086Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wmsui325086Data[variant];

  return <Svg {...rest} />;
};
