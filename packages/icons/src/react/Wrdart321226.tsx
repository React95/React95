import React from 'react';
import type { SVGProps } from "react";

const Wrdart321226_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h3m3 0h26M0 6h3m7 0h22M0 7h3m11 0h18M0 8h3m15 0h14M0 9h3m19 0h10M0 10h3m23 0h6M0 11h3m25 0h4M0 12h3m25 0h4M0 13h3m25 0h4M0 14h3m25 0h4M0 15h3m25 0h4M0 16h3m25 0h4M0 17h3m25 0h4M0 18h3m25 0h4M0 19h3m25 0h4M0 20h3m23 0h6M0 21h3m19 0h10M0 22h3m16 0h13M0 23h3m12 0h17M0 24h3m9 0h20M0 25h3m6 0h23M0 26h3m2 0h27M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M3 5h3M3 6h7M3 7h11M3 8h15M3 9h19M3 10h23M3 11h25M3 12h25M3 13h25M3 14h25M3 15h25M3 16h25M3 17h25M3 18h25M3 19h25M3 20h23M3 21h19M3 22h16M3 23h12M3 24h9m-9 1h6m-6 1h2" /></svg>;

export const wrdart321226Data = {
  '32x32_4': Wrdart321226_32x32_4
};

export interface Wrdart321226Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321226Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321226Props) => {
  const Svg = wrdart321226Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321226 = React.memo(Wrdart321226Component);
Wrdart321226.displayName = 'Wrdart321226';
