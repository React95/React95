import React from 'react';
import type { SVGProps } from "react";

const Access229_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M0 0h24M0 1h1m22 0h1M0 2h1m22 0h1M0 3h1m22 0h1M0 4h1m22 0h1M0 5h1m22 0h1M0 6h1m22 0h1M0 7h1m1 0h20m1 0h1M0 8h1m1 0h1m20 0h1M0 9h1m1 0h1m20 0h1M0 10h1m1 0h1m4 0h24M0 11h1m1 0h1m4 0h1m22 0h1M0 12h1m1 0h1m4 0h1m22 0h1M0 13h1m1 0h1m4 0h1m22 0h1M0 14h1m1 0h1m4 0h1m22 0h1M0 15h1m1 0h1m4 0h1m22 0h1M0 16h1m1 0h1m4 0h1m22 0h1M0 17h1m1 0h1m4 0h1m1 0h20m1 0h1M0 18h1m1 0h1m4 0h1m1 0h1m20 0h1M0 19h1m1 0h1m4 0h1m1 0h1m20 0h1M0 20h1m6 0h1m1 0h1m20 0h1M0 21h8m1 0h1m20 0h1M7 22h1m1 0h1m20 0h1M7 23h1m1 0h1m20 0h1M7 24h1m1 0h1m20 0h1M7 25h1m1 0h1m20 0h1M7 26h1m1 0h1m20 0h1M7 27h1m1 0h1m20 0h1M7 28h1m1 0h1m20 0h1M7 29h1m22 0h1M7 30h24" /><path stroke="#000" d="M24 0h1m-1 1h1m-1 1h1m-9 1h1m2 0h1m2 0h1m1 0h1m-9 1h1m2 0h1m2 0h1m1 0h1M14 5h9m1 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m6 1h1m-1 1h1m-1 1h1m-9 1h1m2 0h1m2 0h1m1 0h1m-9 1h1m2 0h1m2 0h1m1 0h1m-11 1h9m1 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M0 22h7m24 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M7 31h25" /><path stroke="silver" d="M1 1h22M1 2h1M1 3h1m12 0h2m1 0h2m1 0h2M1 4h1m12 0h2m1 0h2m1 0h2M1 5h1M1 6h22M1 7h1m20 0h1M1 8h1m20 0h1M1 9h1m20 0h1M1 10h1m-1 1h1m6 0h22M1 12h1m6 0h1m-8 1h1m6 0h1m12 0h2m1 0h2m1 0h2M1 14h1m6 0h1m12 0h2m1 0h2m1 0h2M1 15h1m6 0h1m-8 1h1m6 0h22M1 17h1m6 0h1m20 0h1M1 18h1m6 0h1m20 0h1M1 19h1m6 0h1m20 0h1M1 20h6m1 0h1m20 0h1M8 21h1m20 0h1M8 22h1m20 0h1M8 23h1m20 0h1M8 24h1m20 0h1M8 25h1m20 0h1M8 26h1m20 0h1M8 27h1m20 0h1M8 28h1m20 0h1M8 29h22" /><path stroke="navy" d="M2 2h21M2 3h12M2 4h12M2 5h12m-5 7h1m4 0h16M9 13h1m4 0h7M9 14h1m4 0h7M9 15h1m4 0h7" /><path stroke="#fff" d="M3 8h19M3 9h19M3 10h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m3 0h19M3 19h4m3 0h19m-19 1h19m-19 1h19m-19 1h19m-19 1h19m-19 1h19m-19 1h19m-19 1h19m-19 1h19m-19 1h19" /><path stroke="red" d="M10 12h1" /><path stroke="maroon" d="M11 12h1m-2 1h2" /><path stroke="#ff0" d="M12 12h1" /><path stroke="olive" d="M13 12h1m-2 1h2" /><path stroke="#0ff" d="M10 14h1" /><path stroke="#00f" d="M11 14h1m-2 1h2" /><path stroke="#0f0" d="M12 14h1" /><path stroke="green" d="M13 14h1m-2 1h2" /></svg>;

export const access229Data = {
  '32x32_4': Access229_32x32_4
};

export interface Access229Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Access229: React.FC<Access229Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = access229Data[variant];

  return <Svg {...rest} />;
};
