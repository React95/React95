import React from 'react';
import type { SVGProps } from "react";

const Progman40_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M11 9h8M7 10h4m8 0h1M4 11h3m2 0h1m10 0h1m3 0h7M1 12h3m4 0h1m3 0h2m7 0h10M0 13h1m6 0h1m3 0h1m2 0h1m9 0h7M0 14h1m3 0h7m3 0h2m8 0h7M1 15h3m4 0h1m3 0h2m2 0h1m7 0h7M9 16h3m3 0h2m7 0h7M9 17h1m3 0h2m2 0h1m6 0h7m-21 1h3m3 0h2m3 0h10m-21 1h1m3 0h2m3 0h2m3 0h7m-20 1h8m6 0h6" /><path stroke="#fff" d="M11 10h8M7 11h2m1 0h10M4 12h4m1 0h3m2 0h7M1 13h6m1 0h3m1 0h2m1 0h9M1 14h3m7 0h3m2 0h8M9 15h3m2 0h2m1 0h7m-12 1h3m2 0h7m-14 1h3m2 0h2m1 0h6m-11 1h3m2 0h3m-10 1h3m2 0h3" /></svg>;
const Progman40_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M11 9h8M7 10h4m8 0h1M4 11h3m2 0h1m10 0h1m3 0h7M1 12h3m4 0h1m3 0h2m7 0h4M0 13h1m6 0h1m3 0h1m2 0h1m9 0h1M0 14h1m3 0h7m3 0h2m8 0h1M1 15h3m4 0h1m3 0h2m2 0h1m7 0h1M9 16h3m3 0h2m7 0h1M9 17h1m3 0h2m2 0h1m6 0h1m-15 1h3m3 0h2m3 0h4m-15 1h1m3 0h2m3 0h2m3 0h1m-14 1h8m6 0h6" /><path stroke="#fff" d="M11 10h7m-8 1h9M4 12h2m3 0h1m5 0h5M1 13h3m12 0h7m-12 1h1m5 0h5M9 15h2m7 0h3m-9 1h2m-4 1h2m2 1h1m-4 1h2" /><path stroke="silver" d="M18 10h1M7 11h2m10 0h1M6 12h2m2 0h2m2 0h1m5 0h1M4 13h2m2 0h3m1 0h2m1 0h1m7 0h1M1 14h3m8 0h2m2 0h1m5 0h2m-13 1h1m2 0h2m1 0h1m3 0h2m-9 1h1m2 0h5m-10 1h1m2 0h2m2 0h2m-8 1h1m1 0h1m-3 1h1" /><path stroke="#00f" d="M25 12h6m-6 1h6m-6 1h6m-6 1h6m-6 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m1 0h1" /><path stroke="gray" d="M6 13h1m16 2h1m-2 1h2m-6 1h1m2 0h3m-6 1h3m-5 1h3" /><path stroke="navy" d="M26 16h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m-5 1h6m-6 1h6" /></svg>;

export const progman40Data = {
  '32x32_1': Progman40_32x32_1,
  '32x32_4': Progman40_32x32_4
};

export interface Progman40Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Progman40: React.FC<Progman40Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const Svg = progman40Data[variant];

  return <Svg {...rest} />;
};
