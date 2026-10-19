import React from 'react';
import type { SVGProps } from "react";

const Wrdart321217_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h26m4 0h2M0 5h22m8 0h2M0 6h18m12 0h2M0 7h14m16 0h2M0 8h10m20 0h2M0 9h6m24 0h2M0 10h2m28 0h2M0 11h2m28 0h2M0 12h2m28 0h2M0 13h2m28 0h2M0 14h2m26 0h4M0 15h2m24 0h6M0 16h2m22 0h8M0 17h2m20 0h10M0 18h2m18 0h12M0 19h2m16 0h14M0 20h2m14 0h16M0 21h2m12 0h18M0 22h2m10 0h20M0 23h2m8 0h22M0 24h2m6 0h24M0 25h2m4 0h26M0 26h2m2 0h28M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M26 4h4m-8 1h8M18 6h12M14 7h16M10 8h20M6 9h24M2 10h28M2 11h28M2 12h28M2 13h28M2 14h26M2 15h24M2 16h22M2 17h20M2 18h18M2 19h16M2 20h14M2 21h12M2 22h10M2 23h8m-8 1h6m-6 1h4m-4 1h2" /></svg>;

export const wrdart321217Data = {
  '32x32_4': Wrdart321217_32x32_4
};

export interface Wrdart321217Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321217Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321217Props) => {
  const Svg = wrdart321217Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321217 = React.memo(Wrdart321217Component);
Wrdart321217.displayName = 'Wrdart321217';
