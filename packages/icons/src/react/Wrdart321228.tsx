import React from 'react';
import type { SVGProps } from "react";

const Wrdart321228_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h32M0 6h10m11 0h11M0 7h10m11 0h11M0 8h9m13 0h10M0 9h9m13 0h10M0 10h8m15 0h9M0 11h8m15 0h9M0 12h8m15 0h9M0 13h7m17 0h8M0 14h7m17 0h8M0 15h6m19 0h7M0 16h6m19 0h7M0 17h6m19 0h7M0 18h5m21 0h6M0 19h5m21 0h6M0 20h4m23 0h5M0 21h4m23 0h5M0 22h32M0 23h32M0 24h32M0 25h32M0 26h32M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M10 6h11M10 7h11M9 8h13M9 9h13M8 10h15M8 11h15M8 12h15M7 13h17M7 14h17M6 15h19M6 16h19M6 17h19M5 18h21M5 19h21M4 20h23M4 21h23" /></svg>;

export const wrdart321228Data = {
  '32x32_4': Wrdart321228_32x32_4
};

export interface Wrdart321228Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321228Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321228Props) => {
  const Svg = wrdart321228Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321228 = React.memo(Wrdart321228Component);
Wrdart321228.displayName = 'Wrdart321228';
