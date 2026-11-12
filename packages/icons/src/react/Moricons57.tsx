import React from 'react';
import type { SVGProps } from "react";

const Moricons57_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M0 0h32M0 1h1m30 0h1M0 2h1m30 0h1M0 3h1m30 0h1M0 4h1m30 0h1M0 5h1m30 0h1M0 6h1m30 0h1M0 7h1m30 0h1M0 8h1m30 0h1M0 9h1m30 0h1M0 10h1m30 0h1M0 11h1m30 0h1M0 12h1m30 0h1M0 13h1m30 0h1M0 14h1m30 0h1M0 15h1m30 0h1M0 16h1m30 0h1M0 17h1m30 0h1M0 18h1m30 0h1M0 19h1m30 0h1M0 20h1m30 0h1M0 21h1m30 0h1M0 22h1m30 0h1M0 23h1m30 0h1M0 24h1m30 0h1M0 25h1m30 0h1M0 26h1m30 0h1M0 27h1m30 0h1M0 28h1m30 0h1M0 29h1m30 0h1M0 30h1m30 0h1M0 31h32" /><path stroke="#fff" d="M1 1h30M1 2h5m20 0h5M1 3h11m8 0h11M1 4h30M1 5h5m20 0h5M1 6h8m14 0h8M1 7h30M1 8h5m20 0h5M1 9h5m20 0h5M1 10h30M1 11h5m20 0h5M1 12h8m14 0h8M1 13h30M1 14h5m20 0h5M1 15h11m8 0h11M1 16h30M1 17h5m20 0h2m2 0h1M1 18h1m3 0h10m2 0h7m2 0h3m1 0h1M1 19h1m1 0h2m1 0h6m1 0h10m4 0h2M1 20h1m1 0h2m1 0h2m3 0h1m1 0h2m1 0h3m1 0h1m1 0h1m1 0h1M1 21h1m3 0h2m1 0h2m1 0h1m1 0h1m1 0h1m1 0h3m2 0h2m2 0h1M1 22h1m1 0h2m1 0h2m1 0h3m1 0h1m1 0h2m1 0h2m1 0h2M1 23h1m1 0h3m1 0h2m2 0h1m1 0h2m1 0h1m1 0h2m1 0h1m1 0h1m1 0h1m4 0h1M1 24h18m1 0h3m7 0h1M1 25h4m4 0h1m2 0h1m3 0h2m1 0h3m4 0h5M1 26h22m2 0h6M1 27h30M1 28h9m1 0h1m1 0h1m1 0h1m1 0h14M1 29h13m5 0h12M1 30h9m1 0h1m1 0h18" /><path stroke="#f0f" d="M6 2h20M6 5h20M6 8h20M6 11h20M6 14h20M6 17h20M10 28h1m1 0h1m-3 2h1m1 0h1" /><path stroke="#00f" d="M12 3h8M9 6h14M6 9h20M9 12h14m-11 3h8M2 18h3m10 0h2M2 19h1m2 0h1m6 0h1M2 20h1m2 0h1m2 0h3m1 0h1m2 0h1m3 0h1m1 0h1M2 21h3m2 0h1m2 0h1m1 0h1m1 0h1m1 0h1m3 0h2M2 22h1m2 0h1m2 0h1m3 0h1m1 0h1m2 0h1m2 0h1M2 23h1m3 0h1m2 0h2m1 0h1m2 0h1m1 0h1m2 0h1m-2 1h1M5 25h4m1 0h2m1 0h3m2 0h1m-5 3h1m1 0h1m-3 1h5" /><path stroke="#ff0" d="M28 17h2m-5 1h1m3 0h1m-6 1h3m2 0h2m-8 1h1m1 0h2m1 0h1m1 0h1m-7 1h1m3 0h1m1 0h1m-7 1h1m1 0h1m1 0h3m-9 1h1m1 0h1m2 0h1m1 0h1m-7 1h2m1 0h4m-8 1h2m1 0h1m-3 1h2" /><path stroke="silver" d="M24 18h1m-2 1h1m3 1h1m1 0h1m-5 1h1m1 0h1m1 0h1m-7 1h1m1 0h1m1 0h1m-2 1h1m1 0h1m-4 1h1m-2 1h1" /></svg>;

export const moricons57Data = {
  '32x32_4': Moricons57_32x32_4
};

export interface Moricons57Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons57Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons57Props) => {
  const Svg = moricons57Data[variant];

  return <Svg {...rest} />;
};

export const Moricons57 = React.memo(Moricons57Component);
Moricons57.displayName = 'Moricons57';
