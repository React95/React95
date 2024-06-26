import React from 'react';
import type { SVGProps } from "react";

const Phone_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M6 0h20M4 1h2m20 0h2M2 2h2m24 0h2M1 3h1m9 0h3m4 0h3m9 0h1M1 4h1m9 0h1m1 0h1m4 0h1m1 0h1m9 0h1M0 5h1m8 0h3m1 0h6m1 0h3m8 0h1M0 6h1m7 0h1m14 0h1m7 0h1M0 7h8m5 0h1m2 0h1m2 0h1m4 0h8M0 8h1m6 0h1m4 0h2m1 0h2m1 0h2m4 0h1m6 0h1M0 9h1m6 0h1m16 0h1m6 0h1M1 10h6m6 0h1m2 0h1m2 0h1m5 0h6M6 11h1m5 0h2m1 0h2m1 0h2m5 0h1M6 12h1m18 0h1M5 13h1m7 0h1m2 0h1m2 0h1m6 0h1M5 14h1m6 0h2m1 0h2m1 0h2m6 0h1M5 15h1m20 0h1M5 16h1m7 0h1m2 0h1m2 0h1m6 0h1M4 17h1m7 0h2m1 0h2m1 0h2m7 0h1M4 18h2m20 0h2M4 19h1m1 0h20m1 0h1M4 20h1m22 0h1M4 21h1m22 0h1M4 22h1m22 0h1M4 23h1m22 0h1M5 24h1m20 0h1M4 25h24M4 26h2m20 0h2M4 27h1m22 0h1M4 28h1m13 0h1m3 0h1m1 0h1m2 0h1M4 29h1m22 0h1M4 30h1m22 0h1M5 31h22" /><path stroke="#fff" d="M6 1h16M4 2h5M2 3h4M2 4h3m7 0h1m6 0h1M1 5h3m8 0h1m6 0h1M1 6h2m6 0h13M8 7h4m2 0h1m2 0h1m2 0h2M8 8h4m2 0h1m2 0h1m2 0h3M8 9h15M7 10h5m2 0h1m2 0h1m2 0h3M7 11h5m2 0h1m2 0h1m2 0h4M7 12h17M6 13h6m2 0h1m2 0h1m2 0h4M6 14h6m2 0h1m2 0h1m2 0h5M6 15h19M6 16h6m2 0h1m2 0h1m2 0h5M5 17h7m2 0h1m2 0h1m2 0h5M6 18h18M6 20h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M22 1h4M9 2h18M6 3h5m3 0h4m3 0h8M5 4h4m14 0h6M4 5h4m16 0h6M3 6h4m15 0h1m2 0h5m-8 1h2M1 8h4m18 0h1m1 0h4M1 9h4m18 0h1m1 0h4m-6 1h2m-1 1h1m-1 1h1m-1 1h2m-1 1h1m-1 1h1m-1 1h1m-1 1h2m-3 1h2M6 26h20M5 27h22M5 28h3m9 0h1m1 0h1m1 0h1m1 0h1m1 0h2M5 29h3m9 0h10M5 30h22" /><path stroke="gray" d="M27 2h1m1 1h1M9 4h2m3 0h4m3 0h2m6 0h1M8 5h1m14 0h1m6 0h1M7 6h1m16 0h1m5 0h1M12 7h1m2 0h1m2 0h1M5 8h2m22 0h2M5 9h2m22 0h2m-19 1h1m2 0h1m2 0h1m-7 3h1m2 0h1m2 0h1m-7 3h1m2 0h1m2 0h1M5 19h1m20 0h1M5 20h1m1 0h20M5 21h1m1 0h20M5 22h1m1 0h20M5 23h1m1 0h20M7 24h19M8 28h9m-9 1h9" /><path stroke="red" d="M20 28h1" /></svg>;

export const phoneData = {
  '32x32_4': Phone_32x32_4
};

export interface PhoneProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Phone: React.FC<PhoneProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = phoneData[variant];

  return <Svg {...rest} />;
};
