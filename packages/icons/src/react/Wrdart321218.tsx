import React from 'react';
import type { SVGProps } from "react";

const Wrdart321218_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h32M0 6h32M0 7h32M0 8h7m5 0h20M0 9h4m11 0h12m3 0h2M0 10h2m14 0h9m5 0h2M0 11h2m17 0h4m7 0h2M0 12h2m28 0h2M0 13h2m28 0h2M0 14h2m28 0h2M0 15h2m28 0h2M0 16h2m28 0h2M0 17h2m28 0h2M0 18h2m28 0h2M0 19h2m28 0h2M0 20h2m5 0h4m19 0h2M0 21h2m3 0h9m14 0h4M0 22h15m10 0h7M0 23h18m5 0h9M0 24h32M0 25h32M0 26h32M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M7 8h5M4 9h11m12 0h3M2 10h14m9 0h5M2 11h17m4 0h7M2 12h28M2 13h28M2 14h28M2 15h28M2 16h28M2 17h28M2 18h28M2 19h28M2 20h5m4 0h19M2 21h3m9 0h14m-13 1h10m-7 1h5" /></svg>;

export const wrdart321218Data = {
  '32x32_4': Wrdart321218_32x32_4
};

export interface Wrdart321218Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321218Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321218Props) => {
  const Svg = wrdart321218Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321218 = React.memo(Wrdart321218Component);
Wrdart321218.displayName = 'Wrdart321218';
