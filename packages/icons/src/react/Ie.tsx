import React from 'react';
import type { SVGProps } from "react";

const Ie_16x16_8 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#06c" d="M11 0h4M6 1h6m3 0h1M4 2h2m6 0h1M4 3h1m2 0h2m4 0h1M6 4h2m2 0h1m3 0h1M6 5h2m6 0h1M6 6h1m8 0h1m-1 1h1M6 8h10M6 9h1m-2 1h1m1 1h1m0 1h1m0 1h1" /><path stroke="#36f" d="M6 2h4m5 0h1m-1 1h1M5 5h1M4 6h2M5 7h4M5 8h1M2 9h1m2 0h1m0 1h1m5 0h3m-9 1h1m4 0h4m-8 1h1m1 0h5m-4 1h2" /><path stroke="#39c" d="M10 2h1M9 3h1m1 0h1m-1 2h1M9 7h2" /><path stroke="#09f" d="M11 2h1m-2 1h1m1 0h1m0 1h1m0 2h1m-4 1h4" /><path stroke="#33c" d="M3 3h1M2 4h1m5 0h2m0 1h1M1 6h1m9 0h1M3 9h1m7 1h1m-8 1h1m5 0h1M1 12h1m3 0h1m-5 1h1m4 0h1m-6 1h1m6 0h1m-7 1h3" /><path stroke="#69c" d="M5 3h1" /><path stroke="#9cc" d="M6 3h1" /><path stroke="#339" d="M3 4h1M2 5h1m0 5h1m0 2h1" /><path stroke="#699" d="M4 4h1M3 5h1" /><path stroke="silver" d="M5 4h1" /><path stroke="#0cf" d="M11 4h1m1 2h1" /><path stroke="#6ff" d="M12 4h1m0 1h1m-2 1h1" /><path stroke="#ff9" d="M4 5h1" /><path stroke="#9ff" d="M12 5h1" /><path stroke="#996" d="M2 6h1m-2 4h1" /><path stroke="#fc9" d="M3 6h1" /><path stroke="#777" d="M1 7h1M0 8h1M0 9h1m-1 4h1" /><path stroke="#cc9" d="M2 7h1M1 8h1" /><path stroke="#66c" d="M3 7h1" /><path stroke="#36c" d="M4 7h1M3 8h1m-2 2h1m-2 1h1" /><path stroke="#c96" d="M2 8h1M1 9h1" /><path stroke="#369" d="M4 8h1M4 9h1m-1 1h1m0 1h1m0 1h1m0 1h2m0 1h1" /><path stroke="#5f5f5f" d="M0 10h1m-1 1h1m-1 1h1" /><path stroke="#069" d="M15 10h1m-1 1h1m-2 1h1m-3 1h2M2 14h1m7 0h2" /><path stroke="#039" d="M2 11h1m2 3h1" /><path stroke="navy" d="M3 11h1" /><path stroke="#336" d="M3 12h1" /><path stroke="#161616" d="M4 13h2m0 1h1" /><path stroke="#009" d="M7 14h1" /></svg>;

export const ieData = {
  '16x16_8': Ie_16x16_8
};

export interface IeProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_8';
}

export const Ie: React.FC<IeProps> = ({
  variant = '16x16_8',
  ...rest
}) => {
  const Svg = ieData[variant];

  return <Svg {...rest} />;
};
