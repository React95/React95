import React from 'react';
import type { SVGProps } from "react";

const Progman41_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="#000" d="M13 9h8m-9 1h1m8 0h4M1 11h7m3 0h1m10 0h1m2 0h3M1 12h10m7 0h2m3 0h1m4 0h3M1 13h7m9 0h1m2 0h1m3 0h1m6 0h1M1 14h7m8 0h2m3 0h7m3 0h1M1 15h7m7 0h1m2 0h2m3 0h1m4 0h3M1 16h7m7 0h2m3 0h3M1 17h7m6 0h1m2 0h2m3 0h1M1 18h10m3 0h2m3 0h3M1 19h7m3 0h2m3 0h2m3 0h1M1 20h6m6 0h8" /><path stroke="#fff" d="M13 10h8m-9 1h10m1 0h2m-14 1h7m2 0h3m1 0h4M8 13h9m1 0h2m1 0h3m1 0h6M8 14h8m2 0h3m7 0h3M8 15h7m1 0h2m2 0h3M8 16h7m2 0h3M8 17h6m1 0h2m2 0h3m-11 1h3m2 0h3m-6 1h3m2 0h3" /></svg>;
const Progman41_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="#000" d="M13 9h8m-9 1h1m8 0h4M1 11h7m3 0h1m10 0h1m2 0h3M7 12h4m7 0h2m3 0h1m4 0h3M7 13h1m9 0h1m2 0h1m3 0h1m6 0h1M7 14h1m8 0h2m3 0h7m3 0h1M7 15h1m7 0h1m2 0h2m3 0h1m4 0h3M7 16h1m7 0h2m3 0h3M7 17h1m6 0h1m2 0h2m3 0h1M7 18h4m3 0h2m3 0h3M7 19h1m3 0h2m3 0h2m3 0h1M1 20h6m6 0h8" /><path stroke="#fff" d="M13 10h7m-8 1h9m-10 1h6m9 0h2M9 13h7m2 0h2m8 0h2m-20 1h5m3 0h3m-10 1h3m2 0h2m-1 1h2m-4 1h2m-1 1h2" /><path stroke="silver" d="M20 10h1m0 1h1m2 0h1m-5 1h3m2 0h1m-10 1h1m4 0h3m2 0h2m2 0h1M9 14h1m18 0h3M9 15h2m3 0h1m5 0h2m-12 1h4m5 0h1m-9 1h3m5 0h2m-8 1h1m4 0h1m-1 1h2" /><path stroke="gray" d="M23 11h1m-7 1h1m6 0h1M8 13h1m16 0h1M8 14h1m6 0h1m-8 1h1m13 0h1M8 16h2m4 0h1m-7 1h3m10 0h1m-11 1h2m0 1h3m4 0h1" /><path stroke="#00f" d="M1 12h6m-6 1h6m-6 1h6m-6 1h6m-5 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1" /><path stroke="navy" d="M1 16h1m1 0h1m1 0h1m-4 1h1m1 0h1m1 0h1m-6 1h6m-6 1h6" /></svg>;

export const progman41Data = {
  '32x32_1': Progman41_32x32_1,
  '32x32_4': Progman41_32x32_4
};

export interface Progman41Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Progman41: React.FC<Progman41Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const Svg = progman41Data[variant];

  return <Svg {...rest} />;
};
