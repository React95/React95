import React from 'react';
import type { SVGProps } from "react";

const Comctl32150_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M4 3h4m1 0h2M4 4h1m2 0h1m1 0h1m1 0h1M4 5h1m2 0h3m2 0h1M4 6h1m8 0h1M4 7h1m9 0h1M4 8h1m8 0h1M4 9h6m2 0h1m-4 1h1m1 0h1m-3 1h2" /><path stroke="#000" d="M5 4h2m3 0h1M5 5h2m3 0h2M5 6h8M5 7h9M5 8h8m-3 1h2m-2 1h1" /></svg>;

export const comctl32150Data = {
  '32x32_1': Comctl32150_32x32_1
};

export interface Comctl32150Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_1';
}

export const Comctl32150: React.FC<Comctl32150Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const Svg = comctl32150Data[variant];

  return <Svg {...rest} />;
};
