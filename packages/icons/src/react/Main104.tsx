import React from 'react';
import type { SVGProps } from "react";

const Main104_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M2 3h1M2 4h2m13 0h2m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M2 5h1m1 0h1M2 6h1m2 0h1M2 7h1m3 0h1M2 8h1m4 0h1m12 0h2m1 0h1m1 0h1m3 0h1M2 9h1m5 0h1m-7 1h1m6 0h1m-8 1h1m7 0h1m-9 1h1m8 0h1m11 0h2m1 0h1m2 0h1M2 13h1m9 0h1M2 14h1m10 0h1M2 15h1m11 0h1M2 16h1m12 0h1m9 0h1m1 0h1m1 0h1M2 17h1m-1 1h1m-1 1h1m3 0h2m-6 1h1m2 0h1m1 0h1m11 0h3m1 0h1m1 0h1m1 0h1m1 0h1M2 21h1m1 0h1m3 0h1m-7 1h2m4 0h1m-7 1h1m6 0h1m-1 1h1m11 0h1m2 0h1m1 0h1m2 0h1m-20 1h1m-1 1h1m0 1h1m-1 1h1m11 0h2m2 0h1m1 0h1" /><path stroke="#000" d="M7 4h7m1 0h2m-7 4h8m1 0h1m-6 4h7m1 0h1m-5 4h6m-14 1h7m-7 1h1m0 1h1m-1 1h1m2 0h3m1 0h1m-7 1h1m-1 1h1m0 1h1m-1 1h1m2 0h3m1 0h1m-7 1h1m-1 1h1m0 1h1m-1 1h1m2 0h3m1 0h1m-11 1h3" /><path stroke="silver" d="M3 5h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m-5 1h6m-6 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-3 1h3" /><path stroke="#fff" d="M3 6h1M3 7h2M3 8h3M3 9h4m-4 1h5m-5 1h6m-6 1h7m-7 1h8m-8 1h9m-9 1h10M3 16h6m-6 1h6m-6 1h6m-6 1h3m2 0h2m-7 1h2m3 0h2m-7 1h1m5 0h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2" /></svg>;

export const main104Data = {
  '32x32_4': Main104_32x32_4
};

export interface Main104Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Main104: React.FC<Main104Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = main104Data[variant];

  return <Svg {...rest} />;
};
