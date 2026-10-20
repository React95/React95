import React from 'react';
import type { SVGProps } from "react";

const Conf606_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="maroon" d="M3 0h8M3 1h1M3 12h1" /><path stroke="#000" d="M11 0h1m-1 1h1M4 2h7M4 3h1m5 0h1M4 4h1m5 0h1M5 5h1m3 0h1M6 6h1m1 0h1M6 7h1m1 0h1M5 8h1m3 0h1M4 9h1m5 0h1m-7 1h1m5 0h1m-7 1h7m0 1h1m-9 1h9" /><path stroke="red" d="M4 1h1m2 0h4M4 12h1m2 0h4" /><path stroke="#fff" d="M5 1h1M5 3h2M5 4h2M6 5h1M6 8h1M5 9h2m-2 1h2m-2 2h1" /><path stroke="silver" d="M6 1h1m0 2h3M7 4h3M7 5h2M7 6h1M7 7h1M7 8h2M7 9h3m-3 1h3m-4 2h1" /></svg>;

export const conf606Data = {
  '16x16_4': Conf606_16x16_4
};

export interface Conf606Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Conf606Component = ({
  variant = '16x16_4',
  ...rest
}: Conf606Props) => {
  const Svg = conf606Data[variant];

  return <Svg {...rest} />;
};

export const Conf606 = React.memo(Conf606Component);
Conf606.displayName = 'Conf606';
