import React from 'react';
import type { SVGProps } from "react";

const Moricons104_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M3 0h4M2 1h1m4 0h7M2 2h1M2 3h1M2 4h1M2 5h1m10 0h1M2 6h1m10 0h1M2 7h1m10 0h1M2 8h12m1 3h4m-5 1h1m4 0h6m-11 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h12m-11 3h4m-5 1h1m4 0h6m-11 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h12" /><path stroke="silver" d="M3 1h4m0 1h5m1 0h1M3 3h8M3 4h9m1 0h1M3 5h10M3 6h10M3 7h10m2 5h4m0 1h6m-10 1h10m-10 1h10m-10 1h10m-10 1h10m-10 1h10m-10 5h4m0 1h6m-10 1h10m-10 1h10m-10 1h10m-10 1h10m-10 1h10" /><path stroke="gray" d="M3 2h4m7 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M3 9h5m1 0h6m-6 1h1m-1 1h1m-1 1h1m-1 1h1m5 0h4M9 14h1m16 0h1M9 15h1m16 0h1m-1 1h1M9 17h5m12 0h1M9 18h1m16 0h1M9 19h1m16 0h1M9 20h1m6 0h11M9 21h1m-1 1h1m-1 1h1m-1 1h1m5 0h4M9 25h1m16 0h1M9 26h1m16 0h1m-1 1h1M9 28h5m12 0h1m-1 1h1m-1 1h1m-12 1h12" /><path stroke="#fff" d="M12 2h1m-2 1h1m0 1h1" /><path stroke="red" d="M14 2h6m-8 1h2m3 0h5m-3 1h3m-2 1h3m-3 1h3m-5 1h7m-6 1h5m-4 1h3m-2 1h1" /><path stroke="#00f" d="M8 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h6m-6 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h6" /></svg>;

export const moricons104Data = {
  '32x32_4': Moricons104_32x32_4
};

export interface Moricons104Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons104Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons104Props) => {
  const Svg = moricons104Data[variant];

  return <Svg {...rest} />;
};

export const Moricons104 = React.memo(Moricons104Component);
Moricons104.displayName = 'Moricons104';
