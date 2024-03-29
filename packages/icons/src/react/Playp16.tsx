import React from 'react';
import type { SVGProps } from "react";

const Playp16_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#0ff" d="M11 0h1m-1 1h2M8 2h6m-3 1h2m-2 1h1" /><path stroke="#000" d="M2 1h2M2 2h1m1 0h1M2 3h1m2 0h1M2 4h1m3 0h1M2 5h1m4 0h1M2 6h1m5 0h1M2 7h1m6 0h1M2 8h1m5 0h1M2 9h1m4 0h1m-6 1h1m3 0h1m-5 1h1m2 0h1m-4 1h1m1 0h1m-3 1h2" /><path stroke="#0f0" d="M3 2h1M3 3h2M3 4h3M3 5h4M3 6h5M3 7h6M3 8h5M3 9h4m-4 1h3m-3 1h2m-2 1h1" /></svg>;

export const playp16Data = {
  '16x16_4': Playp16_16x16_4
};

export interface Playp16Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Playp16: React.FC<Playp16Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = playp16Data[variant];

  return <Svg {...rest} />;
};
