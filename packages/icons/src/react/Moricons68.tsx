import React from 'react';
import type { SVGProps } from "react";

const Moricons68_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h1m10 0h21M14 1h18M12 2h1m1 0h18M12 3h1m3 0h16M12 4h3m1 0h16M12 5h3m3 0h14M12 6h5m1 0h14M12 7h5m3 0h12M0 8h1m10 0h8m1 0h12M0 9h1m10 0h8m3 0h10M0 10h1m10 0h10m1 0h10m-20 1h9m3 0h8m-13 1h4m1 0h8m-12 1h3m3 0h6m-11 1h4m1 0h6m-10 1h3m3 0h4M0 16h3m19 0h5m1 0h4M0 17h3m19 0h5m3 0h2M0 18h3m19 0h7m1 0h2M0 19h6m13 0h1M0 20h6m13 0h1M0 21h5m-5 1h4m-4 1h4m-4 1h4m-4 1h9m3 0h2m1 0h5M0 26h10m2 0h1m2 0h8m1 0h3m1 0h4M0 27h11m5 0h6m8 0h2M0 28h12m4 0h5m10 0h1M0 29h12m2 0h1m2 0h3M0 30h13m1 0h2m1 0h3M0 31h17m1 0h2" /><path stroke="#000" d="M1 0h10M0 1h1m10 0h1M0 2h1m10 0h1M0 3h1m10 0h1M0 4h1m10 0h1M0 5h1m10 0h1M0 6h1m10 0h1M0 7h1m10 0h1M1 8h10M1 9h1m8 0h1M1 10h1m8 0h1M0 11h12M0 12h1m5 0h13M0 13h1m4 0h1m13 0h1M0 14h1m2 0h3m13 0h2M0 15h4m3 0h11m3 0h1M3 16h1m3 0h2m7 0h2m3 0h1M3 17h1m3 0h2m7 0h2m3 0h1M3 18h6m7 0h6M6 19h2m8 0h3M6 20h1m3 0h1m1 0h1m1 0h1m3 0h1M5 21h1m13 0h1M4 22h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M4 23h1m15 0h1M4 24h17m1 4h1m1 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1" /><path stroke="gray" d="M1 1h10M1 2h1m8 0h1M1 3h1m8 0h1M1 4h1m8 0h1M1 5h1m8 0h1M1 6h1m8 0h1M1 7h10M2 9h8m-8 1h8m-9 2h5m-5 1h4m-4 1h2m17 5h12m-12 1h2m8 0h2m-12 1h2m8 0h2m-11 1h1m8 0h2m-11 1h1m8 0h2m-11 1h1m8 0h2m-12 1h12m-9 1h1m3 0h1m-6 1h8m-9 1h1m1 0h1m1 0h1m1 0h1m1 0h2m-11 1h3m1 0h1m1 0h1m1 0h1m1 0h2m-12 1h2m1 0h1m1 0h1m1 0h1m1 0h3m-12 1h10m1 0h1" /><path stroke="#00f" d="M12 1h2m-1 1h1m-1 1h3m-1 1h1m-1 1h3m-1 1h1m-1 1h3m-1 1h1m-1 1h3m-1 1h1m-1 1h3m-1 1h1m-1 1h3m-1 1h1m-1 1h3m-1 1h1m-1 1h3m-1 1h1M9 25h3m2 0h1m-5 1h2m1 0h2m-4 1h5m-4 1h4m-4 1h2m1 0h2m-4 1h1m2 0h1m0 1h1" /><path stroke="#0ff" d="M2 2h8M2 3h8M2 4h8M2 5h8M2 6h8m12 14h8m-8 1h8m-8 1h8m-8 1h8m-8 1h8" /><path stroke="red" d="M6 13h13M6 14h13M4 15h3m11 0h3M4 16h3m2 0h7m2 0h3M4 17h3m2 0h7m2 0h3M9 18h7m-8 1h8m-9 1h3m1 0h1m1 0h1m1 0h3M6 21h13M5 22h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3M5 23h15m10 8h1" /></svg>;

export const moricons68Data = {
  '32x32_4': Moricons68_32x32_4
};

export interface Moricons68Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons68Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons68Props) => {
  const Svg = moricons68Data[variant];

  return <Svg {...rest} />;
};

export const Moricons68 = React.memo(Moricons68Component);
Moricons68.displayName = 'Moricons68';
