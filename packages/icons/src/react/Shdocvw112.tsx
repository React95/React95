import React from 'react';
import type { SVGProps } from "react";

const Shdocvw112_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="maroon" d="M3 2h9M3 3h1M3 14h1m7 0h1m-9 1h1" /><path stroke="#000" d="M12 2h1m-1 1h1M4 4h8m-1 1h1M8 6h1m2 0h1m-2 1h1M9 8h1M9 9h1m0 1h1m-3 1h1m2 0h1m-3 1h1m1 0h1m-8 1h8m0 1h1m-9 1h9" /><path stroke="red" d="M4 3h1m4 0h3M4 14h1m4 0h2" /><path stroke="#fff" d="M5 3h1m0 2h1M6 6h1m0 1h1M7 8h1M7 9h1m-1 2h1m-2 1h1m-2 2h1" /><path stroke="#f0f" d="M6 3h3M6 14h3" /><path stroke="gray" d="M4 5h1m5 0h1M4 6h1m2 0h1m2 0h1M5 7h1m3 0h1M6 8h1M6 9h1m-2 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m3 0h1m-7 1h1m2 0h1m2 0h1" /><path stroke="silver" d="M5 5h1m1 0h3M5 6h1m3 0h1M6 7h1m1 0h1M8 8h1M8 9h1m-3 1h1m1 0h1m-4 1h1m3 0h1m-5 1h1m2 0h1" /></svg>;

export const shdocvw112Data = {
  '16x16_4': Shdocvw112_16x16_4
};

export interface Shdocvw112Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Shdocvw112Component = ({
  variant = '16x16_4',
  ...rest
}: Shdocvw112Props) => {
  const Svg = shdocvw112Data[variant];

  return <Svg {...rest} />;
};

export const Shdocvw112 = React.memo(Shdocvw112Component);
Shdocvw112.displayName = 'Shdocvw112';
