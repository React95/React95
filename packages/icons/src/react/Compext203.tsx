import React from 'react';
import type { SVGProps } from "react";

const Compext203_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="red" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h2m1 0h29M0 5h32M0 6h32M0 7h32M0 8h32M0 9h32M0 10h32M0 11h32M0 12h32M0 13h32M0 14h32M0 15h32M0 16h32M0 17h32M0 18h32M0 19h32M0 20h32M0 21h32M0 22h32M0 23h32M0 24h32M0 25h32M0 26h32M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M2 4h1" /></svg>;
const Compext203_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M0 0h16M0 1h1M0 2h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="gray" d="M1 1h14M1 2h1m12 0h1M1 3h1m12 0h1M1 4h1m12 0h1M1 5h1m12 0h1M1 6h1m12 0h1M1 7h1m12 0h1M1 8h1m12 0h1M1 9h1m12 0h1M1 10h1m12 0h1M1 11h1m12 0h1M1 12h1m12 0h1M1 13h1m12 0h1M1 14h14" /><path stroke="silver" d="M15 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 15h15" /><path stroke="red" d="M2 2h12M2 3h12M2 4h12M2 5h12M2 6h12M2 7h12M2 8h12M2 9h12M2 10h12M2 11h12M2 12h12M2 13h12" /></svg>;

export const compext203Data = {
  '32x32_4': Compext203_32x32_4,
  '16x16_4': Compext203_16x16_4
};

export interface Compext203Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Compext203Component = ({
  variant = '32x32_4',
  ...rest
}: Compext203Props) => {
  const Svg = compext203Data[variant];

  return <Svg {...rest} />;
};

export const Compext203 = React.memo(Compext203Component);
Compext203.displayName = 'Compext203';
