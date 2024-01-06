import React from 'react';
import type { SVGProps } from "react";

const Progman38_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M15 0h3m-4 1h5m-6 1h3m1 0h3m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h2m1 0h4m-7 1h7m-7 1h7m-7 1h7m-7 1h7m-6 1h5m-4 1h3m-3 2h3m-4 1h5m-6 1h2m2 0h3m-7 1h2m1 0h4m-7 1h7m-6 1h5m-4 1h3" /><path stroke="#fff" d="M16 2h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 10h2m-2 1h1" /></svg>;
const Progman38_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M15 0h3m-4 1h1m3 0h1m-6 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-6 1h1m3 0h1m-4 1h3m-3 2h3m-4 1h1m3 0h1m-6 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-6 1h1m3 0h1m-4 1h3" /><path stroke="#f0f" d="M15 1h2m-3 1h2m1 0h1m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h1m1 0h2m-4 1h4m-4 1h4m-4 1h4m-3 1h3m-3 5h2m-3 1h1m2 0h1m-4 1h1m1 0h2m-3 1h3" /><path stroke="purple" d="M17 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-5 1h1m3 0h1m-4 1h3m-1 4h1m0 1h1m-1 1h1m-5 1h1m3 0h1m-4 1h3" /><path stroke="silver" d="M16 2h1m-2 1h1m-1 14h1m0 10h1m-2 1h1" /><path stroke="#fff" d="M15 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 11h1" /></svg>;

export const progman38Data = {
  '32x32_1': Progman38_32x32_1,
  '32x32_4': Progman38_32x32_4
};

export interface Progman38Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Progman38: React.FC<Progman38Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const Svg = progman38Data[variant];

  return <Svg {...rest} />;
};
