import React from 'react';
import type { SVGProps } from "react";

const Comdlg32529_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M0 4h25M0 5h1m23 0h2M0 6h1m23 0h1m1 0h1M0 7h1m13 0h2m8 0h1m2 0h1M0 8h1m13 0h2m8 0h1m3 0h1M0 9h1m12 0h4m7 0h1m4 0h1M0 10h1m12 0h4m7 0h7M0 11h1m11 0h2m1 0h3m12 0h1M0 12h1m11 0h1m2 0h3m12 0h1M0 13h1m10 0h2m2 0h4m11 0h1M0 14h1m10 0h1m4 0h3m11 0h1M0 15h1m9 0h2m4 0h4m10 0h1M0 16h1m9 0h1m6 0h3m10 0h1M0 17h1m8 0h12m9 0h1M0 18h1m8 0h1m8 0h3m9 0h1M0 19h1m7 0h2m8 0h4m8 0h1M0 20h1m7 0h1m10 0h3m8 0h1M0 21h1m6 0h2m10 0h4m7 0h1M0 22h1m4 0h6m6 0h8m5 0h1M0 23h1m29 0h1M0 24h1m29 0h1M0 25h1m29 0h1M0 26h31" /><path stroke="#fff" d="M1 5h23M1 6h23m1 0h1M1 7h13m2 0h8m1 0h2M1 8h13m2 0h8m1 0h3M1 9h12m4 0h7m1 0h4M1 10h12m4 0h7M1 11h11m2 0h1m3 0h12M1 12h11m1 0h2m3 0h12M1 13h10m2 0h2m4 0h11M1 14h10m1 0h4m3 0h11M1 15h9m2 0h4m4 0h10M1 16h9m1 0h6m3 0h10M1 17h8m12 0h9M1 18h8m1 0h8m3 0h9M1 19h7m2 0h8m4 0h8M1 20h7m1 0h10m3 0h8M1 21h6m2 0h10m4 0h7M1 22h4m6 0h6m8 0h5M1 23h29M1 24h29M1 25h29" /><path stroke="silver" d="M31 11h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 27h31" /></svg>;

export const comdlg32529Data = {
  '32x32_4': Comdlg32529_32x32_4
};

export interface Comdlg32529Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Comdlg32529: React.FC<Comdlg32529Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = comdlg32529Data[variant];

  return <Svg {...rest} />;
};
