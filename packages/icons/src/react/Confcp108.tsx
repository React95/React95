import React from 'react';
import type { SVGProps } from "react";

const Confcp108_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props} />;
const Confcp108_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M3 3h11M3 4h1m9 0h1M3 5h1m9 0h1M3 6h1m9 0h1M3 7h1m9 0h1M3 8h1m9 0h1M3 9h1m9 0h1M3 10h1m9 0h1M3 11h1m9 0h1M3 12h1m9 0h1M3 13h11" /><path stroke="#fff" d="M4 4h9M4 5h9M4 6h9M4 7h9M4 8h9M4 9h9m-9 1h9m-9 1h9m-9 1h9" /></svg>;

export const confcp108Data = {
  '32x32_4': Confcp108_32x32_4,
  '16x16_4': Confcp108_16x16_4
};

export interface Confcp108Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Confcp108: React.FC<Confcp108Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = confcp108Data[variant];

  return <Svg {...rest} />;
};
