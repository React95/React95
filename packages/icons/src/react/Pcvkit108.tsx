import React from 'react';
import type { SVGProps } from "react";

const Pcvkit108_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M10 2h2m6 0h3M8 3h1m11 0h3m-3 1h5M5 5h1m16 0h4M4 6h1m21 0h1M4 7h2m10 0h4m7 0h1m-4 1h4M2 9h2m14 0h2m8 0h1M2 11h1m18 0h8m-5 1h6M1 13h1m1 0h16m10 0h1M4 14h13M1 15h1m20 0h8M1 16h1m17 0h11M7 17h8m14 0h1M1 18h1m2 0h14m11 0h1M2 20h15m11 1h1M4 22h11m12 1h1M6 26h19M7 27h17m-3 1h1" /><path stroke="#00f" d="M12 2h6M9 3h11M5 6h21m-6 1h7m-7 2h8M2 10h27M2 13h1m16 0h10M1 14h3m13 0h13M1 17h6m8 0h14M2 18h2m14 0h11m-12 2h12M2 21h26M3 22h1m11 0h13M4 24h23M5 25h21M9 28h12m-9 1h7" /><path stroke="silver" d="M7 4h1m7 0h5m-4 1h6M3 7h1m2 0h10m5 1h3M4 9h14M3 11h2m13 0h3M1 12h1m19 0h3m-4 3h2M2 16h2m13 0h2m2 3h8M3 23h24" /><path stroke="#fff" d="M8 4h7M6 5h10M3 8h18M5 11h13M2 12h19M2 15h18M4 16h13M2 19h19" /></svg>;

export const pcvkit108Data = {
  '32x32_4': Pcvkit108_32x32_4
};

export interface Pcvkit108Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Pcvkit108Component = ({
  variant = '32x32_4',
  ...rest
}: Pcvkit108Props) => {
  const Svg = pcvkit108Data[variant];

  return <Svg {...rest} />;
};

export const Pcvkit108 = React.memo(Pcvkit108Component);
Pcvkit108.displayName = 'Pcvkit108';
