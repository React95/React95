import React from 'react';
import type { SVGProps } from "react";

const ReaderNoshared_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M4 3h26M3 4h1m25 0h1M2 5h1m25 0h2M1 6h1m25 0h3M1 7h1m25 0h3M1 8h1m25 0h3M1 9h1m25 0h3M1 10h1m2 0h21m2 0h3M1 11h1m25 0h3M1 12h1m2 0h21m2 0h3M1 13h1m25 0h3M1 14h1m25 0h2M1 15h27m-13 2h1m-2 1h1m-1 1h1M0 20h1m1 0h8m4 0h3m4 0h9m1 0h1" /><path stroke="silver" d="M4 4h25M3 5h25M3 7h19m3 0h2M3 8h19m3 0h2M3 9h24M3 10h1m21 0h2M3 11h1m21 0h2M3 12h1m21 0h2M3 13h1m21 0h2M3 14h24" /><path stroke="#000" d="M30 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M2 16h26m-14 1h1m1 0h1m-1 1h1m-1 1h1M0 22h1m1 0h10m7 0h11m1 0h1m-20 1h1m5 0h1" /><path stroke="#fff" d="M2 6h25M2 7h1M2 8h1M2 9h1m-1 1h1m-1 1h1m1 0h21M2 12h1m-1 1h1m1 0h21M2 14h1m12 4h1m-1 1h1M0 21h1m1 0h9m9 0h10m1 0h1" /><path stroke="#0f0" d="M22 7h3" /><path stroke="green" d="M22 8h3" /><path stroke="red" d="M9 19h4m5 0h4m-12 1h4m3 0h4m-10 1h4m1 0h4m-8 1h7m-6 1h5m-5 1h5m-6 1h7m-8 1h4m1 0h4m-10 1h4m3 0h4M9 28h4m5 0h4" /><path stroke="#ff0" d="M15 21h1" /></svg>;
const ReaderNoshared_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M2 0h13M1 1h1m12 0h1M0 2h1m12 0h2M0 3h1m12 0h2M0 4h1m12 0h2M0 5h1m1 0h10m1 0h2M0 6h1m12 0h1m-6 4h1" /><path stroke="silver" d="M2 1h12M1 3h10M1 4h12M1 5h1m10 0h1M1 6h1m10 0h1M7 9h1m-8 1h5m2 0h1m3 0h5" /><path stroke="#000" d="M15 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1M1 7h13M7 8h2M8 9h1m-9 2h6m4 0h6" /><path stroke="#fff" d="M1 2h12M2 6h10" /><path stroke="green" d="M11 3h1" /><path stroke="#0f0" d="M12 3h1" /><path stroke="red" d="M5 10h2m2 0h2m-5 1h4m-3 1h2m-3 1h4m-5 1h2m2 0h2" /></svg>;

export const readerNosharedData = {
  '32x32_4': ReaderNoshared_32x32_4,
  '16x16_4': ReaderNoshared_16x16_4
};

export interface ReaderNosharedProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const ReaderNoshared: React.FC<ReaderNosharedProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = readerNosharedData[variant];

  return <Svg {...rest} />;
};
