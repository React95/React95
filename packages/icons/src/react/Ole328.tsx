import React from 'react';
import type { SVGProps } from "react";

const Ole328_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M5 0h17M5 1h1m15 0h2M5 2h1m15 0h1m1 0h1M5 3h1m15 0h1m2 0h1M5 4h1m15 0h1m3 0h1M5 5h1m15 0h1m4 0h1M5 6h1m15 0h1m5 0h1M5 7h1m15 0h8M5 8h1m22 0h1M5 9h1m22 0h1M5 10h1m22 0h1M5 11h1m22 0h1M5 12h1m22 0h1M5 13h1m22 0h1M5 14h1m22 0h1M5 15h1m22 0h1M5 16h1m22 0h1M5 17h1m22 0h1M5 18h1m22 0h1M5 19h1m22 0h1M5 20h1m22 0h1M5 21h1m22 0h1M5 22h1m22 0h1M5 23h1m22 0h1M5 24h1m22 0h1M5 25h1m22 0h1M5 26h1m22 0h1M5 27h1m22 0h1M5 28h1m22 0h1M5 29h24" /><path stroke="#fff" d="M6 1h15M6 2h15M6 3h15m1 0h1M6 4h15m1 0h2M6 5h15m1 0h3M6 6h15m1 0h4M6 7h15M6 8h22M6 9h22M6 10h22M6 11h22M6 12h22M6 13h22M6 14h22M6 15h22M6 16h22M6 17h22M6 18h22M6 19h22M6 20h22M6 21h22M6 22h22M6 23h22M6 24h22M6 25h22M6 26h22M6 27h22M6 28h22" /><path stroke="gray" d="M22 2h1m0 1h1m0 1h1m0 1h1m0 1h1m2 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M6 30h24" /></svg>;

export const ole328Data = {
  '32x32_4': Ole328_32x32_4
};

export interface Ole328Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Ole328: React.FC<Ole328Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = ole328Data[variant];

  return <Svg {...rest} />;
};
