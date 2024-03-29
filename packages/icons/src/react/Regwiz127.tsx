import React from 'react';
import type { SVGProps } from "react";

const Regwiz127_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M9 4h1m6 0h1M9 5h2m1 0h1m-2 1h1m2 0h4m-1 1h2m-1 1h2m-1 1h1M3 10h2m14 0h2m1 0h1M9 11h1m9 0h1m1 0h1m-12 1h1m2 0h1m-1 2h2m0 1h1m5 0h1M3 16h3m15 0h1M6 17h1m2 0h1m10 0h1m-11 1h1m0 1h1m7 0h1m-7 1h1m3 0h2M9 21h1m5 0h2m-8 1h1m6 0h1" /><path stroke="#000" d="M10 4h6M7 5h2m2 0h1m1 0h6M6 6h1m3 0h1m1 0h2m4 0h2M5 7h1m3 0h1m3 0h1m5 0h2M4 8h1m7 0h1m7 0h2M4 9h1m6 0h1m8 0h2m-12 1h4m7 0h1M3 11h1m6 0h1m3 0h1m5 0h1m1 0h1M3 12h1m7 0h2m2 0h3m1 0h4M3 13h1m5 0h7m1 0h3m1 0h2M3 14h1m4 0h1m6 0h2m1 0h2m1 0h2M3 15h1m4 0h1m7 0h1m5 0h1M9 16h2m5 0h1m5 0h1M4 17h2m5 0h1m3 0h2m4 0h1M4 18h3m5 0h1m2 0h1m4 0h2M5 19h2m5 0h1m1 0h1m5 0h1M6 20h1m5 0h1m1 0h1m4 0h1M7 21h2m4 0h2m2 0h2m-9 1h6" /><path stroke="green" d="M7 6h3M6 7h1M5 8h1m9 12h1" /><path stroke="#0ff" d="M7 7h1m3 0h2M6 8h1m1 0h1m1 0h2m1 0h1M7 9h1m1 0h2m-5 1h1m1 0h2m-5 1h1m1 0h1m3 0h1m-6 1h1m2 0h1m-5 1h1m0 1h1m10 1h3M6 16h1m1 0h1m8 0h2M7 17h1m2 0h1m6 0h2M7 18h3m1 0h1m4 0h2M8 19h3m4 0h1m-6 1h2" /><path stroke="olive" d="M14 7h3m-3 1h4m-6 1h7m-5 1h5m-4 1h4m-1 1h1M9 14h4m-4 1h6m-4 1h5m-4 1h3m-2 1h2m-2 1h1" /><path stroke="teal" d="M5 9h1m-1 1h1m-2 1h1m7 0h2M4 12h1m9 0h1M4 13h1m3 0h1m7 0h1m3 0h1M4 14h1m15 0h1M4 15h2m14 0h1m-2 1h2m-2 1h1m-2 1h2M7 19h1m8 0h3M7 20h3m6 0h1m-7 1h3" /><path stroke="#0f0" d="M17 14h1" /></svg>;

export const regwiz127Data = {
  '32x32_4': Regwiz127_32x32_4
};

export interface Regwiz127Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Regwiz127: React.FC<Regwiz127Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = regwiz127Data[variant];

  return <Svg {...rest} />;
};
