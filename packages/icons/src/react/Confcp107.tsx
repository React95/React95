import React from 'react';
import type { SVGProps } from "react";

const Confcp107_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props} />;
const Confcp107_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="#000" d="M3 3h11M3 4h1m9 0h1M3 5h1m7 0h1m1 0h1M3 6h1m6 0h2m1 0h1M3 7h1m1 0h1m3 0h3m1 0h1M3 8h1m1 0h2m1 0h3m2 0h1M3 9h1m1 0h5m3 0h1M3 10h1m2 0h3m4 0h1M3 11h1m3 0h1m5 0h1M3 12h1m9 0h1M3 13h11" /><path stroke="#fff" d="M4 4h9M4 5h7m1 0h1M4 6h6m2 0h1M4 7h1m1 0h3m3 0h1M4 8h1m2 0h1m3 0h2M4 9h1m5 0h3m-9 1h2m3 0h4m-9 1h3m1 0h5m-9 1h9" /></svg>;

export const confcp107Data = {
  '32x32_4': Confcp107_32x32_4,
  '16x16_4': Confcp107_16x16_4
};

export interface Confcp107Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Confcp107: React.FC<Confcp107Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = confcp107Data[variant];

  return <Svg {...rest} />;
};
