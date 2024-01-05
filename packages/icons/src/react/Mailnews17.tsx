import React from 'react';
import type { SVGProps } from "react";

const Mailnews17_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props} />;
const Mailnews17_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="#000" d="M7 4h1M6 5h1m1 0h1M5 6h1m3 0h1M4 7h1m5 0h1M3 8h1m7 0h1M3 9h4m1 0h4m-6 1h1m1 0h1m-3 1h3" /><path stroke="purple" d="M7 5h1M6 6h3M5 7h5M4 8h7M7 9h1m-1 1h1" /></svg>;

export const mailnews17Data = {
  '32x32_4': Mailnews17_32x32_4,
  '16x16_4': Mailnews17_16x16_4
};

export interface Mailnews17Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mailnews17: React.FC<Mailnews17Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mailnews17Data[variant];

  return <Svg {...rest} />;
};
