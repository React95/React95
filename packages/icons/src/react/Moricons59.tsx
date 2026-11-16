import React from 'react';
import type { SVGProps } from "react";

const Moricons59_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#00f" d="M0 0h32M0 1h2m1 0h1m1 0h3m1 0h1m1 0h3m1 0h1m1 0h3m1 0h1m1 0h3m1 0h1m1 0h3M0 2h3m1 0h1m1 0h3m1 0h1m1 0h3m1 0h1m1 0h3m1 0h1m1 0h3m1 0h1m1 0h2M0 3h32M0 4h32M0 5h2m28 0h2M0 6h2m28 0h2M0 7h2m5 0h18m5 0h2M0 8h2m5 0h18m5 0h2M0 9h2m5 0h2m1 0h1m1 0h1m1 0h5m1 0h1m1 0h1m1 0h1m5 0h2M0 10h2m5 0h3m1 0h1m1 0h1m1 0h5m1 0h1m1 0h2m5 0h2M0 11h2m5 0h18m5 0h2M0 12h2m5 0h2m1 0h1m1 0h1m1 0h1m1 0h4m1 0h1m1 0h2m5 0h2M0 13h2m5 0h3m1 0h1m1 0h1m1 0h1m1 0h4m1 0h1m1 0h1m5 0h2M0 14h2m5 0h18m5 0h2M0 15h2m5 0h18m5 0h2M0 16h2m5 0h18m5 0h2M0 17h2m28 0h2M0 18h2m28 0h2M0 19h2m2 0h24m2 0h2M0 20h2m2 0h24m2 0h2M0 21h2m2 0h2m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h4m1 0h1m1 0h1m1 0h2m2 0h2M0 22h2m2 0h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h4m1 0h1m1 0h1m1 0h3m2 0h2M0 23h2m2 0h24m2 0h2M0 24h2m2 0h2m1 0h1m1 0h1m1 0h1m1 0h1m1 0h6m1 0h1m1 0h1m1 0h2m2 0h2M0 25h2m2 0h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h4m1 0h1m1 0h1m1 0h3m2 0h2M0 26h2m2 0h24m2 0h2M0 27h2m2 0h24m2 0h2M0 28h2m28 0h2M0 29h2m28 0h2M0 30h32M0 31h32" /><path stroke="#fff" d="M2 1h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1M3 2h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1M9 9h1m1 0h1m1 0h1m-4 1h1m1 0h1m1 0h1m-6 2h1m1 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m1 0h1M6 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M7 22h1m1 0h1m1 0h1m1 0h1m1 0h1M6 24h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#0ff" d="M2 5h28M2 6h28M2 7h5m18 0h5M2 8h5m18 0h5M2 9h5m18 0h5M2 10h5m18 0h5M2 11h5m18 0h5M2 12h5m18 0h5M2 13h5m18 0h5M2 14h5m18 0h5M2 15h5m18 0h5M2 16h5m18 0h5M2 17h28M2 18h28M2 19h2m24 0h2M2 20h2m24 0h2M2 21h2m24 0h2M2 22h2m24 0h2M2 23h2m24 0h2M2 24h2m24 0h2M2 25h2m24 0h2M2 26h2m24 0h2M2 27h2m24 0h2M2 28h28M2 29h28" /><path stroke="#ff0" d="M19 9h1m1 0h1m1 0h1m-4 1h1m1 0h1m-3 2h1m1 0h1m-2 1h1m1 0h1m-3 8h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m-4 2h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1" /></svg>;

export const moricons59Data = {
  '32x32_4': Moricons59_32x32_4
};

export interface Moricons59Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons59Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons59Props) => {
  const Svg = moricons59Data[variant];

  return <Svg {...rest} />;
};

export const Moricons59 = React.memo(Moricons59Component);
Moricons59.displayName = 'Moricons59';
