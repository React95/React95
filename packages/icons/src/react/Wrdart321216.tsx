import React from 'react';
import type { SVGProps } from "react";

const Wrdart321216_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h2m4 0h26M0 5h2m8 0h22M0 6h2m12 0h18M0 7h2m16 0h14M0 8h2m20 0h10M0 9h2m24 0h6M0 10h2m28 0h2M0 11h2m28 0h2M0 12h2m28 0h2M0 13h2m28 0h2M0 14h4m26 0h2M0 15h6m24 0h2M0 16h8m22 0h2M0 17h10m20 0h2M0 18h12m18 0h2M0 19h14m16 0h2M0 20h16m14 0h2M0 21h18m12 0h2M0 22h20m10 0h2M0 23h22m8 0h2M0 24h24m6 0h2M0 25h26m4 0h2M0 26h28m2 0h2M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M2 4h4M2 5h8M2 6h12M2 7h16M2 8h20M2 9h24M2 10h28M2 11h28M2 12h28M2 13h28M4 14h26M6 15h24M8 16h22m-20 1h20m-18 1h18m-16 1h16m-14 1h14m-12 1h12m-10 1h10m-8 1h8m-6 1h6m-4 1h4m-2 1h2" /></svg>;

export const wrdart321216Data = {
  '32x32_4': Wrdart321216_32x32_4
};

export interface Wrdart321216Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321216Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321216Props) => {
  const Svg = wrdart321216Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321216 = React.memo(Wrdart321216Component);
Wrdart321216.displayName = 'Wrdart321216';
