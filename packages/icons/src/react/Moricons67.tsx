import React from 'react';
import type { SVGProps } from "react";

const Moricons67_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#00f" d="M14 1h1m-2 1h3m-3 1h3m-4 1h5m-5 1h6m-7 1h7m-8 1h9m-9 1h10M9 9h11M8 10h13M8 11h14M7 12h15M7 13h16M6 14h18M5 15h19M5 16h20M4 17h22M3 18h23M3 19h24M2 20h26M2 21h26M1 22h28M0 23h30M0 24h30" /><path stroke="gray" d="M16 3h2m-1 1h2m-1 1h2m-2 1h3m-2 1h2m-1 1h2m-2 1h3m-2 1h2m-1 1h2m-2 1h3m-2 1h2m-1 1h2m-2 1h3m-2 1h3m-2 1h2m-2 1h3m-2 1h3m-2 1h2m-2 1h3m-2 1h3m-2 1h2m-2 1h2M2 25h30M2 26h30" /></svg>;

export const moricons67Data = {
  '32x32_4': Moricons67_32x32_4
};

export interface Moricons67Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons67Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons67Props) => {
  const Svg = moricons67Data[variant];

  return <Svg {...rest} />;
};

export const Moricons67 = React.memo(Moricons67Component);
Moricons67.displayName = 'Moricons67';
