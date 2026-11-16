import React from 'react';
import type { SVGProps } from "react";

const Moricons43_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M6 3h20M5 4h1m20 0h1M5 5h1m20 0h1M5 6h1m20 0h1M5 7h1m20 0h1M5 8h1m20 0h1M5 9h1m20 0h1M5 10h1m20 0h1M5 11h1m20 0h1M5 12h1m20 0h1M5 13h1m20 0h1M5 14h1m20 0h1M5 15h1m20 0h1M5 16h1m20 0h1M5 17h1m20 0h1M5 18h1m20 0h1M5 19h1m20 0h1M5 20h1m20 0h1M5 21h1m20 0h1M5 22h1m20 0h1M5 23h1m20 0h1M5 24h1m20 0h1M5 25h1m20 0h1M5 26h1m20 0h1M5 27h1m20 0h1M6 28h20" /><path stroke="silver" d="M6 4h20M6 5h20M6 6h2m16 0h2M6 7h20M6 8h20M6 9h20M6 10h2m16 0h2M6 11h20M6 12h20M6 13h20M6 14h2m16 0h2M6 15h20M6 16h20M6 17h2m16 0h2M6 18h20M6 19h20M6 20h20M6 21h2m16 0h2M6 22h20M6 23h20M6 24h20M6 25h2m16 0h2M6 26h20M6 27h20" /><path stroke="red" d="M8 6h16M8 10h16M8 14h16M8 17h16M8 21h16M8 25h16" /></svg>;

export const moricons43Data = {
  '32x32_4': Moricons43_32x32_4
};

export interface Moricons43Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons43Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons43Props) => {
  const Svg = moricons43Data[variant];

  return <Svg {...rest} />;
};

export const Moricons43 = React.memo(Moricons43Component);
Moricons43.displayName = 'Moricons43';
