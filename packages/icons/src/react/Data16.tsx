import React from 'react';
import type { SVGProps } from "react";

const Data16_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M1 1h14M1 2h1m12 0h1M1 3h1m12 0h1M1 4h1m12 0h1M1 5h1m12 0h1M1 6h1m12 0h1M1 7h1m12 0h1M1 8h1m12 0h1M1 9h1m12 0h1M1 10h1m12 0h1M1 11h1m12 0h1M1 12h1m12 0h1M1 13h1m12 0h1" /><path stroke="#fff" d="M2 2h12M2 3h1m10 0h1M2 4h12M2 5h1m3 0h1m3 0h1m2 0h1M2 6h12M2 7h1m3 0h1m3 0h1m2 0h1M2 8h12M2 9h1m3 0h1m3 0h1m2 0h1M2 10h12M2 11h1m3 0h1m3 0h1m2 0h1M2 12h7m3 0h2M2 13h3m8 0h1" /><path stroke="olive" d="M3 3h10" /><path stroke="gray" d="M3 5h3m1 0h3m1 0h2M3 7h3m1 0h3m1 0h2M3 9h3m1 0h3m1 0h2M3 11h3m1 0h3m1 0h2" /></svg>;

export const data16Data = {
  '16x16_4': Data16_16x16_4
};

export interface Data16Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Data16: React.FC<Data16Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = data16Data[variant];

  return <Svg {...rest} />;
};
