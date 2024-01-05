import React from 'react';
import type { SVGProps } from "react";

const Gcdef105_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="maroon" d="M15 0h1m-2 1h3m-4 1h5m-6 1h7m-8 1h9M10 5h11M9 6h13m-9 1h5m-5 1h5m-5 1h5m6 0h1m-12 1h5m6 0h2m-13 1h5m6 0h3m-3 1h4m-9 1h10m-10 1h11m-11 1h12m-12 1h11m-11 1h10m-5 1h4m-15 1h5m6 0h3m-14 1h5m6 0h2m-13 1h5m6 0h1m-12 1h5m-5 1h5m-9 1h13m-12 1h11m-10 1h9m-8 1h7m-6 1h5m-4 1h3m-2 1h1" /><path stroke="red" d="M6 9h1m-2 1h2m-3 1h3m-4 1h4m-5 1h10M1 14h11M0 15h12M1 16h11M2 17h10m-9 1h4m-3 1h3m-2 1h2m-1 1h1" /></svg>;

export const gcdef105Data = {
  '32x32_4': Gcdef105_32x32_4
};

export interface Gcdef105Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Gcdef105: React.FC<Gcdef105Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = gcdef105Data[variant];

  return <Svg {...rest} />;
};
