import React from 'react';
import type { SVGProps } from "react";

const Copy_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M0 2h6M0 3h1m4 0h2M0 4h1m4 0h1m1 0h1M0 5h1m1 0h2m1 0h1M0 6h1M0 7h1m1 0h4M0 8h1m7 0h2M0 9h1m1 0h4m-6 1h1m7 0h5M0 11h6m2 1h5" /><path stroke="#fff" d="M1 3h4M1 4h4m1 0h1M1 5h1m2 0h1M1 6h5m1 0h4M1 7h1m5 0h4m1 0h1M1 8h5m1 0h1m2 0h1M1 9h1m5 0h7M1 10h5m1 0h1m5 0h1m-7 1h7m-7 1h1m5 0h1m-7 1h7" /><path stroke="navy" d="M6 5h6M6 6h1m4 0h2M6 7h1m4 0h1m1 0h1M6 8h1m4 0h4M6 9h1m7 0h1m-9 1h1m7 0h1m-9 1h1m7 0h1m-9 1h1m7 0h1m-9 1h1m7 0h1m-9 1h9" /></svg>;

export const copyData = {
  '16x16_4': Copy_16x16_4
};

export interface CopyProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Copy: React.FC<CopyProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = copyData[variant];

  return <Svg {...rest} />;
};
