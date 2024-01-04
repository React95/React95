import React from 'react';
import type { SVGProps } from "react";

const Save_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M1 1h14M1 2h1m1 0h1m8 0h1m1 0h1M1 3h1m1 0h1m8 0h3M1 4h1m1 0h1m8 0h1m1 0h1M1 5h1m1 0h1m8 0h1m1 0h1M1 6h1m1 0h1m8 0h1m1 0h1M1 7h1m1 0h1m8 0h1m1 0h1M1 8h1m2 0h8m2 0h1M1 9h1m12 0h1M1 10h1m2 0h9m1 0h1M1 11h1m2 0h6m2 0h1m1 0h1M1 12h1m2 0h6m2 0h1m1 0h1M1 13h1m2 0h6m2 0h1m1 0h1M2 14h13" /><path stroke="olive" d="M2 2h1M2 3h1M2 4h1m10 0h1M2 5h1m10 0h1M2 6h1m10 0h1M2 7h1m10 0h1M2 8h2m8 0h2M2 9h12M2 10h2m9 0h1M2 11h2m9 0h1M2 12h2m9 0h1M2 13h2m9 0h1" /></svg>;

export const saveData = {
  '16x16_4': Save_16x16_4
};

export interface SaveProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Save: React.FC<SaveProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = saveData[variant];

  return <Svg {...rest} />;
};
