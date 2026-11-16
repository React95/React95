import React from 'react';
import type { SVGProps } from "react";

const Mstask402_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M2 0h14M2 1h1M2 2h1M2 3h13M2 4h1m11 0h1m-1 1h1m-1 1h1M0 7h1m13 0h1M0 8h1m1 0h1m1 0h1m9 0h1M1 9h1m1 0h1m10 0h1M1 10h2m1 0h1m9 0h1M1 11h1m1 0h1m1 0h10M0 12h1m2 0h1m-4 1h1m1 0h1m1 0h1" /><path stroke="navy" d="M3 1h12M3 2h8" /><path stroke="#000" d="M15 1h1m-4 1h1m1 0h2m-1 1h1m-1 1h1m-1 1h1M0 6h6m9 0h1M5 7h1m9 0h1M5 8h1m9 0h1M4 9h1m10 0h1M3 10h1m11 0h1M4 11h1m10 0h1M5 12h11M3 13h1m1 0h1m-6 2h6" /><path stroke="silver" d="M11 2h1m1 0h1M3 4h1M3 7h2M3 8h1M2 9h1m-2 3h1m2 0h1" /><path stroke="#fff" d="M4 4h10M6 5h8M6 6h8M1 7h1m4 0h8M1 8h1m4 0h8M5 9h9m-9 1h9M1 13h1" /><path stroke="green" d="M0 5h2m1 0h3m-6 9h2m1 0h3" /><path stroke="#0f0" d="M2 5h1m-1 9h1" /><path stroke="#ff0" d="M2 7h1m-1 4h1m-1 1h1" /></svg>;

export const mstask402Data = {
  '16x16_4': Mstask402_16x16_4
};

export interface Mstask402Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Mstask402Component = ({
  variant = '16x16_4',
  ...rest
}: Mstask402Props) => {
  const Svg = mstask402Data[variant];

  return <Svg {...rest} />;
};

export const Mstask402 = React.memo(Mstask402Component);
Mstask402.displayName = 'Mstask402';
