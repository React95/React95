import React from 'react';
import type { SVGProps } from "react";

const Setupx119_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="olive" d="M16 5h13M15 6h1M2 7h4M2 8h1m3 0h3M5 9h1m3 0h3m-4 1h1m3 0h3m-4 1h1m3 0h1m-1 1h1" /><path stroke="#ff0" d="M16 6h13M3 8h3m0 1h3m0 1h3m0 1h3" /><path stroke="#000" d="M29 6h1M16 7h13M3 9h2m1 1h2m14 0h1M9 11h2m12 0h1m-12 1h3m9 0h1M9 13h1m14 0h1M9 14h1m14 0h1m-1 1h1m-2 1h2m-4 1h2m1 0h1m-7 1h3m3 0h1m-1 1h1m-1 1h1M7 21h1m16 0h1M7 22h1m16 0h1M8 23h1m14 0h1M9 24h2m10 0h2m-12 1h10" /><path stroke="gray" d="M12 9h9m0 1h1M8 11h1m7 0h5M7 12h1m1 0h2m10 0h2M7 13h2m14 0h1M7 14h1m2 0h1m10 0h2M7 15h1m3 0h10m2 0h1m-3 1h2m-4 1h2m2 5h1m-3 1h2m-4 1h2" /><path stroke="#fff" d="M15 10h6m0 1h2M8 12h1m14 0h1M8 14h1m14 0h1M9 15h2m10 0h2m-12 1h10M8 21h1m0 1h2m0 1h8" /><path stroke="silver" d="M11 12h1m4 0h5m-11 1h13m-12 1h10M8 15h1m0 1h2m0 1h8m4 4h1M8 22h1m12 0h2M9 23h2m8 0h2m-10 1h8" /><path stroke="maroon" d="M7 16h2m-2 1h1m1 0h2m12 0h1M7 18h1m3 0h7m3 0h3M7 19h1m10 0h6M7 20h1m10 0h6m-6 1h5m-5 1h3" /><path stroke="red" d="M8 17h1m-1 1h3m-3 1h10M8 20h10m-9 1h9m-7 1h7" /></svg>;

export const setupx119Data = {
  '32x32_4': Setupx119_32x32_4
};

export interface Setupx119Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Setupx119Component = ({
  variant = '32x32_4',
  ...rest
}: Setupx119Props) => {
  const Svg = setupx119Data[variant];

  return <Svg {...rest} />;
};

export const Setupx119 = React.memo(Setupx119Component);
Setupx119.displayName = 'Setupx119';
