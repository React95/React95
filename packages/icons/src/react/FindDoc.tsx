import React from 'react';
import type { SVGProps } from "react";

const FindDoc_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M1 1h8M1 2h1M1 3h1M1 4h1M1 5h1M1 6h1M1 7h1m7 0h1m2 0h1M1 8h1m6 0h1m3 0h2M1 9h1m10 0h1M1 10h1m10 0h1M1 11h1m6 0h1m3 0h2M1 12h1m7 0h1m2 0h1M1 13h1m-1 1h1" /><path stroke="#000" d="M9 1h1M9 2h2M9 3h1m1 0h1M9 4h4m-1 1h1M9 6h4M8 7h1m4 0h1M7 8h1m6 0h1M7 9h1m6 0h1m-8 1h1m6 0h1m-8 1h1m6 0h1m-7 1h1m4 0h2m-6 1h7m-4 1h1m1 0h2M1 15h12m2 0h1" /><path stroke="#fff" d="M2 2h7M2 3h7M2 4h7M2 5h10M2 6h7M2 7h6M2 8h5M2 9h5m-5 1h5m-5 1h5m-5 1h6m-6 1h7" /><path stroke="silver" d="M10 3h1m-1 4h2m-1 1h1M8 9h1m1 0h2m1 0h1m-6 1h4m1 0h1m-5 1h2m-1 1h2M2 14h10" /><path stroke="#0ff" d="M9 8h2M9 9h1m1 2h1" /></svg>;

export const findDocData = {
  '16x16_4': FindDoc_16x16_4
};

export interface FindDocProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const FindDoc: React.FC<FindDocProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = findDocData[variant];

  return <Svg {...rest} />;
};
