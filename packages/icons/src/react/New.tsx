import React from 'react';
import type { SVGProps } from "react";

const New_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M3 1h8M3 2h1m6 0h2M3 3h1m6 0h1m1 0h1M3 4h1m6 0h4M3 5h1m9 0h1M3 6h1m9 0h1M3 7h1m9 0h1M3 8h1m9 0h1M3 9h1m9 0h1M3 10h1m9 0h1M3 11h1m9 0h1M3 12h1m9 0h1M3 13h11" /><path stroke="#fff" d="M4 2h6M4 3h6m1 0h1M4 4h6M4 5h9M4 6h9M4 7h9M4 8h9M4 9h9m-9 1h9m-9 1h9m-9 1h9" /></svg>;

export const newData = {
  '16x16_4': New_16x16_4
};

export interface NewProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const New: React.FC<NewProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = newData[variant];

  return <Svg {...rest} />;
};
