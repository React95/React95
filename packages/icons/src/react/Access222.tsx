import React from 'react';
import type { SVGProps } from "react";

const Access222_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M21 2h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m-6 1h7m-8 1h1m2 0h1m-5 1h1m4 0h1m-7 1h1m5 0h1m-9 1h2m7 0h1m-10 1h1m8 0h1m-10 1h1m9 0h1m-10 1h1m8 0h1m-10 1h1m6 0h3m-10 1h1m0 1h1m-1 1h1m-1 1h1m-3 1h2m-4 1h2m-4 1h2m-4 1h2m-4 1h2" /><path stroke="teal" d="M21 3h1m-1 1h2m-2 1h3m-3 1h1m1 0h2m-4 1h1m1 0h3m-5 1h1m2 0h3m-6 1h1m2 0h4m-7 1h1m3 0h4m-8 1h1m3 0h5m-9 1h1m2 0h1m-4 1h1m1 0h1m2 0h1m-6 1h2m2 0h1m1 0h1m-7 1h1m3 0h1m1 0h1m-2 1h1m1 0h1m-3 1h1m1 0h1m-2 1h1m1 0h1m-3 1h3" /><path stroke="#0ff" d="M22 6h1m-1 1h1m-1 1h2m-2 1h2m-2 1h3m-3 1h3m-3 1h2m-2 1h1m2 0h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1" /><path stroke="gray" d="M10 12h3m-5 1h2m3 0h2m-9 1h2m7 0h2M3 15h3m11 0h3M3 16h1m15 0h1M2 17h1m15 0h2M2 18h1m13 0h4M1 19h1m12 0h7M1 20h1m10 0h9M1 21h1m10 0h9M0 22h1m11 0h10M0 23h1m11 0h10M0 24h1m11 0h10M1 25h2m9 0h8M3 26h2m7 0h6M5 27h2m5 0h4m-9 1h2m3 0h2m-5 1h3" /><path stroke="silver" d="M10 13h3m-5 1h7m-9 1h11M5 16h13M7 17h9M4 18h2m3 0h5M3 19h5m-5 1h8m-8 1h8m-9 1h9m-9 1h9M1 24h10m-8 1h8m-6 1h6m-4 1h4m-2 1h2" /><path stroke="#fff" d="M4 16h1m13 0h1M3 17h4m9 0h2M3 18h1m2 0h3m5 0h2M2 19h1m5 0h6M2 20h1m8 0h1M2 21h1m8 0h1M1 22h1m9 0h1M1 23h1m9 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /></svg>;

export const access222Data = {
  '32x32_4': Access222_32x32_4
};

export interface Access222Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Access222: React.FC<Access222Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = access222Data[variant];

  return <Svg {...rest} />;
};
