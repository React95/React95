import React from 'react';
import type { SVGProps } from "react";

const Conf609_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M7 2h6M7 3h1m4 0h2M7 4h1m4 0h1m1 0h1M7 5h1m4 0h4M7 6h1m7 0h1M7 7h1m7 0h1M7 8h1m7 0h1M7 9h1m7 0h1m-9 1h1m7 0h1m-9 1h1m7 0h1m-9 1h9" /><path stroke="#fff" d="M8 3h4M8 4h4m1 0h1M8 5h4M8 6h7M8 7h7M8 8h7M8 9h7m-7 1h7m-7 1h7" /><path stroke="maroon" d="M0 5h1m1 0h1m1 0h2M0 7h1m1 0h1m1 0h2M0 9h1m1 0h1m1 0h2m-6 2h1m1 0h1m1 0h2" /></svg>;

export const conf609Data = {
  '16x16_4': Conf609_16x16_4
};

export interface Conf609Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Conf609Component = ({
  variant = '16x16_4',
  ...rest
}: Conf609Props) => {
  const Svg = conf609Data[variant];

  return <Svg {...rest} />;
};

export const Conf609 = React.memo(Conf609Component);
Conf609.displayName = 'Conf609';
