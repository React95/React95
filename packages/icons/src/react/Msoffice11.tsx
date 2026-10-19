import React from 'react';
import type { SVGProps } from "react";

const Msoffice11_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="silver" d="M0 0h32M0 1h1m30 0h1M0 2h1m1 0h28m1 0h1M0 3h1m1 0h28m1 0h1M0 4h1m1 0h28m1 0h1M0 5h1m1 0h28m1 0h1M0 6h1m1 0h28m1 0h1M0 7h1m1 0h28m1 0h1M0 8h1m1 0h28m1 0h1M0 9h1m1 0h28m1 0h1M0 10h1m1 0h28m1 0h1M0 11h1m1 0h28m1 0h1M0 12h1m1 0h4m20 0h4m1 0h1M0 13h1m1 0h4m20 0h4m1 0h1M0 14h1m1 0h4m22 0h2m1 0h1M0 15h1m1 0h4m22 0h2m1 0h1M0 16h1m1 0h4m22 0h2m1 0h1M0 17h1m1 0h5m21 0h2m1 0h1M0 18h1m1 0h5m21 0h2m1 0h1M0 19h1m1 0h28m1 0h1M0 20h1m1 0h28m1 0h1M0 21h1m1 0h28m1 0h1M0 22h1m1 0h28m1 0h1M0 23h1m1 0h28m1 0h1M0 24h1m1 0h28m1 0h1M0 25h1m1 0h28m1 0h1M0 26h1m1 0h28m1 0h1M0 27h1m1 0h28m1 0h1M0 28h1m1 0h28m1 0h1M0 29h1m1 0h28m1 0h1M0 30h1m30 0h1M0 31h32" /><path stroke="#000" d="M1 1h30M1 2h1m28 0h1M1 3h1m28 0h1M1 4h1m28 0h1M1 5h1m28 0h1M1 6h1m28 0h1M1 7h1m28 0h1M1 8h1m28 0h1M1 9h1m28 0h1M1 10h1m28 0h1M1 11h1m28 0h1M1 12h1m4 0h20m4 0h1M1 13h1m4 0h1m18 0h1m4 0h1M1 14h1m4 0h1m18 0h1m4 0h1M1 15h1m4 0h1m18 0h1m4 0h1M1 16h1m4 0h20m4 0h1M1 17h1m28 0h1M1 18h1m28 0h1M1 19h1m28 0h1M1 20h1m28 0h1M1 21h1m28 0h1M1 22h1m28 0h1M1 23h1m28 0h1M1 24h1m28 0h1M1 25h1m28 0h1M1 26h1m28 0h1M1 27h1m28 0h1M1 28h1m28 0h1M1 29h1m28 0h1M1 30h30" /><path stroke="#fff" d="M7 13h18M7 14h18M7 15h18" /><path stroke="gray" d="M26 14h2m-2 1h2m-2 1h2M7 17h21M7 18h21" /></svg>;
const Msoffice11_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="silver" d="M0 0h16M0 1h1m14 0h1M0 2h1m1 0h12m1 0h1M0 3h1m1 0h12m1 0h1M0 4h1m1 0h12m1 0h1M0 5h1m1 0h12m1 0h1M0 6h1m1 0h2m7 0h3m1 0h1M0 7h1m1 0h2m8 0h2m1 0h1M0 8h1m1 0h2m8 0h2m1 0h1M0 9h1m1 0h3m7 0h2m1 0h1M0 10h1m1 0h12m1 0h1M0 11h1m1 0h12m1 0h1M0 12h1m1 0h12m1 0h1M0 13h1m1 0h12m1 0h1M0 14h1m14 0h1M0 15h16" /><path stroke="#000" d="M1 1h14M1 2h1m12 0h1M1 3h1m12 0h1M1 4h1m12 0h1M1 5h1m12 0h1M1 6h1m2 0h7m3 0h1M1 7h1m2 0h1m5 0h1m3 0h1M1 8h1m2 0h7m3 0h1M1 9h1m12 0h1M1 10h1m12 0h1M1 11h1m12 0h1M1 12h1m12 0h1M1 13h1m12 0h1M1 14h14" /><path stroke="#fff" d="M5 7h5" /><path stroke="gray" d="M11 7h1m-1 1h1M5 9h7" /></svg>;

export const msoffice11Data = {
  '32x32_4': Msoffice11_32x32_4,
  '16x16_4': Msoffice11_16x16_4
};

export interface Msoffice11Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Msoffice11Component = ({
  variant = '32x32_4',
  ...rest
}: Msoffice11Props) => {
  const Svg = msoffice11Data[variant];

  return <Svg {...rest} />;
};

export const Msoffice11 = React.memo(Msoffice11Component);
Msoffice11.displayName = 'Msoffice11';
