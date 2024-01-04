import React from 'react';
import type { SVGProps } from "react";

const BatExec_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M0 2h31M0 3h1m29 0h1M0 4h1m29 0h1M0 5h1m29 0h1M0 6h1m29 0h1M0 7h1m29 0h1M0 8h1m29 0h1M0 9h1m1 0h27m1 0h1M0 10h1m1 0h1m27 0h1M0 11h1m1 0h1m27 0h1M0 12h1m1 0h1m27 0h1M0 13h1m1 0h1m27 0h1M0 14h1m1 0h1m27 0h1M0 15h1m1 0h1m27 0h1M0 16h1m1 0h1m27 0h1M0 17h1m1 0h1m27 0h1M0 18h1m1 0h1m27 0h1M0 19h1m1 0h1m27 0h1M0 20h1m1 0h1m27 0h1M0 21h1m1 0h1m27 0h1M0 22h1m1 0h1m27 0h1M0 23h1m1 0h1m27 0h1M0 24h1m1 0h1m27 0h1M0 25h1m1 0h1m27 0h1M0 26h1m1 0h1m27 0h1M0 27h1m1 0h1m27 0h1M0 28h1m29 0h1M0 29h31" /><path stroke="#000" d="M31 2h1m-1 1h1m-1 1h1m-9 1h1m2 0h1m2 0h1m1 0h1m-9 1h1m2 0h1m2 0h1m1 0h1M21 7h9m1 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M0 30h32" /><path stroke="silver" d="M1 3h29M1 4h1M1 5h1m19 0h2m1 0h2m1 0h2M1 6h1m19 0h2m1 0h2m1 0h2M1 7h1M1 8h29M1 9h1m27 0h1M1 10h1m27 0h1M1 11h1m27 0h1M1 12h1m27 0h1M1 13h1m27 0h1M1 14h1m27 0h1M1 15h1m27 0h1M1 16h1m27 0h1M1 17h1m27 0h1M1 18h1m27 0h1M1 19h1m27 0h1M1 20h1m27 0h1M1 21h1m27 0h1M1 22h1m27 0h1M1 23h1m27 0h1M1 24h1m27 0h1M1 25h1m27 0h1M1 26h1m27 0h1M1 27h1m27 0h1M1 28h29" /><path stroke="#0000bf" d="M2 4h28M2 5h19M2 6h19M2 7h19" /><path stroke="#fff" d="M3 10h26M3 11h26M3 12h26M3 13h26M3 14h26M3 15h26M3 16h26M3 17h26M3 18h26M3 19h26M3 20h26M3 21h26M3 22h26M3 23h26M3 24h26M3 25h26M3 26h26M3 27h26" /></svg>;
const BatExec_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M0 1h16M0 2h1m13 0h1M0 3h1m13 0h1M0 4h1m13 0h1M0 5h1m1 0h13M0 6h1m13 0h1M0 7h1m13 0h1M0 8h1m13 0h1M0 9h1m13 0h1M0 10h1m13 0h1M0 11h1m13 0h1M0 12h1m13 0h1M0 13h15" /><path stroke="silver" d="M1 2h13M1 3h1M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M15 2h1m-1 1h1M9 4h1m1 0h1m1 0h1m1 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M0 14h16" /><path stroke="#0000bf" d="M2 3h12M2 4h6" /><path stroke="#fff" d="M8 4h1m1 0h1m1 0h1M2 6h12M2 7h12M2 8h12M2 9h12M2 10h12M2 11h12M2 12h12" /></svg>;

export const batExecData = {
  '32x32_4': BatExec_32x32_4,
  '16x16_4': BatExec_16x16_4
};

export interface BatExecProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const BatExec: React.FC<BatExecProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = batExecData[variant];

  return <Svg {...rest} />;
};
