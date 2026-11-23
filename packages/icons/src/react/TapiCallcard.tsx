import React from 'react';
import type { SVGProps } from "react";

const TapiCallcard_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="red" d="M0 1h32M4 2h28M0 4h32M8 5h3m6 0h15M0 7h8m13 0h11m-9 1h9M0 10h7m19 0h6m-5 1h5M0 13h8m21 0h3m-3 1h3m-3 2h3M0 17h4m25 0h3m-4 2h4M0 20h4m23 0h5m-10 2h10M0 23h9m11 0h12M8 25h5m3 0h16M0 26h32M4 28h28M0 29h32" /><path stroke="gray" d="M11 5h5M9 6h2M8 7h1M7 8h1m4 0h2M7 9h1m4 0h1m-6 1h1m10 0h2m-10 1h1m7 0h1m1 0h1M9 12h1m8 0h1m1 0h1M8 13h1m11 0h1M7 14h1m-2 1h1m13 0h1M5 16h1m-2 1h1m-1 1h1m-1 1h1m9 2h1" /><path stroke="#000" d="M16 5h1m0 1h2m0 1h2m-7 1h1m6 0h2M8 9h1m6 0h1m7 0h1M9 10h4m2 0h1m4 0h1m3 0h2M7 11h1m8 0h2m3 0h1m4 0h1M8 12h1m12 0h1m5 0h1m-15 1h1m7 0h1m6 0h1m-14 1h1m5 0h1m6 0h1m-18 1h1m5 0h1m3 0h1m6 0h1m-16 1h1m7 0h3m3 0h2M9 17h1m5 0h1m5 0h1m2 0h3m1 0h1m-18 1h1m10 0h1m5 0h1m-16 1h1m8 0h1m4 0h1M4 20h1m18 0h4M5 21h2m15 0h2M7 22h2m11 0h2M9 23h2m7 0h2m-9 1h2m3 0h2m-5 1h3" /><path stroke="#fff" d="M11 6h1m0 1h3m0 1h3m0 1h3m0 1h1m0 1h1m-13 1h1m1 0h1m10 0h1M9 13h1m4 0h1m9 0h1M8 14h1m1 0h1m5 0h1M7 15h1m4 0h1m-7 1h1m1 0h1m5 0h1M5 17h2m3 0h1m-6 1h1m1 0h2m3 0h1m-8 1h1m3 0h2m-6 1h1m5 0h2m0 1h1" /><path stroke="#ff0" d="M12 6h5M9 7h3m3 0h4M8 8h3m7 0h3m-8 1h1m2 0h2m3 0h2M8 10h1m4 0h1m3 0h1m4 0h2M8 11h1m2 0h5m3 0h1m3 0h3m-15 1h1m2 0h4m1 0h1m4 0h3m-17 1h2m4 0h4m3 0h1m1 0h2M9 14h1m2 0h2m4 0h3m2 0h2M8 15h2m4 0h2m2 0h2m3 0h2M7 16h1m2 0h2m4 0h3m5 0h1M7 17h1m4 0h2m2 0h2m5 0h1M6 18h1m2 0h1m4 0h3m6 0h2M6 19h3m2 0h1m2 0h2m8 0h1M6 20h5m2 0h2m-8 1h6m-4 1h5m-3 1h3m-1 1h1" /><path stroke="olive" d="M11 8h1m-2 1h2m4 1h1m-8 1h1m3 1h1m8 0h1m-11 1h1m2 0h1m6 0h1m-12 1h1m2 0h1m2 0h1m4 0h1m4 0h1m-18 1h1m2 0h1m2 0h1m5 0h1m3 0h2M9 16h1m2 0h1m2 0h1m4 0h1m5 0h1M8 17h1m2 0h1m2 0h1m4 0h2m1 0h1m4 0h1m-18 1h1m2 0h1m4 0h4m4 0h2m-16 1h1m4 0h5m1 0h1m1 0h2m-11 1h7m-8 1h7m-8 1h6m-6 1h4m-4 1h2" /><path stroke="silver" d="M9 9h1m4 0h1m-1 1h1m12 3h1m-3 1h2m-2 1h1m-7 1h1m5 0h1m-8 1h1m-2 1h1m7 0h1m-10 1h1m-2 1h1" /></svg>;

export const tapiCallcardData = {
  '32x32_4': TapiCallcard_32x32_4
};

export interface TapiCallcardProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const TapiCallcardComponent = ({
  variant = '32x32_4',
  ...rest
}: TapiCallcardProps) => {
  const Svg = tapiCallcardData[variant];

  return <Svg {...rest} />;
};

export const TapiCallcard = React.memo(TapiCallcardComponent);
TapiCallcard.displayName = 'TapiCallcard';
