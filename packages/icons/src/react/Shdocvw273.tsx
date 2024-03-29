import React from 'react';
import type { SVGProps } from "react";

const Shdocvw273_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props} />;
const Shdocvw273_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M5 1h4M3 2h2m4 0h2M2 3h1M1 4h1M1 5h1M0 6h1m6 0h2M0 7h1m5 0h1M0 8h1m4 0h1M0 9h1m4 0h1m-6 1h1m4 0h1m0 1h1m4 0h1m-5 1h1" /><path stroke="silver" d="M5 2h1M4 3h1M3 4h1M2 5h1M1 6h1m1 0h1M3 8h1m6 0h1M2 9h1m1 0h1m4 0h1m-2 1h1m1 0h1m-4 1h1m1 0h1m0 1h1" /><path stroke="#00f" d="M6 2h1M6 3h1M6 5h2M5 6h2m5 0h1M4 7h1m6 0h1M2 10h2m-3 1h1m1 0h3m-4 1h5m-4 1h2m3 0h1" /><path stroke="teal" d="M7 2h2M4 4h1m4 1h1m2 2h1M1 8h1M1 9h1" /><path stroke="#fff" d="M3 3h1m1 0h1M2 4h1m0 1h1M2 6h1m1 0h1M1 7h3m3 0h1m1 0h1M2 8h1m1 0h1m1 0h3M3 9h1m3 0h2m-5 1h1m1 0h1" /><path stroke="green" d="M7 3h4M5 4h7M4 5h2m2 0h1m1 0h2m-2 1h2M5 7h1m-5 3h1m0 1h1" /><path stroke="navy" d="M11 3h1m0 5h1m-1 1h1m-1 1h1M1 12h1m0 1h1m2 0h3m1 0h2m-8 1h6" /><path stroke="#000" d="M12 4h1m-1 1h1M9 6h1m3 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h1m1 0h1m-5 1h2m-1 2h2m-6 1h4m4 0h2" /><path stroke="#0ff" d="M8 7h1m0 1h1M6 9h1m3 0h1m-4 1h1m1 0h1m-2 1h1" /><path stroke="#f0f" d="M11 12h1m0 1h1m0 1h1" /><path stroke="red" d="M12 12h1m0 1h1m0 1h1" /><path stroke="maroon" d="M13 12h1m-3 1h1m2 0h1m-3 1h1m2 0h1" /></svg>;

export const shdocvw273Data = {
  '32x32_4': Shdocvw273_32x32_4,
  '16x16_4': Shdocvw273_16x16_4
};

export interface Shdocvw273Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shdocvw273: React.FC<Shdocvw273Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = shdocvw273Data[variant];

  return <Svg {...rest} />;
};
