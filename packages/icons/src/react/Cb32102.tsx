import React from 'react';
import type { SVGProps } from "react";

const Cb32102_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M1 1h18M1 2h1m16 0h1M1 3h1m16 0h2M1 4h1m16 0h1m1 0h1M1 5h1m16 0h1m2 0h1M1 6h1m16 0h1m3 0h1M1 7h1m16 0h1m4 0h1M1 8h1m16 0h1M1 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m18 0h1M1 24h1m18 0h1M1 25h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M2 2h16M2 3h16M2 4h16M2 5h16m1 0h1M2 6h2m12 0h2m1 0h2M2 7h16m1 0h3m6 0h1M2 8h2m12 0h2m10 0h1M2 9h22m3 0h1M2 10h2m18 0h2m3 0h1M2 11h22m2 0h1M2 12h2m18 0h2m2 0h1M2 13h22m1 0h1M2 14h2m18 0h2m1 0h1M2 15h21m1 0h1M2 16h2m17 0h2m1 0h1M2 17h20m1 0h1M2 18h2m16 0h2m1 0h1M2 19h19m1 0h1M2 20h2m15 0h2m1 0h1M2 21h18m1 0h1M2 22h2m14 0h2m1 0h1M2 23h18m1 0h1M2 24h2m14 0h2m3 0h1M2 25h18m2 0h2M2 26h2m14 0h2m1 0h3M2 27h22M2 28h22" /><path stroke="#000" d="M19 2h1m0 1h1m0 1h1m0 1h1m8 0h1m-9 1h1m7 0h1m-8 1h1m-6 1h7m-1 1h1m4 0h1m-6 1h1m4 0h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h2m-2 1h2m-3 1h1m1 0h1m-5 1h2m2 0h1m-6 1h2m3 0h1m-6 1h1m4 0h1m-1 1h1m-1 1h1m-1 1h1M1 30h25" /><path stroke="maroon" d="M30 3h1m-2 1h1m1 0h1m-3 1h2" /><path stroke="silver" d="M19 4h1m0 1h1m0 1h1m0 1h1m1 2h1m-1 1h1m-1 1h1m-1 1h1m-3 11h1m1 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M2 29h23" /><path stroke="red" d="M30 4h1" /><path stroke="green" d="M28 5h1m-1 1h1m1 0h1" /><path stroke="#00f" d="M4 6h12M4 8h12M4 10h18M4 12h18M4 14h18M4 16h17M4 18h16M4 20h15M4 22h14M4 24h14M4 26h14" /><path stroke="#0f0" d="M29 6h1m0 1h1" /><path stroke="olive" d="M27 7h1m-1 1h1m2 0h1m-5 1h1m2 0h1m-4 1h1m2 0h1m-5 1h1m2 0h1m-4 1h1m2 0h1m-5 1h1m2 0h1m-4 1h1m2 0h1m-5 1h1m2 0h1m-4 1h1m2 0h1m-5 1h1m2 0h1m-4 1h1m2 0h1m-5 1h1m2 0h1m-4 1h1m2 0h1m-5 1h1m2 0h1m-4 1h1m2 0h1" /><path stroke="#ff0" d="M29 7h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1" /></svg>;

export const cb32102Data = {
  '32x32_4': Cb32102_32x32_4
};

export interface Cb32102Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Cb32102Component = ({
  variant = '32x32_4',
  ...rest
}: Cb32102Props) => {
  const Svg = cb32102Data[variant];

  return <Svg {...rest} />;
};

export const Cb32102 = React.memo(Cb32102Component);
Cb32102.displayName = 'Cb32102';
