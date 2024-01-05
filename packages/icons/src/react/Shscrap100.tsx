import React from 'react';
import type { SVGProps } from "react";

const Shscrap100_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="gray" d="M3 1h20M3 2h1m18 0h1M3 3h1m18 0h2M3 4h1m18 0h1m1 0h1M3 5h1m18 0h1m2 0h1M3 6h1m18 0h1m3 0h1M3 7h1m18 0h1M3 8h1M3 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m7 0h13M3 14h1m-1 1h1m3 0h17M3 16h1m-1 1h1m3 0h17M3 18h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M4 2h18M4 3h18M4 4h18M4 5h18m1 0h1M4 6h10m3 0h5m1 0h2M4 7h18M4 8h23M4 9h3m17 0h3M4 10h23M4 11h3m17 0h3M4 12h6m14 0h3M4 13h3m17 0h3M4 14h3m18 0h2M4 15h3m18 0h2M4 16h1m19 0h3M4 17h1m21 0h1M4 18h1m21 0h1M4 19h3m17 0h3M4 20h23M4 21h3m17 0h3M4 22h23M4 23h3m7 0h13M4 24h23M4 25h23M4 26h23M6 27h5m7 0h9m-7 1h7m-6 1h5" /><path stroke="#000" d="M23 2h1m0 1h1m0 1h1m0 1h1m0 1h1m-5 1h6m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M4 28h2m5 0h7m10 0h1M6 29h5m7 0h2m8 0h1m-9 1h1m5 0h3m-8 1h5" /><path stroke="silver" d="M23 4h1m0 1h1m0 1h1m1 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M4 27h2m5 0h7m9 0h1M6 28h5m7 0h2m7 0h1m-8 1h1m5 0h2m-7 1h5" /><path stroke="#00f" d="M14 6h3M7 9h17M7 11h17M7 13h4m-4 6h17M7 21h17M7 23h7" /><path stroke="#ff0" d="M10 12h14M7 14h18m-1 1h1M5 16h19M5 17h2m17 0h2M5 18h21" /></svg>;
const Shscrap100_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="gray" d="M2 1h10M2 2h1m9 0h1M2 3h1m10 0h1M2 4h1M2 5h1M2 6h1M2 7h1M2 8h1m2 0h6M2 9h1m-1 1h1m2 0h3m-6 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M3 2h8M3 3h8m1 0h1M3 4h4m2 0h2M3 5h10M3 6h2m6 0h2M3 7h1M3 8h1M3 9h1m-1 1h1m7 0h2M3 11h1m4 0h5m-8 1h8m-7 1h3m3 0h1" /><path stroke="silver" d="M11 2h1m-1 1h1m1 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M3 12h2m8 0h1m-9 1h1m3 0h3m1 0h1m-8 1h3m3 0h2" /><path stroke="#00f" d="M7 4h2M5 6h6m-3 4h3" /><path stroke="#000" d="M11 4h4m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M3 13h2m9 0h1M5 14h1m3 0h3m2 0h1m-9 1h3m3 0h3" /><path stroke="#ff0" d="M4 7h9M4 8h1m6 0h2M4 9h9m-9 1h1m-1 1h4" /></svg>;

export const shscrap100Data = {
  '32x32_4': Shscrap100_32x32_4,
  '16x16_4': Shscrap100_16x16_4
};

export interface Shscrap100Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shscrap100: React.FC<Shscrap100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = shscrap100Data[variant];

  return <Svg {...rest} />;
};
