import React from 'react';
import type { SVGProps } from "react";

const Network_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M24 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-9 1h6m7 0h3m-17 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M0 21h5m7 0h4m-9 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M25 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-10 2h6m2 0h1m4 0h3m-16 1h1m7 0h1m-9 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M0 22h5m2 0h1m4 0h5M7 23h1m0 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M26 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 1h1m-1 1h1m-12 1h5m6 0h4m-15 1h1m4 0h7m-12 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-7 1h1m5 0h1m-7 1h1m5 0h1M0 23h5m6 0h6M5 24h7m-3 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="olive" d="M22 9h6m-6 1h1m3 0h2m-6 1h1m3 0h2M5 21h6m-6 1h1m3 0h2m-6 1h1m3 0h2" /><path stroke="#ff0" d="M23 10h1m1 0h1m-3 1h1m1 0h1M6 22h1m1 0h1m-3 1h1m1 0h1" /></svg>;
const Network_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M12 0h1m-1 1h1m-1 1h1m-1 1h1M8 4h3m3 0h2M7 5h1M7 6h1M7 7h1M7 8h1M7 9h1m-8 1h2m3 0h3m-5 2h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M13 0h1m-1 1h1m-1 1h1m-1 1h1M8 5h3m3 0h2M8 6h1m2 0h4M8 7h1M8 8h1M8 9h1m-1 1h1m-9 1h2m3 0h4m-5 1h2m-2 1h1m-1 1h1m-1 1h1" /><path stroke="olive" d="M12 4h2m-1 1h1M2 11h1m1 0h1" /><path stroke="#ff0" d="M11 5h2" /><path stroke="#fff" d="M3 11h1" /></svg>;

export const networkData = {
  '32x32_4': Network_32x32_4,
  '16x16_4': Network_16x16_4
};

export interface NetworkProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Network: React.FC<NetworkProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = networkData[variant];

  return <Svg {...rest} />;
};
