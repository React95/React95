import React from 'react';
import type { SVGProps } from "react";

const Explorer104_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M9 0h3M8 1h1m3 0h2M7 2h1M5 3h2M3 4h2m1 0h1M1 5h2m4 0h2m4 0h2M0 6h1m8 0h2m2 0h2M0 7h1m10 0h4M0 8h1m8 0h1m4 0h1M0 9h1m6 0h2m-9 1h2m5 0h1m-7 1h3m3 0h1m-4 1h2m1 0h1m-2 1h1m0 1h2" /><path stroke="#fff" d="M9 1h3M8 2h6M7 3h6M5 4h1m2 0h4M3 5h1m6 0h1M1 6h1M1 7h3M1 8h1m2 0h2M1 9h1m4 0h1m4 0h2m-3 1h1m2 0h1m-2 1h2m-3 1h2m-2 2h2" /><path stroke="#000" d="M14 2h2m-3 1h1m-2 1h1m-2 1h1m-1 1h1m3 0h1m-1 1h1m-1 1h1m-1 1h1M1 12h1m0 1h2m3 0h1m-4 1h2m0 1h3" /><path stroke="silver" d="M7 4h1M4 5h3m2 0h1m2 0h1M2 6h2m2 0h3m3 0h1M4 7h2m2 0h3M2 8h2m2 0h3M2 9h4m-4 1h5m-3 1h3m-5 1h2m2 0h1m-3 1h2m0 1h1" /><path stroke="#0f0" d="M4 6h2" /><path stroke="red" d="M6 7h2m2 1h4M9 9h2m2 0h2m-7 1h2m1 0h2m1 0h2m-8 1h4m2 0h2m-8 1h3m2 0h3m-8 1h8m-7 1h2m2 0h2m-5 1h4" /></svg>;

export const explorer104Data = {
  '16x16_4': Explorer104_16x16_4
};

export interface Explorer104Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Explorer104: React.FC<Explorer104Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = explorer104Data[variant];

  return <Svg {...rest} />;
};
