import React from 'react';
import type { SVGProps } from "react";

const Main106_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M9 7h1M9 8h1M8 9h3m-3 1h1m-2 1h1m1 0h3m-5 1h1m-2 1h1m3 0h3m-7 1h1m-2 1h1m5 0h3m-9 1h1m-2 1h1m7 0h3M4 18h1m-2 1h1m9 0h2M3 20h1m-2 1h1m-3 1h2" /><path stroke="#000" d="M10 7h1m11 0h1m0 1h1M11 9h1m11 0h1m0 1h1M8 11h1m3 0h1m7 0h1m3 0h1m-5 1h1m4 0h1M7 13h1m5 0h1m5 0h1m5 0h1m-7 1h1m6 0h1M6 15h1m7 0h1m3 0h1m7 0h1m-9 1h1m8 0h1M5 17h1m9 0h1m1 0h1m9 0h1m0 1h1M4 19h9m3 0h8m4 0h1m-13 1h1m12 0h1M3 21h1m11 0h3m11 0h1m1 1h1M0 23h7m4 0h8m3 0h10" /><path stroke="olive" d="M21 7h1m-2 1h1m-2 2h1m-2 2h1m2 1h1m-5 1h1m3 0h1m0 1h1m-7 1h1m5 0h1m0 1h1m-9 1h1m-2 2h1m9 0h1m-12 1h1m10 0h1m-7 1h1m3 0h1" /><path stroke="#fff" d="M12 8h8m-7 2h6m-5 2h4M8 14h2m5 0h2M7 16h4m-6 4h8m-6 2h4" /><path stroke="#ff0" d="M21 8h2m-3 1h3m-3 1h4m-5 1h1m1 0h3m-5 1h1m1 0h4m-7 1h1m3 0h3m-7 1h1m3 0h4m-9 1h1m5 0h3m-9 1h1m5 0h4m-11 1h1m7 0h3m-11 1h12m-13 1h1m8 0h4m-13 1h1m9 0h4m-15 1h1m10 0h4m-17 1h6m5 0h8" /><path stroke="silver" d="M9 10h3m-4 2h5m-5 1h2m-3 1h1m2 0h4m-7 1h4m-5 1h1m4 0h4m-9 1h6m-7 1h10M4 20h1m8 0h1M4 21h9M2 22h5m4 0h1" /></svg>;

export const main106Data = {
  '32x32_4': Main106_32x32_4
};

export interface Main106Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Main106: React.FC<Main106Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = main106Data[variant];

  return <Svg {...rest} />;
};
