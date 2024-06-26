import React from 'react';
import type { SVGProps } from "react";

const Print_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M5 1h8M4 2h1M4 3h1M3 4h1M3 5h1M2 6h1m11 0h1M1 7h2m10 0h1M0 8h1m11 0h1m1 0h1M0 9h11m2 0h2M0 10h1m6 0h3m3 0h1M0 11h1m-1 1h1m12 0h1M2 13h9m1 0h1" /><path stroke="#000" d="M13 1h1m-1 1h1M6 3h5m1 0h1m-1 1h1M5 5h5m1 0h4m-4 1h1m1 0h1m1 0h1M3 7h8m1 0h1m1 0h2m-5 1h1m1 0h1m1 0h1m-5 1h2m2 0h1m-4 1h1m1 0h1m-3 1h3M1 12h12m1 0h1M1 13h1m9 0h1m1 0h1M2 14h11" /><path stroke="#fff" d="M5 2h8M5 3h1m5 0h1M4 4h8M4 5h1m5 0h1M3 6h8" /><path stroke="silver" d="M12 6h1m-2 1h1M1 8h10M1 10h6m3 0h2M1 11h6m3 0h2" /><path stroke="#ff0" d="M7 11h3" /></svg>;

export const printData = {
  '16x16_4': Print_16x16_4
};

export interface PrintProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Print: React.FC<PrintProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = printData[variant];

  return <Svg {...rest} />;
};
