import React from 'react';
import type { SVGProps } from "react";

const Confcp109_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props} />;
const Confcp109_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#ff0" d="M5 2h4M4 3h2m2 0h2M3 4h3m2 0h3M2 5h4m2 0h4M2 6h4m2 0h4M2 7h4m2 0h4M2 8h10M3 9h3m2 0h3m-7 1h2m2 0h2m-5 1h4" /><path stroke="#000" d="M3 3h1m2 0h2m2 0h4M6 4h2m5 0h1M6 5h2m5 0h1M6 6h2m5 0h1M6 7h2m5 0h1m-1 1h1M6 9h2m5 0h1M3 10h1m2 0h2m5 0h1M3 11h1m9 0h1M3 12h1m9 0h1M3 13h11" /><path stroke="#fff" d="M11 4h2m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h2m-3 1h3m-9 1h1m4 0h4m-9 1h9" /></svg>;

export const confcp109Data = {
  '32x32_4': Confcp109_32x32_4,
  '16x16_4': Confcp109_16x16_4
};

export interface Confcp109Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Confcp109: React.FC<Confcp109Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = confcp109Data[variant];

  return <Svg {...rest} />;
};
