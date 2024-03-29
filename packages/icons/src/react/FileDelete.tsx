import React from 'react';
import type { SVGProps } from "react";

const FileDelete_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="red" d="M9 1h1M9 2h2M7 3h5M6 4h1m2 0h2M5 5h1m3 0h1M5 6h1M5 7h1m9 0h2m9 0h2M15 8h4m6 0h2M16 9h4m4 0h2m-8 1h3m2 0h1m-5 1h5m-4 1h3m-4 1h5m-5 1h2m2 0h2m-6 1h1m4 0h2m-1 1h1m0 1h1m0 2h1m-4 5h1m-2 1h3m-4 1h5m-3 1h1m-1 1h1m-2 1h1m-4 1h3" /><path stroke="gray" d="M13 1h13M13 2h1m11 0h2M13 3h1m11 0h1m1 0h1M13 4h1m11 0h1m2 0h1M13 5h1m-1 1h1m12 0h3m1 0h1M13 7h1m16 0h1M13 8h1m16 0h1M1 9h13m16 0h1M1 10h1m11 0h2m15 0h1M1 11h1m11 0h1m1 0h1m14 0h1M1 12h1m11 0h1m2 0h1m13 0h1M1 13h1m28 0h1M1 14h1m12 0h3m1 0h1m11 0h1M1 15h1m16 0h1m11 0h1M1 16h1m16 0h1m11 0h1M1 17h1m16 0h1m11 0h1M1 18h1m16 0h1m11 0h1M1 19h1m16 0h1m11 0h1M1 20h1m16 0h1m11 0h1M1 21h1m16 0h1m11 0h1M1 22h1m16 0h13M1 23h1m16 0h1M1 24h1m16 0h1M1 25h1m16 0h1M1 26h1m16 0h1M1 27h1m16 0h1M1 28h1m16 0h1m-1 1h1M2 30h17" /><path stroke="#fff" d="M14 2h11M14 3h11M14 4h11m1 0h1M14 5h11M14 6h2m8 0h2M14 7h1m2 0h9m2 0h1M14 8h1m12 0h2M14 9h2m4 0h4m2 0h3M2 10h11m2 0h1m11 0h2M2 11h11m3 0h3m5 0h5M2 12h11m1 0h1m12 0h2M2 13h11m5 0h1m5 0h5M2 14h2m8 0h2m13 0h2M2 15h15m3 0h4m2 0h3M2 16h2m11 0h2m10 0h2M2 17h15m2 0h7m1 0h2M2 18h2m11 0h2m10 0h2M2 19h15m2 0h8m1 0h1M2 20h2m11 0h2m2 0h10M2 21h15M2 22h2m11 0h2M2 23h15M2 24h2m11 0h2M2 25h15M2 26h2m11 0h2M2 27h15M2 28h15" /><path stroke="silver" d="M26 3h1m0 1h1m-14 7h1m0 1h1" /><path stroke="#000" d="M25 5h5m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-17 1h5m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m1 0h11m-13 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 29h17" /><path stroke="#00f" d="M16 6h8m-5 2h6m-9 2h2m3 0h2m1 0h3m-10 2h3m3 0h4M4 14h8m9 0h2m2 0h2M4 16h11m4 0h6m1 0h1M4 18h11m4 0h8M4 20h11M4 22h11M4 24h11M4 26h11" /></svg>;

export const fileDeleteData = {
  '32x32_4': FileDelete_32x32_4
};

export interface FileDeleteProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const FileDelete: React.FC<FileDeleteProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = fileDeleteData[variant];

  return <Svg {...rest} />;
};
