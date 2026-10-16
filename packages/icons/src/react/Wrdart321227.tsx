import React from 'react';
import type { SVGProps } from "react";

const Wrdart321227_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h26m3 0h3M0 6h22m7 0h3M0 7h18m11 0h3M0 8h14m15 0h3M0 9h10m19 0h3M0 10h6m23 0h3M0 11h4m25 0h3M0 12h4m25 0h3M0 13h4m25 0h3M0 14h4m25 0h3M0 15h4m25 0h3M0 16h4m25 0h3M0 17h4m25 0h3M0 18h4m25 0h3M0 19h4m25 0h3M0 20h6m23 0h3M0 21h10m19 0h3M0 22h13m16 0h3M0 23h17m12 0h3M0 24h20m9 0h3M0 25h23m6 0h3M0 26h27m2 0h3M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M26 5h3m-7 1h7M18 7h11M14 8h15M10 9h19M6 10h23M4 11h25M4 12h25M4 13h25M4 14h25M4 15h25M4 16h25M4 17h25M4 18h25M4 19h25M6 20h23m-19 1h19m-16 1h16m-12 1h12m-9 1h9m-6 1h6m-2 1h2" /></svg>;

export const wrdart321227Data = {
  '32x32_4': Wrdart321227_32x32_4
};

export interface Wrdart321227Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321227Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321227Props) => {
  const Svg = wrdart321227Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321227 = React.memo(Wrdart321227Component);
Wrdart321227.displayName = 'Wrdart321227';
