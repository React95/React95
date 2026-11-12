import React from 'react';
import type { SVGProps } from "react";

const Moricons46_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M3 4h26M2 5h1m25 0h2M1 6h1m27 0h1M1 7h1m27 0h1M1 8h1m27 0h1M1 9h1m27 0h1M1 10h1m27 0h1M1 11h1m27 0h1M1 12h1m27 0h1M1 13h1m27 0h1M1 14h1m27 0h1M1 15h1m27 0h1M1 16h1m27 0h1M1 17h1m27 0h1M1 18h1m27 0h1M1 19h1m27 0h1M1 20h1m27 0h1M1 21h1m27 0h1M1 22h1m27 0h1M1 23h1m27 0h1M1 24h1m27 0h1M2 25h1m25 0h2M3 26h26" /><path stroke="#fff" d="M3 5h25M2 6h2m23 0h2M2 7h1m25 0h1M2 8h1m25 0h1M2 9h1m25 0h1M2 10h1m25 0h1M2 11h1m25 0h1M2 12h1m1 0h3m3 0h2m2 0h3m2 0h2m2 0h3m2 0h1M2 13h1m1 0h1m2 0h1m1 0h1m2 0h1m2 0h1m2 0h1m2 0h1m1 0h1m2 0h1m1 0h1M2 14h1m1 0h1m2 0h1m1 0h1m5 0h1m2 0h1m4 0h1m2 0h1m1 0h1M2 15h1m1 0h3m2 0h1m5 0h1m2 0h1m4 0h3m2 0h1M2 16h1m1 0h1m4 0h1m5 0h1m2 0h1m4 0h1m4 0h1M2 17h1m1 0h1m4 0h1m5 0h1m2 0h1m4 0h1m4 0h1M2 18h1m1 0h1m4 0h1m2 0h1m2 0h1m2 0h1m2 0h1m1 0h1m4 0h1M2 19h1m1 0h1m5 0h2m3 0h1m3 0h2m2 0h1m4 0h1M2 20h1m25 0h1M2 21h1m25 0h1M2 22h1m25 0h1M2 23h1m25 0h1M2 24h2m23 0h2M3 25h25" /><path stroke="green" d="M4 6h23M3 7h25M3 8h25M3 9h25M3 10h25M3 11h25M3 12h1m3 0h3m2 0h2m3 0h2m2 0h2m3 0h2M3 13h1m1 0h2m1 0h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1m1 0h2m1 0h1M3 14h1m1 0h2m1 0h1m1 0h5m1 0h2m1 0h4m1 0h2m1 0h1M3 15h1m3 0h2m1 0h5m1 0h2m1 0h4m3 0h2M3 16h1m1 0h4m1 0h5m1 0h2m1 0h4m1 0h4M3 17h1m1 0h4m1 0h5m1 0h2m1 0h4m1 0h4M3 18h1m1 0h4m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1m1 0h4M3 19h1m1 0h5m2 0h3m1 0h3m2 0h2m1 0h4M3 20h25M3 21h25M3 22h25M3 23h25M4 24h23" /><path stroke="#0f0" d="M31 6h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h2M3 28h28" /></svg>;

export const moricons46Data = {
  '32x32_4': Moricons46_32x32_4
};

export interface Moricons46Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons46Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons46Props) => {
  const Svg = moricons46Data[variant];

  return <Svg {...rest} />;
};

export const Moricons46 = React.memo(Moricons46Component);
Moricons46.displayName = 'Moricons46';
