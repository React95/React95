import React from 'react';
import type { SVGProps } from "react";

const Moricons55_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M2 0h3m2 0h3m2 0h3m2 0h3m2 0h3m2 0h3M2 1h1m1 0h1m2 0h1m1 0h1m2 0h1m1 0h1m2 0h1m1 0h1m2 0h1m1 0h1m2 0h1m1 0h1M0 2h3m1 0h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M0 3h1m30 0h1M0 4h3m26 0h3M2 5h1m26 0h1M2 6h1m26 0h1M0 7h3m26 0h3M0 8h1m30 0h1M0 9h3m1 0h24m1 0h3M2 10h1m26 0h1M2 11h1m26 0h1M0 12h3m10 0h2m3 0h2m4 0h1m1 0h1m2 0h3M0 13h1m13 0h5m1 0h3m3 0h1m4 0h1M0 14h3m2 0h2m2 0h2m3 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m2 0h3M2 15h1m1 0h1m3 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h3m1 0h1m1 0h1m2 0h1M2 16h1m1 0h1m3 0h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M0 17h3m1 0h1m3 0h1m3 0h1m1 0h1m3 0h1m1 0h3m1 0h1m1 0h1m2 0h3M0 18h1m4 0h2m2 0h2m3 0h1m3 0h1m12 0h1M0 19h3m10 0h3m1 0h3m9 0h3M2 20h1m26 0h1M2 21h1m26 0h1M0 22h3m1 0h24m1 0h3M0 23h1m30 0h1M0 24h3m26 0h3M2 25h1m26 0h1M2 26h1m26 0h1M0 27h3m26 0h3M0 28h1m30 0h1M0 29h3m1 0h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 30h1m1 0h1m2 0h1m1 0h1m2 0h1m1 0h1m2 0h1m1 0h1m2 0h1m1 0h1m2 0h1m1 0h1M2 31h3m2 0h3m2 0h3m2 0h3m2 0h3m2 0h3" /><path stroke="#ff0" d="M3 1h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1M3 2h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1M1 3h30M3 4h26M3 5h26M3 6h26M3 7h26M1 8h30M3 9h1m24 0h1M3 10h26M3 11h26M3 12h10m2 0h3m2 0h4m1 0h1m1 0h2M1 13h13m5 0h1m3 0h3m1 0h4M3 14h2m2 0h2m2 0h3m1 0h1m1 0h1m1 0h3m1 0h1m1 0h1m1 0h2M3 15h1m1 0h3m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h2M3 16h1m1 0h3m1 0h5m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M3 17h1m1 0h3m1 0h3m1 0h1m1 0h3m1 0h1m3 0h1m1 0h1m1 0h2M1 18h4m2 0h2m2 0h3m1 0h3m1 0h12M3 19h10m3 0h1m3 0h9M3 20h26M3 21h26M3 22h1m24 0h1M1 23h30M3 24h26M3 25h26M3 26h26M3 27h26M1 28h30M3 29h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1M3 30h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1" /><path stroke="gray" d="M30 1h1m-1 4h2m-2 1h1m-1 4h2m-2 1h1m-1 4h2m-2 1h1m-1 4h2m-2 1h1m-1 4h2m-2 1h1M1 30h1m3 0h2m3 0h2m3 0h2m3 0h2m3 0h2m3 0h2M5 31h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1" /></svg>;

export const moricons55Data = {
  '32x32_4': Moricons55_32x32_4
};

export interface Moricons55Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons55Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons55Props) => {
  const Svg = moricons55Data[variant];

  return <Svg {...rest} />;
};

export const Moricons55 = React.memo(Moricons55Component);
Moricons55.displayName = 'Moricons55';
