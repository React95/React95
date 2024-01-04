import React from 'react';
import type { SVGProps } from "react";

const ReaderDisket2_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M17 3h14M16 4h1m13 0h1M16 5h1m13 0h1M16 6h1m13 0h1M16 7h1m13 0h1M16 8h1m13 0h1M16 9h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m5 0h6m2 0h1M3 14h14m4 0h1m2 0h2m4 0h1M2 15h1m13 0h1m4 0h1m2 0h2m4 0h1M1 16h1m14 0h1m4 0h5m4 0h1M0 17h1m15 0h5m6 0h4M0 18h1m-1 1h1m25 0h3M0 20h1m25 0h3M0 21h1m8 0h8m9 0h3M0 22h1m2 0h6m8 0h6m3 0h3M0 23h1m25 0h3M0 24h1m25 0h3M0 25h1m25 0h2M0 26h27" /><path stroke="#fff" d="M17 4h1m1 0h10M17 5h1m1 0h10M17 6h1m1 0h10M17 7h1m1 0h10M17 8h1m1 0h10M17 9h1m1 0h10m-12 1h1m1 0h10m-12 1h1m2 0h8m-11 1h1m-1 1h1m-1 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1M1 17h15M1 18h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h6m8 0h6M1 24h1m7 0h8M1 25h1" /><path stroke="silver" d="M18 4h1m10 0h1M18 5h1m-1 1h1m10 0h1M18 7h1m10 0h1M18 8h1m10 0h1M18 9h1m10 0h1m-12 1h1m10 0h1m-12 1h2m8 0h2m-12 1h12m-12 1h4m6 0h2m-12 1h3m2 0h1m3 0h1m1 0h1M3 15h13m2 0h3m2 0h1m3 0h1m1 0h1M2 16h14m2 0h3m6 0h1m1 0h1M2 18h15M2 19h19m2 0h3M2 20h19m2 0h3M2 21h7m8 0h9M2 22h1m20 0h3M2 23h1m20 0h3M2 24h7m8 0h9M2 25h24" /><path stroke="#000" d="M31 4h1m-3 1h1m1 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-10 1h1m3 0h1m4 0h1m-10 1h1m3 0h1m4 0h1m-6 1h1m4 0h1m-11 1h6m4 0h1m-15 1h14m-2 1h1m-1 1h1m-1 1h1M9 22h8m12 0h1M9 23h8m12 0h1m-1 1h1m-2 1h1m-2 1h1M1 27h26" /><path stroke="red" d="M21 19h2m-2 1h2" /></svg>;
const ReaderDisket2_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M2 3h13M1 4h1m12 0h1M0 5h1m12 0h2M0 6h1m12 0h2M0 7h1m4 0h4m4 0h2M0 8h1m1 0h3m4 0h3m1 0h2M0 9h1m12 0h2M0 10h14" /><path stroke="silver" d="M2 4h12M1 6h10m1 0h1M1 7h4m4 0h4M1 8h1m10 0h1M1 9h4m4 0h4" /><path stroke="#000" d="M15 4h1m-1 1h1m-1 1h1m-1 1h1M5 8h4m6 0h1m-1 1h1m-2 1h1M1 11h13" /><path stroke="#fff" d="M1 5h12M5 9h4" /><path stroke="red" d="M11 6h1" /></svg>;

export const readerDisket2Data = {
  '32x32_4': ReaderDisket2_32x32_4,
  '16x16_4': ReaderDisket2_16x16_4
};

export interface ReaderDisket2Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const ReaderDisket2: React.FC<ReaderDisket2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = readerDisket2Data[variant];

  return <Svg {...rest} />;
};
