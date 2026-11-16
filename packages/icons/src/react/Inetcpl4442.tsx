import React from 'react';
import type { SVGProps } from "react";

const Inetcpl4442_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="olive" d="M6 1h4M5 2h1m3 0h1M4 3h1m4 0h2M4 4h1m5 0h1M4 5h1m5 0h1M4 6h1m1 0h5m1 0h1M3 7h10M2 8h1m9 0h1M2 9h1m9 0h1M2 10h1m1 0h7m1 0h1M2 11h1m9 0h1M2 12h1m1 0h7m1 0h1M2 13h1m9 0h1M2 14h11" /><path stroke="silver" d="M6 2h1M5 3h1m5 7h1m-1 2h1" /><path stroke="#000" d="M7 2h2m1 0h1M6 3h1m4 0h1M5 4h1m5 0h1M5 5h1m5 0h1M5 6h1m5 0h1m1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M2 15h11" /><path stroke="#fff" d="M3 8h9M3 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#ff0" d="M4 9h8m-8 2h8m-8 2h8" /></svg>;

export const inetcpl4442Data = {
  '16x16_4': Inetcpl4442_16x16_4
};

export interface Inetcpl4442Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Inetcpl4442Component = ({
  variant = '16x16_4',
  ...rest
}: Inetcpl4442Props) => {
  const Svg = inetcpl4442Data[variant];

  return <Svg {...rest} />;
};

export const Inetcpl4442 = React.memo(Inetcpl4442Component);
Inetcpl4442.displayName = 'Inetcpl4442';
