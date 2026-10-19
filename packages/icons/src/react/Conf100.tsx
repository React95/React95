import React from 'react';
import type { SVGProps } from "react";

const Conf100_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="olive" d="M9 3h6M8 4h1m2 0h1m2 0h2M7 5h1m4 0h1m2 0h1M6 6h1m6 0h1M6 7h1m6 0h1m1 0h1M6 8h1m5 0h1m1 0h2M6 9h1m5 0h1m1 0h2M6 10h1m6 0h2m-9 1h1m-1 1h1m4 0h1m-5 1h1m3 0h1m-5 1h1m4 0h1m-6 1h1m4 0h1m-5 1h1m4 0h1m-6 1h1m4 0h1m-6 1h1m5 0h1m-6 1h1m4 0h1m-6 1h1m5 0h2m-7 1h1m5 0h3m1 0h3m-12 1h1m8 0h1m2 0h1m-13 1h1m9 0h1m-10 1h1m8 0h1m1 0h1m-11 1h1m4 0h3m1 0h2m-10 1h1m3 0h3m1 0h2m-9 1h1m1 0h3m1 0h2" /><path stroke="#fff" d="M9 4h2m2 0h1M8 5h1m2 0h1M7 6h1m1 0h1m1 0h1M8 7h1m1 0h1M9 8h1M8 9h1m0 1h1m-2 1h1m0 1h1m-1 2h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m0 1h1m-2 1h1m1 0h1m2 0h1m1 0h1m1 0h2m-10 1h1m1 0h2m1 0h1m1 0h1m-7 1h1m1 0h2m-3 1h1m1 0h1m-2 1h1" /><path stroke="silver" d="M12 4h1m1 2h2m-4 1h1m1 0h1m-4 1h1m-1 1h1m-2 3h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m0 1h1m2 3h3m1 0h1m-6 2h1m-2 1h1" /><path stroke="#ff0" d="M9 5h2m2 0h2M8 6h1m1 0h1m1 0h1M7 7h1m1 0h1M7 8h2M7 9h1m1 0h1m-3 1h2m-2 1h1m1 0h1m-3 1h2m-1 1h2m-2 1h1m1 0h1m-3 1h1m1 0h1m-2 1h1m1 0h1m-3 1h1m1 0h1m-3 1h2m1 0h1m-3 1h1m1 0h1m-3 1h2m1 0h1m-3 1h2m1 0h1m-2 1h1m1 0h2m1 0h1m-7 1h1m1 0h1m2 0h1m1 0h1m2 0h2m-11 1h1m1 0h1m-2 1h1m1 0h1m-2 1h1" /><path stroke="#000" d="M16 5h1m-1 1h1m-1 1h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-6 1h2m2 0h1m-5 1h4m-3 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h2m0 1h6m-4 1h1m3 0h1m0 1h1m-1 1h1m-1 1h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-5 1h1m2 0h1m-8 1h7" /><path stroke="gray" d="M11 7h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1" /></svg>;
const Conf100_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="olive" d="M4 1h4M3 2h1M3 3h1m3 0h1M3 4h1M3 5h1M3 6h1m2 0h1M3 7h1m2 0h1M4 8h1m2 0h1M4 9h1m2 0h1m-3 1h1m2 0h4m-7 1h1m0 1h1m2 0h3m-5 1h1" /><path stroke="#ff0" d="M4 2h1m1 0h1M5 3h1M4 4h1m0 1h1M4 6h1m0 1h1m0 1h1M5 9h1m0 1h1m0 1h1m1 0h1m1 0h1m-4 1h1" /><path stroke="#fff" d="M5 2h1M4 3h1m0 1h1M4 5h1m0 1h1M4 7h1m0 1h1m0 1h1m-1 2h1m1 0h1m-2 1h1" /><path stroke="silver" d="M7 2h1M6 3h1m0 7h1m2 1h1" /><path stroke="#000" d="M8 2h1M8 3h1M6 4h2M6 5h1m0 1h1M7 7h1m0 1h1M8 9h4m0 1h1m-1 1h1m-1 1h1m-5 1h4" /></svg>;

export const conf100Data = {
  '32x32_4': Conf100_32x32_4,
  '16x16_4': Conf100_16x16_4
};

export interface Conf100Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Conf100Component = ({
  variant = '32x32_4',
  ...rest
}: Conf100Props) => {
  const Svg = conf100Data[variant];

  return <Svg {...rest} />;
};

export const Conf100 = React.memo(Conf100Component);
Conf100.displayName = 'Conf100';
