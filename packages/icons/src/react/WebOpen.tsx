import React from 'react';
import type { SVGProps } from "react";

const WebOpen_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M2 0h5M1 1h1m2 0h1M0 2h1M0 3h1m8 0h1M9 7h1M0 8h1" /><path stroke="#00f" d="M2 1h1M1 3h1m3 0h2M0 4h1m3 0h1m1 0h1M0 5h1m5 0h1m1 0h1M0 6h3m5 0h1M0 7h2m5 0h1" /><path stroke="green" d="M5 1h2M5 2h3M4 3h1m2 0h2M2 4h2m1 0h1m1 0h2M1 5h5m1 0h1M3 6h4M5 7h2" /><path stroke="#000" d="M7 1h1m0 1h1m0 2h1M9 5h1M9 6h3M2 7h3m3 0h1m3 0h1m1 0h1M1 8h1m3 0h6m2 0h2M1 9h1m8 0h1m1 0h3M1 10h1m8 0h1M1 11h1m3 0h10M1 12h1m2 0h1m8 0h1M1 13h1m1 0h1m8 0h1M1 14h2m8 0h1M1 15h10" /><path stroke="#fff" d="M1 2h1m0 1h1m0 5h1M2 9h1m1 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m-2 1h1m-2 1h1" /><path stroke="teal" d="M3 2h1M3 3h1m3 3h1" /><path stroke="#ff0" d="M2 8h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m-6 1h1m-2 1h1" /><path stroke="olive" d="M5 12h8m-9 1h8m-9 1h8" /></svg>;

export const webOpenData = {
  '16x16_4': WebOpen_16x16_4
};

export interface WebOpenProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const WebOpen: React.FC<WebOpenProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = webOpenData[variant];

  return <Svg {...rest} />;
};
