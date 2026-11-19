import React from 'react';
import type { SVGProps } from "react";

const Inetcpl4609_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="silver" d="M0 0h32M0 1h32m-2 1h2m-2 1h2M2 4h26m2 0h2M2 5h26m2 0h2M2 6h18m4 0h4m2 0h2M2 7h18m4 0h4m2 0h2M2 8h16m8 0h2m2 0h2M2 9h16m8 0h2m2 0h2M2 10h16m8 0h2m2 0h2M2 11h16m8 0h2m2 0h2M2 12h18m4 0h4m2 0h2M2 13h18m4 0h4m2 0h2M2 14h26m2 0h2M2 15h26m2 0h2M2 16h8m4 0h14m2 0h2M2 17h8m4 0h14m2 0h2M2 18h6m8 0h2m4 0h6m2 0h2M2 19h6m8 0h2m4 0h6m2 0h2M2 20h4m8 0h2m8 0h4m2 0h2M2 21h4m8 0h2m8 0h4m2 0h2M2 22h2m4 0h2m2 0h6m2 0h4m2 0h2m2 0h2M2 23h2m4 0h2m2 0h6m2 0h4m2 0h2m2 0h2M4 24h4m2 0h4m2 0h4m2 0h4m4 0h2M4 25h4m2 0h4m2 0h4m2 0h4m4 0h2M2 26h8m2 0h4m2 0h4m2 0h4m2 0h2M2 27h8m2 0h4m2 0h4m2 0h4m2 0h2m-2 1h2m-2 1h2M0 30h32M0 31h32" /><path stroke="#000" d="M0 2h30M0 3h30M0 4h2m26 0h2M0 5h2m26 0h2M0 6h2m18 0h4m4 0h2M0 7h2m18 0h4m4 0h2M0 8h2m16 0h2m4 0h2m2 0h2M0 9h2m16 0h2m4 0h2m2 0h2M0 10h2m16 0h2m4 0h2m2 0h2M0 11h2m16 0h2m4 0h2m2 0h2M0 12h2m18 0h4m4 0h2M0 13h2m18 0h4m4 0h2M0 14h2m26 0h2M0 15h2m26 0h2M0 16h2m8 0h4m14 0h2M0 17h2m8 0h4m14 0h2M0 18h2m6 0h2m4 0h2m2 0h4m6 0h2M0 19h2m6 0h2m4 0h2m2 0h4m6 0h2M0 20h2m4 0h2m4 0h2m2 0h2m4 0h2m4 0h2M0 21h2m4 0h2m4 0h2m2 0h2m4 0h2m4 0h2M0 22h2m2 0h2m12 0h2m4 0h2m2 0h2M0 23h2m2 0h2m12 0h2m4 0h2m2 0h2M0 24h4m4 0h2m4 0h2m4 0h2m4 0h4M0 25h4m4 0h2m4 0h2m4 0h2m4 0h4M0 26h2m8 0h2m4 0h2m4 0h2m4 0h2M0 27h2m8 0h2m4 0h2m4 0h2m4 0h2M0 28h30M0 29h30" /><path stroke="#ff0" d="M20 8h4m-4 1h4m-4 1h4m-4 1h4" /></svg>;

export const inetcpl4609Data = {
  '32x32_4': Inetcpl4609_32x32_4
};

export interface Inetcpl4609Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Inetcpl4609Component = ({
  variant = '32x32_4',
  ...rest
}: Inetcpl4609Props) => {
  const Svg = inetcpl4609Data[variant];

  return <Svg {...rest} />;
};

export const Inetcpl4609 = React.memo(Inetcpl4609Component);
Inetcpl4609.displayName = 'Inetcpl4609';
