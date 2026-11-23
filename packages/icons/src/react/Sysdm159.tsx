import React from 'react';
import type { SVGProps } from "react";

const Sysdm159_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M1 0h1m2 0h1m2 0h1m2 0h1m2 0h1M1 1h1m2 0h1m2 0h1m2 0h1m2 0h1M0 2h15M1 14h1m2 0h1m2 0h1m2 0h1m2 0h1M1 15h1m2 0h1m2 0h1m2 0h1m2 0h1" /><path stroke="#000" d="M2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M2 1h1m2 0h1m2 0h1m2 0h1m2 0h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M0 13h16M2 14h1m2 0h1m2 0h1m2 0h1m2 0h1M2 15h1m2 0h1m2 0h1m2 0h1m2 0h1" /><path stroke="#00f" d="M0 3h15M0 4h15M0 5h15M0 6h15M0 7h15M0 8h15M0 9h15M0 10h15M0 11h15M0 12h15" /></svg>;

export const sysdm159Data = {
  '16x16_4': Sysdm159_16x16_4
};

export interface Sysdm159Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Sysdm159Component = ({
  variant = '16x16_4',
  ...rest
}: Sysdm159Props) => {
  const Svg = sysdm159Data[variant];

  return <Svg {...rest} />;
};

export const Sysdm159 = React.memo(Sysdm159Component);
Sysdm159.displayName = 'Sysdm159';
