import React from 'react';
import type { SVGProps } from "react";

const Wrdart321229_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h32M0 6h32M0 7h32M0 8h32M0 9h32M0 10h4m23 0h5M0 11h4m23 0h5M0 12h5m21 0h6M0 13h5m21 0h6M0 14h6m19 0h7M0 15h6m19 0h7M0 16h6m19 0h7M0 17h7m17 0h8M0 18h7m17 0h8M0 19h8m15 0h9M0 20h8m15 0h9M0 21h8m15 0h9M0 22h9m13 0h10M0 23h9m13 0h10M0 24h10m11 0h11M0 25h10m11 0h11M0 26h32M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M4 10h23M4 11h23M5 12h21M5 13h21M6 14h19M6 15h19M6 16h19M7 17h17M7 18h17M8 19h15M8 20h15M8 21h15M9 22h13M9 23h13m-12 1h11m-11 1h11" /></svg>;

export const wrdart321229Data = {
  '32x32_4': Wrdart321229_32x32_4
};

export interface Wrdart321229Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321229Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321229Props) => {
  const Svg = wrdart321229Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321229 = React.memo(Wrdart321229Component);
Wrdart321229.displayName = 'Wrdart321229';
