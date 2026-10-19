import React from 'react';
import type { SVGProps } from "react";

const Wrdart321234_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h12m8 0h12M0 2h9m14 0h9M0 3h8m16 0h8M0 4h6m20 0h6M0 5h5m22 0h5M0 6h4m8 0h8m8 0h4M0 7h4m6 0h12m6 0h4M0 8h3m6 0h14m6 0h3M0 9h2m6 0h16m6 0h2M0 10h2m5 0h18m5 0h2M0 11h2m5 0h18m5 0h2M0 12h1m5 0h20m5 0h1M0 13h1m5 0h20m5 0h1M0 14h1m5 0h20m5 0h1M0 15h1m5 0h20m5 0h1M0 16h1m5 0h20m5 0h1M0 17h1m5 0h20m5 0h1M0 18h1m5 0h20m5 0h1M0 19h1m5 0h20m5 0h1M0 20h2m5 0h18m5 0h2M0 21h2m5 0h18m5 0h2M0 22h2m6 0h16m6 0h2M0 23h3m6 0h14m6 0h3M0 24h4m6 0h12m6 0h4M0 25h4m8 0h8m8 0h4M0 26h5m22 0h5M0 27h6m20 0h6M0 28h8m16 0h8M0 29h9m14 0h9M0 30h12m8 0h12M0 31h32" /><path stroke="#000" d="M12 1h8M9 2h14M8 3h16M6 4h20M5 5h22M4 6h8m8 0h8M4 7h6m12 0h6M3 8h6m14 0h6M2 9h6m16 0h6M2 10h5m18 0h5M2 11h5m18 0h5M1 12h5m20 0h5M1 13h5m20 0h5M1 14h5m20 0h5M1 15h5m20 0h5M1 16h5m20 0h5M1 17h5m20 0h5M1 18h5m20 0h5M1 19h5m20 0h5M2 20h5m18 0h5M2 21h5m18 0h5M2 22h6m16 0h6M3 23h6m14 0h6M4 24h6m12 0h6M4 25h8m8 0h8M5 26h22M6 27h20M8 28h16M9 29h14m-11 1h8" /></svg>;

export const wrdart321234Data = {
  '32x32_4': Wrdart321234_32x32_4
};

export interface Wrdart321234Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321234Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321234Props) => {
  const Svg = wrdart321234Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321234 = React.memo(Wrdart321234Component);
Wrdart321234.displayName = 'Wrdart321234';
