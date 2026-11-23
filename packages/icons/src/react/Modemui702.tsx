import React from 'react';
import type { SVGProps } from "react";

const Modemui702_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M19 7h1m-3 1h2m1 0h2m-7 1h2m5 0h2m-11 1h2m9 0h2m-15 1h2m9 0h3m1 0h2M9 12h2m6 0h2m1 0h2m3 0h2m1 0h2M7 13h2m9 0h2m10 0h2M5 14h2m6 0h2m5 0h2M1 15h1m1 0h2m10 0h3m4 0h1M0 16h1m1 0h2m1 0h2m2 0h2m2 0h2m3 0h2M0 17h1m2 0h1m3 0h2m2 0h2m11 0h2M0 18h1m2 0h1m5 0h2m2 0h2m7 0h2m2 0h2m-17 1h2m2 0h1m4 0h2m-9 1h2m3 0h2m-5 1h2m0 1h1m1 1h1" /><path stroke="green" d="M19 8h1m-2 1h1m1 0h2m-2 1h4m1 1h1m1 1h1m1 1h1m-3 1h3m-11 1h3m3 0h3m-8 1h6m-4 1h2m-4 1h2m-9 1h2m3 0h2m-5 1h3" /><path stroke="#0f0" d="M17 9h1m-3 1h2m1 0h2m-7 1h2m1 0h1m2 0h3m-11 1h2m1 0h3m-8 1h2m1 0h1m2 0h3M7 14h2m1 0h3m4 0h3M5 15h2m1 0h1m2 0h4m3 0h1M7 16h2m0 1h2m0 1h2" /><path stroke="olive" d="M19 9h1m-3 1h1m-3 1h1m-3 1h1m-3 1h1m-3 1h1m-3 1h1m16 4h4m-6 1h4m-6 1h4m-4 1h2" /><path stroke="#f0f" d="M17 11h1m-5 2h1m-5 2h1" /><path stroke="#ff0" d="M18 11h1m-5 2h1m1 1h1m-7 1h1m1 1h1" /><path stroke="red" d="M19 12h1m-5 2h1m-5 2h1" /><path stroke="silver" d="M22 12h3m-3 1h5m-3 1h1m-10 2h3M2 17h1m1 0h1m10 0h5M2 18h1m1 0h3m10 0h1m6 0h2M2 19h1m2 0h4m13 0h2M7 20h4m9 0h2M9 21h4m5 0h2m-9 1h4m-2 1h4m-2 1h4m-2 1h2" /><path stroke="#fff" d="M20 13h2m0 1h2M1 16h1m2 0h1m-4 1h1m3 0h2m6 0h2M1 18h1m5 0h2m6 0h2M1 19h1m7 0h2m0 1h2m0 1h2m0 1h2m0 1h2" /><path stroke="#000" d="M27 13h2m-4 1h2m3 0h2m-9 1h2m3 0h2m-4 1h2m-8 1h2m-4 1h2M0 19h1m2 0h2m11 0h2m10 0h1M1 20h2m2 0h2m19 0h2M7 21h2m8 0h1m6 0h2M9 22h2m7 0h2m2 0h2m-13 1h2m7 0h2m-9 1h2m4 0h1m-5 1h2m2 0h1m-3 1h2" /></svg>;
const Modemui702_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M9 3h1M7 4h2m1 0h2M5 5h2m5 0h2M1 6h1m1 0h2m3 0h2m4 0h2M0 7h1m1 0h2m2 0h2m2 0h2M0 8h1m1 0h1m1 0h2m2 0h2m2 0h1M0 9h1m5 0h2m2 0h2m-4 1h2m-1 1h1" /><path stroke="#0f0" d="M9 4h1M7 5h1m2 0h2M5 6h1m4 0h2M4 7h2m2 0h2M6 8h2" /><path stroke="red" d="M8 5h1M6 6h1" /><path stroke="#ff0" d="M9 5h1M7 6h1" /><path stroke="green" d="M12 6h2m-2 1h2m-4 1h2M8 9h2" /><path stroke="#fff" d="M1 7h1M1 8h1m1 0h1M1 9h1m3 0h1m1 1h1" /><path stroke="#000" d="M14 7h2m-3 1h1M2 9h1m11 0h1M1 10h1m1 0h2m7 0h2m-9 1h2m3 0h2m-5 1h3" /><path stroke="silver" d="M3 9h2m0 1h2m0 1h2" /><path stroke="olive" d="M12 9h2m-4 1h2" /></svg>;

export const modemui702Data = {
  '32x32_4': Modemui702_32x32_4,
  '16x16_4': Modemui702_16x16_4
};

export interface Modemui702Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Modemui702Component = ({
  variant = '32x32_4',
  ...rest
}: Modemui702Props) => {
  const Svg = modemui702Data[variant];

  return <Svg {...rest} />;
};

export const Modemui702 = React.memo(Modemui702Component);
Modemui702.displayName = 'Modemui702';
