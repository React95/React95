import React from 'react';
import type { SVGProps } from "react";

const Cdplayer114_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h4m3 0h1M0 1h1m2 0h1m3 0h2M0 2h1m2 0h5m1 0h1M0 3h1m9 0h1M0 4h1m10 0h1M0 5h1m9 0h1M0 6h8m1 0h1M7 7h2M7 8h1" /><path stroke="#000" d="M1 1h2M1 2h2m5 0h1M1 3h9M1 4h10M1 5h9M8 6h1" /></svg>;

export const cdplayer114Data = {
  '32x32_1': Cdplayer114_32x32_1
};

export interface Cdplayer114Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_1';
}

export const Cdplayer114: React.FC<Cdplayer114Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const Svg = cdplayer114Data[variant];

  return <Svg {...rest} />;
};
