import React from 'react';
import type { SVGProps } from "react";

const Binder1267_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M3 2h18M3 3h1m16 0h2M3 4h1m16 0h1m1 0h1M3 5h1m16 0h1m2 0h1M3 6h1m16 0h1m3 0h1M3 7h1m16 0h1m4 0h1M3 8h1m16 0h1m5 0h1M3 9h1m3 0h21M3 10h1m23 0h1M3 11h1m3 0h16m4 0h1M3 12h1m23 0h1M3 13h1m3 0h16m4 0h1M3 14h1m23 0h1M3 15h1m3 0h16m4 0h1M3 16h1m23 0h1M3 17h1m3 0h16m4 0h1M3 18h1m23 0h1M3 19h1m3 0h16m4 0h1M3 20h1m23 0h1M3 21h1m3 0h16m4 0h1M3 22h1m23 0h1M3 23h1m3 0h16m4 0h1M3 24h1m23 0h1M3 25h1m3 0h16m4 0h1M3 26h1m23 0h1M3 27h1m23 0h1M3 28h1m23 0h1M3 29h1m23 0h1M3 30h1m23 0h1M3 31h25" /><path stroke="#fff" d="M4 3h16M4 4h16m1 0h1M4 5h16m1 0h2M4 6h16m1 0h3M4 7h16m1 0h4M4 8h16m1 0h5M4 9h3m-3 1h23M4 11h3m16 0h4M4 12h23M4 13h3m16 0h4M4 14h23M4 15h3m16 0h4M4 16h23M4 17h3m16 0h4M4 18h23M4 19h3m16 0h4M4 20h23M4 21h3m16 0h4M4 22h23M4 23h3m16 0h4M4 24h23M4 25h3m16 0h4M4 26h23M4 27h23M4 28h23M4 29h23M4 30h23" /></svg>;
const Binder1267_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M3 2h18M3 3h1m16 0h1M3 4h1m16 0h2M3 5h1m16 0h1m1 0h1M3 6h1m16 0h1m2 0h1M3 7h1m16 0h1m3 0h1M3 8h1m16 0h1m4 0h1M3 9h1m16 0h1M3 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M4 3h16M4 4h16M4 5h16M4 6h16m1 0h1M4 7h16m1 0h2M4 8h16m1 0h3M4 9h3m-3 1h22M4 11h3m16 0h3M4 12h22M4 13h3m16 0h3M4 14h22M4 15h3m16 0h3M4 16h22M4 17h3m16 0h3M4 18h22M4 19h3m16 0h3M4 20h22M4 21h3m16 0h3M4 22h22M4 23h3m16 0h3M4 24h22M4 25h3m16 0h3M4 26h22M4 27h22M4 28h22M4 29h22" /><path stroke="#000" d="M21 3h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m-6 1h7m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M3 31h25" /><path stroke="silver" d="M21 5h1m0 1h1m0 1h1m0 1h1M7 9h13m6 1h1M7 11h16m3 0h1m-1 1h1M7 13h16m3 0h1m-1 1h1M7 15h16m3 0h1m-1 1h1M7 17h16m3 0h1m-1 1h1M7 19h16m3 0h1m-1 1h1M7 21h16m3 0h1m-1 1h1M7 23h16m3 0h1m-1 1h1M7 25h16m3 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M4 30h23" /></svg>;

export const binder1267Data = {
  '32x32_1': Binder1267_32x32_1,
  '32x32_4': Binder1267_32x32_4
};

export interface Binder1267Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_1' | '32x32_4';
}

const Binder1267Component = ({
  variant = '32x32_1',
  ...rest
}: Binder1267Props) => {
  const Svg = binder1267Data[variant];

  return <Svg {...rest} />;
};

export const Binder1267 = React.memo(Binder1267Component);
Binder1267.displayName = 'Binder1267';
