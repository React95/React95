import React from 'react';
import type { SVGProps } from "react";

const Shdocvw275_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M0 1h7M0 2h1m6 0h1M0 3h1m7 0h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m4 0h11M0 10h1m3 0h1m9 0h1M0 11h1m2 0h1m9 0h2M3 12h1m2 0h1m6 0h2M3 13h1m9 0h2M3 14h11M3 15h1" /><path stroke="red" d="M9 1h3m0 1h1m0 1h1m-1 1h1m-3 1h5m-4 1h3m-2 1h1" /><path stroke="#fff" d="M1 2h3m1 0h1M1 3h1m1 0h3m1 0h1M1 4h2M1 5h1m1 0h1m3 0h1M1 6h1m5 0h1M1 7h1m5 0h1M1 8h2m3 0h2M1 9h1m1 0h2m-4 1h3m0 1h9m-7 2h4" /><path stroke="#ff0" d="M4 2h1M2 3h1M2 9h1" /><path stroke="silver" d="M6 2h1M6 3h1M4 5h1m3 0h1M3 6h1m4 0h1M8 7h1M8 8h1m-4 2h9M1 11h2m1 1h2m4 0h1m-7 1h2m4 0h3" /><path stroke="teal" d="M3 4h3M2 5h1M2 6h1M2 7h1" /><path stroke="#000" d="M6 4h4M9 5h1M9 6h1M9 7h1M9 8h1m5 2h1m-1 1h1M0 12h3m4 0h3m5 0h1m-1 1h1m-2 1h1M4 15h10" /><path stroke="green" d="M5 5h1M4 6h1m6 6h1" /><path stroke="navy" d="M6 5h1M6 6h1M6 7h1M3 8h3" /><path stroke="#00f" d="M5 6h1M3 7h3" /><path stroke="#0f0" d="M12 12h1" /></svg>;

export const shdocvw275Data = {
  '16x16_4': Shdocvw275_16x16_4
};

export interface Shdocvw275Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Shdocvw275: React.FC<Shdocvw275Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = shdocvw275Data[variant];

  return <Svg {...rest} />;
};
