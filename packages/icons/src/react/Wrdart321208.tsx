import React from 'react';
import type { SVGProps } from "react";

const Wrdart321208_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h32M0 6h32M0 7h32M0 8h32M0 9h32M0 10h32M0 11h32M0 12h32M0 13h32M0 14h32M0 15h32M0 16h32M0 17h32M0 18h1m3 0h24m3 0h1M0 19h1m3 0h24m3 0h1M0 20h2m3 0h22m3 0h2M0 21h2m3 0h22m3 0h2M0 22h2m4 0h20m4 0h2M0 23h3m3 0h20m3 0h3M0 24h4m3 0h18m3 0h4M0 25h4m4 0h16m4 0h4M0 26h5m5 0h12m5 0h5M0 27h6m6 0h8m6 0h6M0 28h8m16 0h8M0 29h9m14 0h9M0 30h12m8 0h12M0 31h32" /><path stroke="#000" d="M1 18h3m24 0h3M1 19h3m24 0h3M2 20h3m22 0h3M2 21h3m22 0h3M2 22h4m20 0h4M3 23h3m20 0h3M4 24h3m18 0h3M4 25h4m16 0h4M5 26h5m12 0h5M6 27h6m8 0h6M8 28h16M9 29h14m-11 1h8" /></svg>;

export const wrdart321208Data = {
  '32x32_4': Wrdart321208_32x32_4
};

export interface Wrdart321208Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321208Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321208Props) => {
  const Svg = wrdart321208Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321208 = React.memo(Wrdart321208Component);
Wrdart321208.displayName = 'Wrdart321208';
