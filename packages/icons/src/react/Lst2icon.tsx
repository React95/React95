import React from 'react';
import type { SVGProps } from "react";

const Lst2icon_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="navy" d="M0 1h2m6 0h2M0 2h1m1 0h1m5 0h1m1 0h1M0 3h3m5 0h3M0 6h2m6 0h2M0 7h1m1 0h1m5 0h1m1 0h1M0 8h3m5 0h3M0 11h2m6 0h2M0 12h1m1 0h1m5 0h1m1 0h1M0 13h3m5 0h3" /><path stroke="#fff" d="M1 2h1m7 0h1M1 7h1m7 0h1m-9 5h1m7 0h1" /><path stroke="#000" d="M4 2h3m5 0h3M4 7h3m5 0h3M4 12h3m5 0h3" /></svg>;

export const lst2iconData = {
  '16x16_4': Lst2icon_16x16_4
};

export interface Lst2iconProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Lst2icon: React.FC<Lst2iconProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = lst2iconData[variant];

  return <Svg {...rest} />;
};
