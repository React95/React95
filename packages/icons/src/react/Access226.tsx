import React from 'react';
import type { SVGProps } from "react";

const Access226_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M10 5h3M8 6h2m3 0h2M6 7h2m7 0h2M3 8h3m5 0h2m4 0h2M3 9h1m5 0h2m8 0h1M2 10h1m15 0h2M2 11h1m13 0h4M1 12h1m12 0h6M1 13h1m10 0h8M1 14h1m10 0h11M0 15h1m11 0h8m3 0h2M0 16h1m11 0h6m2 0h3m2 0h2M0 17h1m11 0h4m3 0h1m3 0h1m3 0h2M1 18h2m9 0h2m5 0h1m3 0h1m5 0h1M3 19h2m7 0h1m7 0h3m5 0h2M5 20h2m5 0h1m13 0h4M7 21h2m15 0h6M9 22h2m11 0h8m-19 1h2m9 0h8m-17 1h2m7 0h6m-13 1h2m5 0h4m-9 1h2m3 0h2m-5 1h3" /><path stroke="silver" d="M10 6h3M8 7h7M6 8h5m2 0h4M5 9h4m2 0h7M7 10h9M4 11h2m3 0h5M3 12h5m-5 1h8m-8 1h8m-9 1h9m9 0h3M2 16h9m7 0h2m3 0h2M1 17h10m5 0h3m1 0h3m1 0h3M3 18h8m4 0h4m1 0h3m1 0h4M5 19h6m6 0h3m3 0h3M7 20h4m3 0h2m3 0h5M9 21h2m2 0h5m-5 1h8m-8 1h8m-6 1h6m-4 1h4m-2 1h2" /><path stroke="red" d="M26 6h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-4 1h6m-5 1h4m-3 1h2" /><path stroke="maroon" d="M28 6h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 1h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="#fff" d="M4 9h1m13 0h1M3 10h4m9 0h2M3 11h1m2 0h3m5 0h2M2 12h1m5 0h6M2 13h1m8 0h1M2 14h1m8 0h1M1 15h1m9 0h1M1 16h1m9 0h1m-1 1h1m-1 1h1m2 0h1m13 0h1m-18 1h1m1 0h4m9 0h2m-17 1h1m1 0h1m2 0h3m5 0h2m-15 1h2m5 0h6m-13 1h2m8 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M20 10h1m-1 1h1m-1 1h1m-1 1h1m9 6h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-3 1h2m-4 1h2m-4 1h2m-4 1h2" /></svg>;

export const access226Data = {
  '32x32_4': Access226_32x32_4
};

export interface Access226Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Access226: React.FC<Access226Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = access226Data[variant];

  return <Svg {...rest} />;
};
