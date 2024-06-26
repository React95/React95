import React from 'react';
import type { SVGProps } from "react";

const Comdlg32528_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M3 0h19M3 1h1m17 0h2M3 2h1m17 0h1m1 0h1M3 3h1m17 0h1m2 0h1M3 4h1m17 0h1m3 0h1M3 5h1m17 0h1m4 0h1M3 6h1m17 0h7M3 7h1m11 0h2m10 0h1M3 8h1m11 0h2m10 0h1M3 9h1m10 0h4m9 0h1M3 10h1m10 0h4m9 0h1M3 11h1m9 0h2m1 0h3m8 0h1M3 12h1m9 0h1m2 0h3m8 0h1M3 13h1m8 0h2m2 0h4m7 0h1M3 14h1m8 0h1m4 0h3m7 0h1M3 15h1m7 0h2m4 0h4m6 0h1M3 16h1m7 0h1m6 0h3m6 0h1M3 17h1m6 0h12m5 0h1M3 18h1m6 0h1m8 0h3m5 0h1M3 19h1m5 0h2m8 0h4m4 0h1M3 20h1m5 0h1m10 0h3m4 0h1M3 21h1m4 0h2m10 0h4m3 0h1M3 22h1m2 0h6m6 0h8m1 0h1M3 23h1m23 0h1M3 24h1m23 0h1M3 25h1m23 0h1M3 26h1m23 0h1M3 27h1m23 0h1M3 28h1m23 0h1M3 29h1m23 0h1M3 30h25" /><path stroke="#fff" d="M4 1h17M4 2h17m1 0h1M4 3h17m1 0h2M4 4h17m1 0h3M4 5h17m1 0h4M4 6h17M4 7h11m2 0h10M4 8h11m2 0h10M4 9h10m4 0h9M4 10h10m4 0h9M4 11h9m2 0h1m3 0h8M4 12h9m1 0h2m3 0h8M4 13h8m2 0h2m4 0h7M4 14h8m1 0h4m3 0h7M4 15h7m2 0h4m4 0h6M4 16h7m1 0h6m3 0h6M4 17h6m12 0h5M4 18h6m1 0h8m3 0h5M4 19h5m2 0h8m4 0h4M4 20h5m1 0h10m3 0h4M4 21h4m2 0h10m4 0h3M4 22h2m6 0h6m8 0h1M4 23h23M4 24h23M4 25h23M4 26h23M4 27h23M4 28h23M4 29h23" /><path stroke="silver" d="M28 7h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M4 31h25" /></svg>;

export const comdlg32528Data = {
  '32x32_4': Comdlg32528_32x32_4
};

export interface Comdlg32528Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Comdlg32528: React.FC<Comdlg32528Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = comdlg32528Data[variant];

  return <Svg {...rest} />;
};
