import React from 'react';
import type { SVGProps } from "react";

const LrgIcon_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="navy" d="M2 2h3M2 3h1m1 0h2M2 4h1m2 0h1M2 5h1m2 0h1M2 6h4m4 2h3m-3 1h1m1 0h2m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h4" /><path stroke="#fff" d="M3 3h1M3 4h2M3 5h2m6 4h1m-1 1h2m-2 1h2" /><path stroke="#000" d="M1 8h6m2 6h6" /></svg>;

export const lrgIconData = {
  '16x16_4': LrgIcon_16x16_4
};

export interface LrgIconProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const LrgIcon: React.FC<LrgIconProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = lrgIconData[variant];

  return <Svg {...rest} />;
};
