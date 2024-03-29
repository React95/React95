import React from 'react';
import type { SVGProps } from "react";

const Oiui400Imgstamp_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M22 0h1m-8 1h2m4 0h1m-8 1h1m2 0h1m2 0h1m-7 1h2m2 0h2m2 0h1m-9 1h1m1 0h1m2 0h1m1 0h1m-9 1h1m3 0h1m2 0h1m-6 1h1m2 0h1m2 0h1M9 7h4m3 0h4m2 0h1M9 8h1m9 0h2m1 0h1M10 9h1m7 0h1m2 0h1m-11 1h1m2 0h1m2 0h1m-7 1h1m1 0h1m1 0h1m1 0h1m-7 1h2m3 0h2m-7 1h1m5 0h1" /><path stroke="maroon" d="M22 1h1m-2 1h2m-3 1h2m-2 1h1" /><path stroke="gray" d="M15 2h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h1" /><path stroke="#ff0" d="M14 5h1m-1 1h1m-2 1h3m-6 1h9m-8 1h7m-6 1h2m1 0h2m-5 1h1m3 0h1" /><path stroke="olive" d="M15 5h1m-3 1h1" /></svg>;

export const oiui400ImgstampData = {
  '32x32_4': Oiui400Imgstamp_32x32_4
};

export interface Oiui400ImgstampProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Oiui400Imgstamp: React.FC<Oiui400ImgstampProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = oiui400ImgstampData[variant];

  return <Svg {...rest} />;
};
