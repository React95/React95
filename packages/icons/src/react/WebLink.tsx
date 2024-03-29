import React from 'react';
import type { SVGProps } from "react";

const WebLink_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M3 0h6M2 1h2M1 2h1M0 3h2m9 0h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1m10 0h1m-6 4h1m5 0h1" /><path stroke="teal" d="M4 1h1m3 4h1m0 2h1" /><path stroke="silver" d="M5 1h1M3 2h1m0 1h1M2 4h1m2 6h1m1 0h1m3 0h1m1 0h1M4 11h1m9 0h1m-7 1h3m-7 1h1m9 0h1M5 14h1m1 0h1m3 0h1m1 0h1" /><path stroke="green" d="M6 1h3M5 2h5M9 3h2M3 4h2m1 0h2m1 0h2M2 5h5m3 0h1M3 6h6M5 7h4M5 8h4" /><path stroke="#000" d="M9 1h1m0 1h1m0 2h1m-1 1h1m-1 1h1m-1 1h1M1 9h1m3 0h4m1 0h4M2 10h1m1 0h1m4 0h1m4 0h1M3 11h1m1 0h9m1 0h1M3 12h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1M3 13h1m1 0h9m1 0h1M4 14h1m4 0h1m4 0h1M5 15h4m1 0h4" /><path stroke="#fff" d="M2 2h1m1 0h1M3 3h1m2 7h1m1 0h1m1 0h1m1 0h1m-9 2h1m9 0h1m-9 2h1m1 0h1m1 0h1m1 0h1" /><path stroke="#00f" d="M2 3h1m2 0h4M1 4h1m6 0h1M1 5h1M1 6h2m6 0h2M1 7h4m5 0h1M2 8h3m4 0h1M2 9h3" /><path stroke="navy" d="M5 4h1m1 1h1m1 0h1M1 8h1m8 0h1M9 9h1m-7 1h1" /></svg>;

export const webLinkData = {
  '16x16_4': WebLink_16x16_4
};

export interface WebLinkProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const WebLink: React.FC<WebLinkProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = webLinkData[variant];

  return <Svg {...rest} />;
};
