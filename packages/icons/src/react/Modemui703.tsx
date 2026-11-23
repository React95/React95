import React from 'react';
import type { SVGProps } from "react";

const Modemui703_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M18 6h3m-5 1h2m3 0h2m-9 1h2m3 0h2m2 0h2M12 9h2m7 0h2m2 0h2m-17 1h2m11 0h2m2 0h2M8 11h2m15 0h2m2 0h2M6 12h2m19 0h2M4 13h2m19 0h2m2 0h2M2 14h2m19 0h2m2 0h2M0 15h2m19 0h2m2 0h2M0 16h1m18 0h2m2 0h2M1 17h2m14 0h2m2 0h2M3 18h2m10 0h2m2 0h2M5 19h2m10 0h2M7 20h2m6 0h2m-8 1h2m2 0h2m-4 1h2" /><path stroke="silver" d="M18 7h3m-5 1h1m4 0h2m-9 1h1m2 0h2m4 0h2m-13 1h1m2 0h3m7 0h2m-17 1h1m2 0h4m10 0h2M8 12h1m2 0h5m13 0h2M6 13h1m2 0h16m2 0h2M4 14h1m2 0h16m2 0h2M2 15h1m2 0h2m2 0h12m2 0h2M3 16h6m2 0h8m2 0h2M5 17h6m2 0h4m2 0h2M7 18h6m4 0h2M9 19h8m-6 1h4" /><path stroke="#fff" d="M17 8h2m-4 1h2m-4 1h2m-4 1h2m-4 1h2m-4 1h2m-4 1h2m-4 1h2m2 0h2m-8 1h2m6 0h2m-8 1h2m6 0h2m-8 1h2m6 0h2m-8 1h2m0 1h2m0 1h2" /><path stroke="green" d="M19 9h2m-3 1h5m-6 1h8m-9 1h11" /><path stroke="#000" d="M31 12h1m-1 1h1m-3 1h2m-4 1h2m-4 1h2M0 17h1m22 0h2M1 18h2m18 0h2M3 19h2m14 0h2M5 20h2m10 0h2M7 21h2m6 0h2m-8 1h2m2 0h2m-4 1h2" /></svg>;
const Modemui703_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M9 3h3M7 4h2m3 0h2M5 5h2m3 0h2m2 0h2M3 6h2m7 0h2m1 0h1M1 7h2m10 0h2M0 8h1m10 0h2M1 9h2m6 0h2m-8 1h2m2 0h2m-4 1h2" /><path stroke="silver" d="M9 4h3M7 5h3m2 0h2M5 6h5m4 0h1M3 7h1m2 0h3M3 8h3m2 0h3M5 9h3" /><path stroke="green" d="M10 6h2M9 7h4" /><path stroke="#fff" d="M4 7h2M1 8h2m3 0h2M3 9h2m3 0h1m-4 1h2" /><path stroke="#000" d="M15 7h1m-3 1h2M0 9h1m10 0h2M1 10h2m6 0h2m-8 1h2m2 0h2m-4 1h2" /></svg>;

export const modemui703Data = {
  '32x32_4': Modemui703_32x32_4,
  '16x16_4': Modemui703_16x16_4
};

export interface Modemui703Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Modemui703Component = ({
  variant = '32x32_4',
  ...rest
}: Modemui703Props) => {
  const Svg = modemui703Data[variant];

  return <Svg {...rest} />;
};

export const Modemui703 = React.memo(Modemui703Component);
Modemui703.displayName = 'Modemui703';
