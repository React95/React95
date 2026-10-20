import React from 'react';
import type { SVGProps } from "react";

const Conf610_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="maroon" d="M1 1h5M2 2h3M3 3h1" /><path stroke="#000" d="M8 2h6M8 3h1m4 0h2M8 4h1m4 0h3M4 5h5m6 0h1M3 6h1m4 0h1m6 0h1M2 7h12m1 0h1M2 8h1m10 0h1m1 0h1M2 9h1m10 0h1m1 0h1M2 10h1m10 0h3M2 11h1m10 0h1M2 12h1m10 0h1M2 13h1m10 0h1M2 14h12" /><path stroke="#fff" d="M9 3h4M9 4h4M9 5h6M5 6h1m1 0h1m1 0h6m-1 1h1M3 8h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M4 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 10h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1M3 12h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#ff0" d="M4 6h1m1 0h1M4 8h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1M3 11h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1M3 13h1m1 0h1m1 0h1m1 0h1m1 0h1" /></svg>;

export const conf610Data = {
  '16x16_4': Conf610_16x16_4
};

export interface Conf610Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Conf610Component = ({
  variant = '16x16_4',
  ...rest
}: Conf610Props) => {
  const Svg = conf610Data[variant];

  return <Svg {...rest} />;
};

export const Conf610 = React.memo(Conf610Component);
Conf610.displayName = 'Conf610';
