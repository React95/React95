import React from 'react';
import type { SVGProps } from "react";

const Ccapi104_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M0 21h10M0 22h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M10 21h1m-1 1h1m-7 1h4m2 0h1m-6 1h3m2 0h1m-7 1h4m2 0h1m-8 1h3m1 0h1m2 0h1m-8 1h2m5 0h1m-8 1h1m6 0h1m-7 1h1m5 0h1m-1 1h1M0 31h11" /><path stroke="#fff" d="M1 22h9m-9 1h3m4 0h2m-9 1h4m3 0h2m-9 1h3m4 0h2m-9 1h2m3 0h1m1 0h2m-9 1h2m2 0h5m-9 1h2m1 0h6m-9 1h3m1 0h5m-9 1h9" /></svg>;
const Ccapi104_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M0 9h6m-6 1h1m-1 1h1m-1 1h1m2 0h1m-4 1h1m-1 1h1" /><path stroke="#000" d="M6 9h1m-1 1h1m-4 1h2m1 0h1m-5 1h1m1 0h1m1 0h1m-5 1h1m3 0h1m-1 1h1m-7 1h7" /><path stroke="#fff" d="M1 10h5m-5 1h2m2 0h1m-5 1h1m3 0h1m-5 1h1m1 0h3m-5 1h5" /></svg>;

export const ccapi104Data = {
  '32x32_4': Ccapi104_32x32_4,
  '16x16_4': Ccapi104_16x16_4
};

export interface Ccapi104Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Ccapi104: React.FC<Ccapi104Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = ccapi104Data[variant];

  return <Svg {...rest} />;
};
