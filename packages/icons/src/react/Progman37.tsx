import React from 'react';
import type { SVGProps } from "react";

const Progman37_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="#000" d="M13 0h7m-9 1h11M9 2h4m5 0h6M8 3h3m3 0h11M7 4h3m2 0h14M7 5h2m2 0h15M6 6h2m2 0h17M6 7h2m2 0h4m5 0h8M6 8h7m7 0h7M6 9h7m7 0h7M7 10h5m8 0h7M8 11h3m9 0h7m-9 1h9m-11 1h10m-11 1h3m1 0h7m-12 1h3m1 0h7m-12 1h2m2 0h7m-11 1h2m1 0h6m-10 1h2m2 0h4m-8 1h2m2 0h3m-7 1h7m-7 1h7m-6 1h5m-4 1h3m-3 2h3m-4 1h5m-6 1h2m2 0h3m-7 1h2m2 0h3m-7 1h7m-6 1h5m-4 1h3" /><path stroke="#fff" d="M13 2h5m-7 1h3m-4 1h2M9 5h2M8 6h2M8 7h2m8 7h1m-2 1h1m-3 1h2m-2 1h1m-2 1h2m-2 1h2m-2 8h2m-2 1h2" /></svg>;
const Progman37_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="#000" d="M13 0h7m-9 1h2m7 0h2M9 2h2m11 0h2M8 3h1m15 0h1M7 4h1m17 0h1M7 5h1m17 0h1M6 6h1m7 0h5m7 0h1M6 7h1m6 0h1m5 0h1m6 0h1M6 8h1m5 0h1m7 0h1m5 0h1M6 9h1m5 0h1m7 0h1m5 0h1M7 10h1m3 0h1m8 0h1m5 0h1M8 11h3m9 0h1m5 0h1m-9 1h2m6 0h1m-11 1h2m7 0h1m-11 1h1m9 0h1m-12 1h1m9 0h1m-12 1h1m8 0h2m-11 1h1m6 0h2m-10 1h1m6 0h1m-8 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-6 1h1m3 0h1m-4 1h3m-3 2h3m-4 1h1m3 0h1m-6 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-6 1h1m3 0h1m-4 1h3" /><path stroke="#ff0" d="M13 1h6m-8 1h2m5 0h3M9 3h2m3 0h8M8 4h2m2 0h11M8 5h1m2 0h2m7 0h4M7 6h1m2 0h2m9 0h4M7 7h1m2 0h1m10 0h4M7 8h4m10 0h4M8 9h2m11 0h4m-4 1h4m-4 1h4m-5 1h4m-6 1h6m-8 1h2m1 0h4m-8 1h2m1 0h3m-7 1h1m2 0h2m-5 1h1m1 0h2m-5 1h1m2 0h1m-4 1h1m2 0h1m-4 1h4m-3 1h2m-2 5h2m-3 1h1m2 0h1m-4 1h1m2 0h1m-3 1h2" /><path stroke="silver" d="M19 1h1m1 1h1m0 1h1m0 1h1M13 5h1m5 0h1m4 0h1M12 6h1m7 0h1M11 7h1M7 9h1m2 0h1m13 3h1m-4 3h1m-3 1h1m-2 1h1m-2 1h1m-5 3h1m2 0h1m-1 5h1m-4 3h1m2 0h1" /><path stroke="#fff" d="M13 2h5m-7 1h3m-4 1h2M9 5h2M8 6h2M8 7h2m8 7h1m-2 1h1m-3 1h2m-2 1h1m-2 1h2m-2 1h2m-2 8h2m-2 1h2" /><path stroke="olive" d="M23 3h1m0 1h1M14 5h5m-6 1h1m5 0h1m5 0h1M12 7h1m7 0h1m4 0h1M11 8h1m13 0h1M11 9h1m13 0h1M8 10h3m14 0h1m-1 1h1m-1 1h1m-2 1h1m-2 1h2m-3 1h2m-4 1h2m-3 1h1m-2 1h1m-2 1h1m-1 1h1m-1 1h1m-4 1h3m0 5h1m-1 1h1m-1 1h1m-4 1h3" /></svg>;

export const progman37Data = {
  '32x32_1': Progman37_32x32_1,
  '32x32_4': Progman37_32x32_4
};

export interface Progman37Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Progman37: React.FC<Progman37Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const Svg = progman37Data[variant];

  return <Svg {...rest} />;
};
