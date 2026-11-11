import React from 'react';
import type { SVGProps } from "react";

const Signup1403_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M5 2h20M5 3h1M5 4h1M5 5h1m5 0h1m1 0h1M5 6h1M5 7h1m3 0h13M5 8h1M5 9h1m3 0h12M5 10h1m-1 1h1m3 0h14M5 12h1m-1 1h1m3 0h11M5 14h1m-1 1h1m3 0h13M5 16h1m-1 1h1m3 0h12M5 18h1m-1 1h1m3 0h13M5 20h1m-1 1h1m3 0h12M5 22h1m-1 1h1m3 0h14M5 24h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M25 2h1m-1 1h1m-1 1h1M8 5h3m1 0h1m1 0h2m1 0h5m3 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-13 1h11m1 0h1m-1 1h1M5 29h21" /><path stroke="#fff" d="M6 3h19M6 4h19M6 5h2m8 0h1m5 0h3M6 6h19M6 7h1m1 0h1m13 0h3M6 8h19M6 9h1m1 0h1m12 0h4M6 10h19M6 11h1m1 0h1m14 0h2M6 12h19M6 13h1m1 0h1m11 0h5M6 14h19M6 15h1m1 0h1m13 0h3M6 16h19M6 17h1m1 0h1m12 0h4M6 18h19M6 19h1m1 0h1m13 0h3M6 20h19M6 21h1m1 0h1m12 0h4M6 22h19M6 23h1m1 0h1m14 0h2M6 24h19M6 25h3m1 0h1m1 0h13M6 26h4m1 0h14M6 27h3m1 0h1m1 0h1m11 0h1M6 28h19" /><path stroke="red" d="M7 7h1M7 9h1m-1 2h1m-1 2h1m-1 2h1m-1 2h1m-1 2h1m-1 2h1m-1 2h1m1 2h1m1 0h1m-2 1h1m-2 1h1m1 0h1" /></svg>;

export const signup1403Data = {
  '32x32_4': Signup1403_32x32_4
};

export interface Signup1403Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Signup1403Component = ({
  variant = '32x32_4',
  ...rest
}: Signup1403Props) => {
  const Svg = signup1403Data[variant];

  return <Svg {...rest} />;
};

export const Signup1403 = React.memo(Signup1403Component);
Signup1403.displayName = 'Signup1403';
