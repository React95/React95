import React from 'react';
import type { SVGProps } from "react";

const Comdlg32533_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M6 3h19M6 4h1m17 0h1M6 5h1m17 0h1M6 6h1m2 0h13m2 0h1M6 7h1m17 0h1M6 8h1m17 0h1M6 9h1m2 0h12m3 0h1M6 10h1m17 0h1M6 11h1m17 0h1M6 12h1m2 0h13m2 0h1M6 13h1m17 0h1M6 14h1m17 0h1M6 15h2m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M6 16h1m17 0h1M6 17h1m17 0h1M6 18h1m2 0h13m2 0h1M6 19h1m17 0h1M6 20h1m17 0h1M6 21h1m2 0h12m3 0h1M6 22h1m17 0h1M6 23h1m17 0h1M6 24h1m2 0h13m2 0h1M6 25h1m17 0h1M6 26h1m17 0h1M6 27h19" /><path stroke="#fff" d="M7 4h17M7 5h17M7 6h2m13 0h2M7 7h17M7 8h17M7 9h2m12 0h3M7 10h17M7 11h17M7 12h2m13 0h2M7 13h17M7 14h17M8 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M7 16h17M7 17h17M7 18h2m13 0h2M7 19h17M7 20h17M7 21h2m12 0h3M7 22h17M7 23h17M7 24h2m13 0h2M7 25h17M7 26h17" /><path stroke="gray" d="M25 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M7 28h19" /></svg>;

export const comdlg32533Data = {
  '32x32_4': Comdlg32533_32x32_4
};

export interface Comdlg32533Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Comdlg32533: React.FC<Comdlg32533Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = comdlg32533Data[variant];

  return <Svg {...rest} />;
};
