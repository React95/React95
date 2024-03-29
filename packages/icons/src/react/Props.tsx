import React from 'react';
import type { SVGProps } from "react";

const Props_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M8 1h6M7 2h1m6 0h1M6 3h1m1 0h1M1 4h5m1 0h1m1 0h1M1 5h1m2 0h1m1 0h1m1 0h1m1 0h1m3 0h1M1 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3M1 7h1m1 0h2m3 0h1m1 0h1m1 0h1M1 8h1m7 0h1m2 0h1M1 9h1m10 0h1M1 10h1m1 0h2m1 0h5m1 0h1M1 11h1m10 0h1M1 12h1m1 0h2m1 0h5m1 0h1M1 13h1m10 0h1M1 14h12" /><path stroke="navy" d="M15 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M8 2h6M7 3h1m1 0h6M6 4h1m1 0h1m1 0h5M5 5h1m1 0h1m1 0h1m1 0h3M4 6h1m3 0h1m1 0h1M9 7h1" /><path stroke="#fff" d="M2 5h2M2 6h1m3 0h1M2 7h1m2 0h3m3 0h1M2 8h7m1 0h2M2 9h10M2 10h1m2 0h1m5 0h1M2 11h10M2 12h1m2 0h1m5 0h1M2 13h10" /></svg>;

export const propsData = {
  '16x16_4': Props_16x16_4
};

export interface PropsProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Props: React.FC<PropsProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = propsData[variant];

  return <Svg {...rest} />;
};
