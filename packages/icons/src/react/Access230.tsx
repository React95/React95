import React from 'react';
import type { SVGProps } from "react";

const Access230_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M20 0h1m-2 1h1m1 0h1m-2 1h2m0 1h3m0 1h1m-1 1h1M5 6h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m3 0h1M3 7h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h4M2 8h1M2 9h1m25 2h1m-1 1h1M8 13h1m5 0h1m5 0h1m5 0h1m1 0h1M8 14h1m5 0h1m5 0h1m5 0h1m1 0h1M8 15h1m5 0h1m5 0h1m5 0h1m1 0h1M8 16h1m5 0h1m5 0h1m5 0h1m1 0h1M8 17h1m5 0h1m5 0h1m5 0h1m1 0h1M3 18h24m1 0h1M8 19h1m5 0h1m5 0h1m5 0h1m1 0h1M8 20h1m5 0h1m5 0h1m5 0h1m1 0h1M8 21h1m5 0h1m5 0h1m5 0h1m1 0h1M8 22h1m5 0h1m5 0h1m5 0h1m1 0h1M8 23h1m5 0h1m5 0h1m5 0h1m1 0h1M3 24h24m1 0h1m-1 1h1M1 26h27" /><path stroke="#ff0" d="M20 1h1" /><path stroke="gray" d="M1 10h27M0 11h1m26 0h1M0 12h1m1 0h26M0 13h1m1 0h1m24 0h1M0 14h1m1 0h1m24 0h1M0 15h1m1 0h1m24 0h1M0 16h1m1 0h1m24 0h1M0 17h1m1 0h1m24 0h1M0 18h1m1 0h1m24 0h1M0 19h1m1 0h1m24 0h1M0 20h1m1 0h1m24 0h1M0 21h1m1 0h1m24 0h1M0 22h1m1 0h1m24 0h1M0 23h1m1 0h1m24 0h1M0 24h1m1 0h1m24 0h1M0 25h28" /><path stroke="#fff" d="M1 11h26M1 12h1m-1 1h1m1 0h5m1 0h5m1 0h5m1 0h5M1 14h1m1 0h1m5 0h1m5 0h1m5 0h1M1 15h1m1 0h1m5 0h1m5 0h1m5 0h1M1 16h1m1 0h1m5 0h1m5 0h1m5 0h1M1 17h1m1 0h1m5 0h1m5 0h1m5 0h1M1 18h1m-1 1h1m1 0h5m1 0h5m1 0h5m1 0h5M1 20h1m1 0h1m5 0h1m5 0h1m5 0h1M1 21h1m1 0h1m5 0h1m5 0h1m5 0h1M1 22h1m1 0h1m5 0h1m5 0h1m5 0h1M1 23h1m1 0h1m5 0h1m5 0h1m5 0h1M1 24h1" /><path stroke="silver" d="M4 14h4m2 0h4m2 0h4m2 0h4M4 15h4m2 0h4m2 0h4m2 0h4M4 16h4m2 0h4m2 0h4m2 0h4M4 17h4m2 0h4m2 0h4m2 0h4M4 20h4m2 0h4m2 0h4m2 0h4M4 21h4m2 0h4m2 0h4m2 0h4M4 22h4m2 0h4m2 0h4m2 0h4M4 23h4m2 0h4m2 0h4m2 0h4" /></svg>;

export const access230Data = {
  '32x32_4': Access230_32x32_4
};

export interface Access230Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Access230: React.FC<Access230Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = access230Data[variant];

  return <Svg {...rest} />;
};
