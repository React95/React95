import React from 'react';
import type { SVGProps } from "react";

const Conf607_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M4 3h12M4 4h1m9 0h2M4 5h1m9 0h2m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M4 11h1m10 0h1M4 12h12" /><path stroke="navy" d="M5 4h1m2 0h6M5 5h9" /><path stroke="#fff" d="M6 4h1M5 6h10M4 7h2m8 0h1M5 8h10M4 9h2m8 0h1M5 10h10M5 11h10" /><path stroke="gray" d="M7 4h1M6 7h8M6 9h8" /><path stroke="#00f" d="M0 6h1m1 0h1m1 0h1M0 8h1m1 0h1m1 0h1m-5 2h1m1 0h1m1 0h1" /></svg>;

export const conf607Data = {
  '16x16_4': Conf607_16x16_4
};

export interface Conf607Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Conf607Component = ({
  variant = '16x16_4',
  ...rest
}: Conf607Props) => {
  const Svg = conf607Data[variant];

  return <Svg {...rest} />;
};

export const Conf607 = React.memo(Conf607Component);
Conf607.displayName = 'Conf607';
