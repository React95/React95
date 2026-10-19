import React from 'react';
import type { SVGProps } from "react";

const Wrdart321211_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h10m12 0h10M0 4h9m14 0h9M0 5h8m16 0h8M0 6h7m18 0h7M0 7h6m20 0h6M0 8h5m22 0h5M0 9h4m24 0h4M0 10h3m26 0h3M0 11h3m26 0h3M0 12h3m26 0h3M0 13h3m26 0h3M0 14h3m26 0h3M0 15h3m26 0h3M0 16h3m26 0h3M0 17h3m26 0h3M0 18h3m26 0h3M0 19h3m26 0h3M0 20h3m26 0h3M0 21h3m26 0h3M0 22h4m24 0h4M0 23h5m22 0h5M0 24h6m20 0h6M0 25h7m18 0h7M0 26h8m16 0h8M0 27h9m14 0h9M0 28h10m12 0h10M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M10 3h12M9 4h14M8 5h16M7 6h18M6 7h20M5 8h22M4 9h24M3 10h26M3 11h26M3 12h26M3 13h26M3 14h26M3 15h26M3 16h26M3 17h26M3 18h26M3 19h26M3 20h26M3 21h26M4 22h24M5 23h22M6 24h20M7 25h18M8 26h16M9 27h14m-13 1h12" /></svg>;

export const wrdart321211Data = {
  '32x32_4': Wrdart321211_32x32_4
};

export interface Wrdart321211Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321211Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321211Props) => {
  const Svg = wrdart321211Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321211 = React.memo(Wrdart321211Component);
Wrdart321211.displayName = 'Wrdart321211';
