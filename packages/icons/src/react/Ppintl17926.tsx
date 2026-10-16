import React from 'react';
import type { SVGProps } from "react";

const Ppintl17926_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M0 6h31M0 7h1m14 0h1m14 0h1M0 8h1m13 0h3m13 0h1M13 9h5m-3 1h1m-1 1h1M6 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 14h1m1 0h14m2 0h1M6 16h1m1 0h15m1 0h1M6 18h1m1 0h11m5 0h1M6 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m-1 1h1m-3 1h5M0 24h1m13 0h3m13 0h1M0 25h1m14 0h1m14 0h1M0 26h31" /><path stroke="#fff" d="M1 7h14m1 0h14M1 8h13m3 0h13M0 9h13m5 0h13M0 10h15m1 0h15M0 11h15m1 0h15M0 12h6m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h6M0 13h31M0 14h6m1 0h1m14 0h2m1 0h6M0 15h31M0 16h6m1 0h1m15 0h1m1 0h6M0 17h31M0 18h6m1 0h1m11 0h5m1 0h6M0 19h31M0 20h6m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h6M0 21h15m1 0h15M0 22h15m1 0h15M0 23h13m5 0h13M1 24h13m3 0h13M1 25h14m1 0h14" /></svg>;

export const ppintl17926Data = {
  '32x32_4': Ppintl17926_32x32_4
};

export interface Ppintl17926Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Ppintl17926Component = ({
  variant = '32x32_4',
  ...rest
}: Ppintl17926Props) => {
  const Svg = ppintl17926Data[variant];

  return <Svg {...rest} />;
};

export const Ppintl17926 = React.memo(Ppintl17926Component);
Ppintl17926.displayName = 'Ppintl17926';
