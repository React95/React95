import React from 'react';
import type { SVGProps } from "react";

const Conf605_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M4 2h8M2 3h2m8 0h2M1 4h1m12 0h1M0 5h1m3 0h8m3 0h1M0 6h1m3 0h1m6 0h1m3 0h1M1 7h3m8 0h3M2 8h1m9 0h1m1 0h1M1 9h1m9 0h1m2 0h1M1 10h1m9 0h1m2 0h1M1 11h1m9 0h1m1 0h1M1 12h1m9 0h2M2 13h10" /><path stroke="#ff0" d="M4 3h1m1 0h1m1 0h1m1 0h1M3 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 5h1m9 0h1m1 0h1M1 6h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M4 7h1m5 0h1M3 8h1m7 0h1M2 9h1m1 0h1m1 0h1m1 0h1m1 0h1m-9 2h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1" /><path stroke="#fff" d="M5 3h1m1 0h1m1 0h1m1 0h1M2 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 5h1m1 0h1m9 0h1M2 6h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 7h1m1 0h1m1 0h1m1 0h1M4 8h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m-7 2h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#00f" d="M6 7h1m1 0h1M5 8h1m1 0h1m1 0h1" /><path stroke="olive" d="M13 8h1m-2 1h2m-2 1h2m-2 1h1" /><path stroke="gray" d="M2 10h9" /></svg>;

export const conf605Data = {
  '16x16_4': Conf605_16x16_4
};

export interface Conf605Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Conf605Component = ({
  variant = '16x16_4',
  ...rest
}: Conf605Props) => {
  const Svg = conf605Data[variant];

  return <Svg {...rest} />;
};

export const Conf605 = React.memo(Conf605Component);
Conf605.displayName = 'Conf605';
