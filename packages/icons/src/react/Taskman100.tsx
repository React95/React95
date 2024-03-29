import React from 'react';
import type { SVGProps } from "react";

const Taskman100_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M13 1h6m-7 1h1m5 0h2m-9 1h1m8 0h1m-9 1h2m1 0h4m1 0h1M11 5h1m6 0h2m-8 1h1m7 0h1M10 7h2m6 0h2m1 0h1M8 8h2m2 0h1m7 0h1m1 0h2M6 9h2m3 0h1m6 0h2m4 0h2M5 10h1m6 0h1m7 0h1m5 0h1M5 11h1m7 0h6m5 0h3M5 12h1m16 0h2m2 0h1M5 13h1m15 0h1m4 0h1M5 14h1m14 0h1m5 0h1M5 15h1m14 0h1m5 0h1M6 16h2m12 0h1m3 0h2M8 17h2m10 0h1m1 0h2m-14 1h12m-10 1h1m7 0h1m-11 1h2m6 0h2m1 0h1M8 21h2m2 0h1m7 0h1m1 0h2M6 22h2m3 0h1m6 0h2m4 0h2M5 23h1m6 0h1m7 0h1m5 0h1M5 24h1m7 0h6m5 0h3M5 25h1m16 0h2m2 0h1M5 26h1m15 0h1m4 0h1M5 27h1m14 0h1m5 0h1M5 28h1m14 0h1m5 0h1M6 29h2m12 0h1m3 0h2M8 30h2m10 0h1m1 0h2m-14 1h12" /><path stroke="gray" d="M13 2h5m-7 2h1m7 0h1m-8 1h3m5 0h1M11 6h1m3 0h5m-8 1h3m5 0h1M11 8h1m3 0h5m-8 1h3m5 0h1m-10 1h1m1 0h7m-8 1h1m6 0h1m4 1h2m-4 1h4m-5 1h5m-5 1h5m-5 1h3m-3 1h1m-11 2h1m3 0h5m-8 1h3m5 0h1m-10 1h1m3 0h5m-8 1h3m5 0h1m-10 1h1m3 0h5m-8 1h1m6 0h1m4 1h2m-4 1h4m-5 1h5m-5 1h5m-5 1h3m-3 1h1" /><path stroke="silver" d="M12 3h8m-6 1h1m0 1h3m-5 1h2m0 1h3m-8 1h1m2 0h2m6 0h1M8 9h3m4 0h3m3 0h3M6 10h5m10 0h5M8 11h4m8 0h4M6 12h2m2 0h12M6 13h4m-4 1h5m1 0h8M6 15h5m1 0h8M8 16h3m1 0h8m-10 1h1m1 0h8m-7 2h2m0 1h3m-8 1h1m2 0h2m6 0h1M8 22h3m4 0h3m3 0h3M6 23h5m2 0h2m6 0h5M8 24h4m8 0h4M6 25h2m2 0h12M6 26h4m-4 1h5m1 0h8M6 28h5m1 0h8M8 29h3m1 0h8m-10 1h1m1 0h8" /><path stroke="#fff" d="M6 11h2m0 1h2m0 1h11m-10 1h1m-1 1h1m-1 1h1m-1 1h1m-6 7h2m0 1h2m0 1h11m-10 1h1m-1 1h1m-1 1h1m-1 1h1" /></svg>;

export const taskman100Data = {
  '32x32_4': Taskman100_32x32_4
};

export interface Taskman100Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Taskman100: React.FC<Taskman100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = taskman100Data[variant];

  return <Svg {...rest} />;
};
