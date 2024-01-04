import React from 'react';
import type { SVGProps } from "react";

const Font2_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="navy" d="M7 2h1M7 3h1M6 4h3M6 5h3M5 6h2m1 0h2M5 7h1m2 0h2M4 8h7M4 9h1m4 0h2m-8 1h2m5 0h2m-9 1h1m6 0h2M1 12h4m3 0h6" /><path stroke="gray" d="M6 3h1m1 0h1M5 5h1m3 0h1M4 7h1m5 0h1M3 9h1m7 0h1m-3 1h1m-8 1h1m6 0h1m2 0h1" /></svg>;

export const font2Data = {
  '16x16_4': Font2_16x16_4
};

export interface Font2Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Font2: React.FC<Font2Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = font2Data[variant];

  return <Svg {...rest} />;
};
