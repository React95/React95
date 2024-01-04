import React from 'react';
import type { SVGProps } from "react";

const Logo_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M9 0h4M7 1h8M0 2h1m5 0h3m1 0h2m1 0h3M0 3h1m1 0h1m1 0h4m2 0h2m2 0h2M2 4h6m2 0h2m2 0h2M6 5h2m1 0h4m1 0h2M6 6h10M6 7h3m1 0h2m1 0h3M6 8h2m2 0h2m2 0h2m-5 1h1m2 0h2m-5 1h2m1 0h2m-5 1h5m-5 1h1m1 0h3m-5 1h1m3 0h1m-5 1h1M0 15h12" /><path stroke="red" d="M9 2h1M8 3h2M8 4h2M0 5h1m7 0h1M0 6h1m1 0h1m1 0h2M2 7h4" /><path stroke="#0f0" d="M12 2h1m-1 1h2m-2 1h2m-1 1h1" /><path stroke="#00f" d="M9 7h1M0 8h1m7 0h2" /><path stroke="#ff0" d="M12 7h1m-1 1h2m-2 1h2m-1 1h1" /><path stroke="gray" d="M0 9h11M0 10h1m9 0h1M0 11h1m9 0h1M0 12h1m9 0h1M0 13h1m9 0h1M0 14h11" /><path stroke="#fff" d="M1 10h9m-9 1h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M2 11h8m-8 1h8m-8 1h8" /></svg>;
const Logo_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="#000" d="M1 3h1M1 4h1m16 0h10M3 5h1m12 0h14M3 6h1m2 0h1m6 0h1m1 0h16M5 7h2m2 0h1m1 0h3m1 0h3m4 0h2m4 0h3M5 8h1m2 0h2m1 0h3m1 0h2m5 0h2m5 0h2M8 9h1m2 0h1m3 0h2m5 0h2m5 0h2m-16 1h2m5 0h2m5 0h2M1 11h1m13 0h2m5 0h2m5 0h2M1 12h1m13 0h2m5 0h2m5 0h2M3 13h1m11 0h2m3 0h6m3 0h2M3 14h1m2 0h1m6 0h1m1 0h16M5 15h2m2 0h1m1 0h3m1 0h3m4 0h2m4 0h3M5 16h1m2 0h2m1 0h3m1 0h2m5 0h2m5 0h2M8 17h1m2 0h1m3 0h2m5 0h2m5 0h2m-16 1h2m5 0h2m5 0h2M1 19h1m13 0h2m5 0h2m5 0h2M1 20h1m13 0h2m5 0h2m5 0h2M3 21h1m11 0h2m3 0h6m3 0h2M3 22h1m2 0h1m6 0h1m1 0h16M5 23h2m2 0h1m1 0h3m1 0h16M5 24h1m2 0h2m1 0h3m1 0h4m8 0h4M8 25h1m2 0h1m3 0h2m12 0h2" /><path stroke="red" d="M1 7h1m18 0h2M1 8h1m15 0h5M3 9h1m13 0h5M3 10h1m2 0h1m6 0h1m3 0h5M5 11h2m2 0h1m1 0h3m3 0h5M5 12h1m2 0h2m1 0h3m3 0h5M8 13h1m2 0h1m5 0h1" /><path stroke="maroon" d="M18 7h2m-2 6h2" /><path stroke="#0f0" d="M24 7h2m-2 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-1 1h1" /><path stroke="green" d="M26 7h2m-2 6h2" /><path stroke="#00f" d="M1 15h1m18 0h2M1 16h1m15 0h5M3 17h1m13 0h5M3 18h1m2 0h1m6 0h1m3 0h5M5 19h2m2 0h1m1 0h3m3 0h5M5 20h1m2 0h2m1 0h3m3 0h5M8 21h1m2 0h1m5 0h1" /><path stroke="navy" d="M18 15h2m-2 6h2" /><path stroke="#ff0" d="M24 15h2m-2 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-1 1h1" /><path stroke="olive" d="M26 15h2m-2 6h2" /></svg>;

export const logoData = {
  '16x16_4': Logo_16x16_4,
  '32x32_4': Logo_32x32_4
};

export interface LogoProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4' | '32x32_4';
}

export const Logo: React.FC<LogoProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = logoData[variant];

  return <Svg {...rest} />;
};
