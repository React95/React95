import React from 'react';
import type { SVGProps } from "react";

const Gcdef112_48x48_8 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" shapeRendering="crispEdges" viewBox="0 -0.5 48 48" {...props}><path stroke="maroon" d="M24 1h1m-2 1h3m-4 1h5m-6 1h7m-8 1h9M19 6h11M18 7h13M8 8h9m15 0h9M8 9h8m17 0h8M8 10h7m19 0h7M8 11h6m21 0h6M8 12h5m23 0h5M8 13h4m25 0h4M8 14h3m27 0h3M8 15h2m29 0h2M8 16h1m31 0h1m0 2h1m-1 1h2m-2 1h3m-3 1h4m-4 1h5m-5 1h6m-6 1h7m-7 1h6m-6 1h5m-5 1h4m-4 1h3m-3 1h2m-2 1h1M8 32h1m31 0h1M8 33h2m29 0h2M8 34h3m27 0h3M8 35h4m25 0h4M8 36h5m23 0h5M8 37h6m21 0h6M8 38h7m19 0h7M8 39h8m17 0h8M8 40h9m15 0h9m-23 1h13m-12 1h11m-10 1h9m-8 1h7m-6 1h5m-4 1h3m-2 1h1" /><path stroke="red" d="M7 18h1m-2 1h2m-3 1h3m-4 1h4m-5 1h5m-6 1h6m-7 1h7m-6 1h6m-5 1h5m-4 1h4m-3 1h3m-2 1h2m-1 1h1" /></svg>;

export const gcdef112Data = {
  '48x48_8': Gcdef112_48x48_8
};

export interface Gcdef112Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '48x48_8';
}

export const Gcdef112: React.FC<Gcdef112Props> = ({
  variant = '48x48_8',
  ...rest
}) => {
  const Svg = gcdef112Data[variant];

  return <Svg {...rest} />;
};
