import React from 'react';
import type { SVGProps } from "react";

const Websrch_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M5 0h5M3 1h2m5 0h2M2 2h1M1 3h1M1 4h1M0 5h1m6 0h2M0 6h1m5 0h1M0 7h1m4 0h1M0 8h1m4 0h1M0 9h1m4 0h1m-6 1h1m5 0h1m4 0h2m-6 1h1m2 0h1" /><path stroke="silver" d="M5 1h1M4 2h1M3 3h1M2 4h1M1 5h1m1 0h1m5 1h1M1 7h1m1 0h2m3 0h1m1 0h1M2 8h3m2 0h1m1 0h1M2 9h1m3 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1" /><path stroke="#fff" d="M6 1h1M3 2h1m1 0h1M2 3h1m0 1h1M2 5h1m1 0h1M1 6h3m3 0h1M2 7h1m3 0h1m4 4h1" /><path stroke="#00f" d="M7 1h1M6 2h1M6 4h3M5 5h2m6 0h1M4 6h1m6 0h2m-1 1h1M3 9h1m8 0h1M2 10h3m-4 1h1m1 0h3m-4 1h5m1 0h1m-6 1h2m2 0h1m1 0h1" /><path stroke="teal" d="M8 1h2M4 3h1m5 1h1m-1 1h1m2 1h1M1 8h1M1 9h1m2 0h1m5 3h1" /><path stroke="#000" d="M7 2h5M5 3h9M4 4h2m3 0h1m1 0h3M9 5h1m1 0h2m1 0h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-5 1h1m3 0h1m-7 1h2m0 3h2m3 0h1M5 15h5m4 0h2" /><path stroke="navy" d="M12 2h1m0 5h1m-2 1h2m-1 1h1m-1 1h1M1 12h1m7 0h1m-8 1h1m2 0h2m1 0h1m1 0h2m-9 1h7" /><path stroke="green" d="M5 6h1m-5 4h1m0 1h1m3 0h1m0 1h1" /><path stroke="#0ff" d="M8 6h1M7 7h1m1 0h1M6 8h1m1 0h1m1 0h1M7 9h1m1 0h1m-2 1h1" /><path stroke="red" d="M12 11h1m0 1h1m0 1h1m-1 1h1" /><path stroke="maroon" d="M13 11h1m-3 1h1m2 0h1m-3 1h1m2 0h1m-3 1h1" /><path stroke="#f0f" d="M12 12h1m0 1h1" /></svg>;

export const websrchData = {
  '16x16_4': Websrch_16x16_4
};

export interface WebsrchProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Websrch: React.FC<WebsrchProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = websrchData[variant];

  return <Svg {...rest} />;
};
