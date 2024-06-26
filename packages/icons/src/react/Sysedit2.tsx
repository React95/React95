import React from 'react';
import type { SVGProps } from "react";

const Sysedit2_64x64_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" shapeRendering="crispEdges" viewBox="0 -0.5 64 64" {...props}><path stroke="#000" d="M8 8h28M8 9h1m26 0h2M8 10h1m26 0h1m1 0h1M8 11h1m26 0h1m2 0h1M8 12h1m26 0h1m3 0h1M8 13h1m26 0h1m4 0h1M8 14h1m6 0h2m1 0h1m2 0h1m1 0h1m11 0h1m5 0h1M8 15h1m4 0h2m2 0h1m4 0h1m3 0h1m8 0h1m6 0h1M8 16h1m26 0h1m7 0h1M8 17h1m26 0h1m8 0h1M8 18h1m26 0h1m9 0h1M8 19h1m26 0h1m10 0h1M8 20h1m26 0h13M8 21h1m10 0h1m1 0h1m3 0h1m1 0h1m19 0h1M8 22h1m11 0h1m2 0h1m1 0h1m21 0h1M8 23h1m38 0h1M8 24h1m38 0h1M8 25h1m38 0h1M8 26h1m9 0h1m28 0h1M8 27h1m10 0h1m4 0h1m4 0h1m3 0h1m13 0h1M8 28h1m9 0h2m2 0h1m1 0h1m2 0h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h2m7 0h1M8 29h1m38 0h1M8 30h1m38 0h1M8 31h1m38 0h1M8 32h1m38 0h1M8 33h1m38 0h1M8 34h1m5 0h1m6 0h1m4 0h1m4 0h1m5 0h1m9 0h1M8 35h1m8 0h1m1 0h1m9 0h1m3 0h1m3 0h1m9 0h1M8 36h1m10 0h2m1 0h2m1 0h1m1 0h1m3 0h1m4 0h1m3 0h3m4 0h1M8 37h1m38 0h1M8 38h1m38 0h1M8 39h1m38 0h1M8 40h1m38 0h1M8 41h1m38 0h1M8 42h1m38 0h1M8 43h1m8 0h1m3 0h1m25 0h1M8 44h1m10 0h2m2 0h1m3 0h1m2 0h1m5 0h2m2 0h1m1 0h1m4 0h1M8 45h1m23 0h1m14 0h1M8 46h1m38 0h1M8 47h1m38 0h1M8 48h1m38 0h1M8 49h1m38 0h1M8 50h1m38 0h1M8 51h1m38 0h1M8 52h40" /><path stroke="#fff" d="M9 9h26M9 10h26m1 0h1M9 11h26m1 0h2M9 12h26m1 0h3M9 13h26m1 0h4M9 14h6m2 0h1m1 0h2m1 0h1m1 0h11m1 0h5M9 15h4m2 0h2m1 0h4m1 0h3m1 0h8m1 0h6M9 16h26m1 0h7M9 17h26m1 0h8M9 18h26m1 0h9M9 19h26m1 0h10M9 20h26M9 21h10m1 0h1m1 0h3m1 0h1m1 0h19M9 22h11m1 0h2m1 0h1m1 0h21M9 23h38M9 24h38M9 25h38M9 26h9m1 0h28M9 27h10m1 0h4m1 0h4m1 0h3m1 0h13M9 28h9m2 0h2m1 0h1m1 0h2m1 0h1m2 0h1m1 0h1m1 0h1m1 0h1m2 0h7M9 29h38M9 30h38M9 31h38M9 32h38M9 33h38M9 34h5m1 0h6m1 0h4m1 0h4m1 0h5m1 0h9M9 35h8m1 0h1m1 0h9m1 0h3m1 0h3m1 0h9M9 36h10m2 0h1m2 0h1m1 0h1m1 0h3m1 0h4m1 0h3m3 0h4M9 37h38M9 38h38M9 39h38M9 40h38M9 41h38M9 42h38M9 43h8m1 0h3m1 0h25M9 44h10m2 0h2m1 0h3m1 0h2m1 0h5m2 0h2m1 0h1m1 0h4M9 45h23m1 0h14M9 46h38M9 47h38M9 48h38M9 49h38M9 50h38M9 51h38" /></svg>;

export const sysedit2Data = {
  '64x64_1': Sysedit2_64x64_1
};

export interface Sysedit2Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '64x64_1';
}

export const Sysedit2: React.FC<Sysedit2Props> = ({
  variant = '64x64_1',
  ...rest
}) => {
  const Svg = sysedit2Data[variant];

  return <Svg {...rest} />;
};
