import React from 'react';
import type { SVGProps } from "react";

const Oiui400Textstamp_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="#000" d="M22 0h1m-8 1h2m4 0h1m-8 1h1m2 0h1m2 0h1m-6 1h1m2 0h2m2 0h1m-7 1h1m2 0h1m1 0h1m-5 1h1m2 0h1m-3 1h1m2 0h1m-3 1h1m2 0h1m-3 1h1m1 0h1m-2 1h1" /><path stroke="maroon" d="M22 1h1m-2 1h2m-3 1h2m-2 1h1" /><path stroke="gray" d="M15 2h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h1" /><path stroke="navy" d="M14 4h1m-2 1h3m-3 1h1m1 0h1m-4 1h2m1 0h2m-5 1h1m3 0h1m-6 1h7m-7 1h1m5 0h1m-7 1h1m5 0h1m-8 1h3m3 0h3" /></svg>;

export const oiui400TextstampData = {
  '32x32_4': Oiui400Textstamp_32x32_4
};

export interface Oiui400TextstampProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Oiui400Textstamp: React.FC<Oiui400TextstampProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = oiui400TextstampData[variant];

  return <Svg {...rest} />;
};
