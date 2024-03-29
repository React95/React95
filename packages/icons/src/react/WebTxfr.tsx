import React from 'react';
import type { SVGProps } from "react";

const WebTxfr_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M3 0h6M2 1h2M1 2h1M0 3h2M0 4h1M0 5h1M0 6h1M0 7h1m10 0h1M0 8h1m10 0h1m-9 3h1" /><path stroke="teal" d="M4 1h1m4 6h1" /><path stroke="silver" d="M5 1h1M3 2h1m0 1h1M2 4h1" /><path stroke="green" d="M6 1h3M5 2h5M3 4h2m1 0h2M2 5h5M3 6h5M5 7h4M5 8h2m1 0h1M5 9h1" /><path stroke="#000" d="M9 1h1m2 0h1m-3 1h1m1 0h2M8 3h5m1 0h1M8 4h1m6 0h1M8 5h1m6 0h1M8 6h5m1 0h1m-3 1h2M7 8h1m4 0h1M1 9h1m4 0h2m2 0h1m-9 1h1m2 0h1m1 0h5m-8 1h1m6 0h1m-8 1h1m6 0h1m-7 1h1m1 0h5m-6 1h2m-1 1h1" /><path stroke="#fff" d="M2 2h1m1 0h1M3 3h1" /><path stroke="#00f" d="M2 3h1m2 0h3M1 4h1M1 5h1M1 6h2M1 7h4m5 0h1M2 8h3m4 0h1M2 9h3m3 0h1m-5 1h1" /><path stroke="#0ff" d="M13 3h1M9 4h6M9 5h6m-2 1h1m-8 4h1m-2 1h6m-6 1h6m-5 1h1" /><path stroke="navy" d="M5 4h1m1 1h1M1 8h1m8 0h1M9 9h1m-7 1h1" /></svg>;

export const webTxfrData = {
  '16x16_4': WebTxfr_16x16_4
};

export interface WebTxfrProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const WebTxfr: React.FC<WebTxfrProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = webTxfrData[variant];

  return <Svg {...rest} />;
};
