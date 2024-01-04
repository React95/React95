import React from 'react';
import type { SVGProps } from "react";

const Mailnews18_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props} />;
const Mailnews18_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M6 4h3M6 5h1m1 0h1M3 6h4m1 0h4M3 7h1m7 0h1M4 8h1m5 0h1M5 9h1m3 0h1m-4 1h1m1 0h1m-2 1h1" /><path stroke="purple" d="M7 5h1M7 6h1M4 7h7M5 8h5M6 9h3m-2 1h1" /></svg>;

export const mailnews18Data = {
  '32x32_4': Mailnews18_32x32_4,
  '16x16_4': Mailnews18_16x16_4
};

export interface Mailnews18Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mailnews18: React.FC<Mailnews18Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mailnews18Data[variant];

  return <Svg {...rest} />;
};
