import React from 'react';
import type { SVGProps } from "react";

const Wmsui323938_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="gray" d="M1 2h13M1 3h1m11 0h1M1 4h1m11 0h1M1 5h1m11 0h1M1 6h1m11 0h1M1 7h1m11 0h1M1 8h1m11 0h1M1 9h1m11 0h1M1 10h1m11 0h1M1 11h13" /><path stroke="#fff" d="M2 3h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 5h1M2 7h1M2 9h1" /><path stroke="#ff0" d="M3 3h1m1 0h1m1 0h1m1 0h1m1 0h1M2 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-2 1h1M2 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-2 1h1M2 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#000" d="M14 3h1m-1 1h1M3 5h3m1 0h5m2 0h1m-1 1h1M3 7h3m1 0h3m4 0h1m-1 1h1M3 9h3m1 0h4m3 0h1m-1 1h1m-1 1h1M2 12h13" /><path stroke="silver" d="M3 4h1m1 0h1m1 0h1m1 0h1m1 0h1M6 5h1m5 0h1M3 6h1m1 0h1m1 0h1m1 0h1m1 0h1M6 7h1m3 0h1m1 0h1M3 8h1m1 0h1m1 0h1m1 0h1m1 0h1M6 9h1m5 0h1M3 10h1m1 0h1m1 0h1m1 0h1m1 0h1" /></svg>;

export const wmsui323938Data = {
  '32x32_4': Wmsui323938_32x32_4
};

export interface Wmsui323938Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Wmsui323938: React.FC<Wmsui323938Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wmsui323938Data[variant];

  return <Svg {...rest} />;
};
