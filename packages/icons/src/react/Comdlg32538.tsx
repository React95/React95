import React from 'react';
import type { SVGProps } from "react";

const Comdlg32538_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M3 3h10m6 0h1m2 0h1m2 0h1m2 0h1M3 4h1m8 0h1m6 0h1m2 0h1m2 0h1m2 0h1M3 5h1m8 0h1m6 0h1m2 0h1m2 0h1m2 0h1M3 6h1m8 0h1m6 0h1m2 0h1m2 0h1m2 0h1M3 7h1m8 0h1m6 0h1m2 0h1m2 0h1m2 0h1M3 8h1m8 0h1m6 0h1m2 0h1m2 0h1m2 0h1M3 9h1m8 0h1m6 0h1m2 0h1m2 0h1m2 0h1M3 10h1m8 0h1m6 0h1m2 0h1m2 0h1m2 0h1M3 11h1m8 0h1m6 0h1m2 0h1m2 0h1m2 0h1M3 12h10m6 0h1m2 0h1m2 0h1m2 0h1m-10 1h1m2 0h1m2 0h1m2 0h1m-10 1h1m2 0h1m2 0h1m2 0h1m-10 1h1m2 0h1m2 0h1m2 0h1M3 16h1m2 0h1m2 0h1m2 0h1M3 17h1m2 0h1m2 0h1m2 0h1M3 18h1m2 0h1m2 0h1m2 0h1M3 19h1m2 0h1m2 0h1m2 0h1m6 0h10M3 20h1m2 0h1m2 0h1m2 0h1m6 0h1m8 0h1M3 21h1m2 0h1m2 0h1m2 0h1m6 0h1m8 0h1M3 22h1m2 0h1m2 0h1m2 0h1m6 0h1m8 0h1M3 23h1m2 0h1m2 0h1m2 0h1m6 0h1m8 0h1M3 24h1m2 0h1m2 0h1m2 0h1m6 0h1m8 0h1M3 25h1m2 0h1m2 0h1m2 0h1m6 0h1m8 0h1M3 26h1m2 0h1m2 0h1m2 0h1m6 0h1m8 0h1M3 27h1m2 0h1m2 0h1m2 0h1m6 0h1m8 0h1M3 28h1m2 0h1m2 0h1m2 0h1m6 0h10" /></svg>;

export const comdlg32538Data = {
  '32x32_4': Comdlg32538_32x32_4
};

export interface Comdlg32538Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Comdlg32538: React.FC<Comdlg32538Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = comdlg32538Data[variant];

  return <Svg {...rest} />;
};
