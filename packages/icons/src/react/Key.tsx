import React from 'react';
import type { SVGProps } from "react";

const Key_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="#000" d="M10 2h7M9 3h1m7 0h1M8 4h1m3 0h3m3 0h1M7 5h1m3 0h1m3 0h1m3 0h1M6 6h1m4 0h1m3 0h1m4 0h1M6 7h1m4 0h1m3 0h1m4 0h1M6 8h1m5 0h3m5 0h1M6 9h1m13 0h1M6 10h1m13 0h1M7 11h1m11 0h1M8 12h1m9 0h1M9 13h1m7 0h1m-8 1h1m5 0h1m-6 1h1m4 0h1m-6 1h1m4 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-6 1h1m4 0h1m-5 1h1m3 0h1m-6 1h1m4 0h1m-7 1h1m5 0h1m-6 1h1m4 0h1m-5 1h1m3 0h1m-6 1h1m4 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-6 1h1m4 0h1m-5 1h1m2 0h1m-3 1h2" /><path stroke="#fff" d="M10 3h5M9 4h2M8 5h2M7 6h2m1 0h1m3 0h1m1 0h1M7 7h1m1 0h1m3 0h2m2 0h1M7 8h2m1 0h1m5 0h1M7 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M7 10h2m1 0h1m1 0h1m1 0h1m1 0h1m-9 1h2m1 0h1m1 0h1m1 0h1m-7 1h2m1 0h1m1 0h1m-5 1h2m1 0h1m-3 1h2m1 0h1m-2 1h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-3 1h2m1 0h1m-2 1h1m0 1h1m-2 1h1m-3 1h2m1 0h1m-2 1h1m0 1h1m-2 1h1m-3 1h2m1 0h1m-4 1h1m1 0h1m-2 1h1" /><path stroke="silver" d="M15 3h1m-5 1h1m3 0h2m-7 1h1m5 0h2M9 6h1m3 0h1m3 0h2M8 7h1m1 0h1m5 0h1m1 0h1M9 8h1m1 0h1m3 0h1m1 0h2M8 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M9 10h1m1 0h1m1 0h1m1 0h1m1 0h2m-9 1h1m1 0h1m1 0h1m1 0h2m-7 1h1m1 0h1m1 0h2m-5 1h1m1 0h2m-3 1h1m-2 1h1m1 0h1m-2 1h1m-2 1h1m1 0h1m-2 1h1m-2 1h1m1 0h1m-2 1h1m-2 1h1m1 0h1m-2 1h1m-2 1h1m1 0h1m-2 1h1m-2 1h1m1 0h1m-2 1h1m-2 1h1m1 0h1m-2 1h1" /><path stroke="gray" d="M16 3h1m0 1h1m-6 1h3m3 0h1m-7 1h1m6 0h1m-8 1h1m6 0h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h2m-3 1h2" /></svg>;

export const keyData = {
  '32x32_4': Key_32x32_4
};

export interface KeyProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Key: React.FC<KeyProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = keyData[variant];

  return <Svg {...rest} />;
};
