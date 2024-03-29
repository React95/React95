import React from 'react';
import type { SVGProps } from "react";

const Faxcover140_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="olive" d="M13 0h5m-7 1h2m5 0h2M10 2h1m9 0h1M9 3h1M8 4h1M8 5h1M7 6h1m14 0h1M7 7h1m14 0h1M7 8h1m14 0h1M7 9h1m14 0h1M7 10h1m14 0h1M8 11h1m12 0h1M9 12h1m11 0h1m-12 1h1m9 0h1m-10 1h1m7 0h1m-9 1h1m7 0h1m-8 1h2m3 0h2m-5 1h3" /><path stroke="#ff0" d="M13 1h5m-7 1h1m1 0h1m1 0h1m1 0h1m1 0h1M10 3h1m7 0h3M9 4h1m7 0h1m1 0h1m1 0h1m-4 1h1m1 0h2M8 6h1m8 0h1m1 0h1m1 0h1M8 7h1m9 0h1m1 0h2M9 8h1m7 0h1m1 0h1m1 0h1M8 9h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M8 10h2m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M9 11h4m5 0h3m-11 1h2m1 0h1m3 0h1m1 0h1m-9 1h3m3 0h3m-8 1h2m1 0h1m1 0h1m-6 1h7m-5 1h3" /><path stroke="#fff" d="M12 2h1m1 0h1m1 0h1m1 0h1m-8 1h3m3 0h1m-8 1h4m4 0h1m1 0h1M9 5h5m3 0h1m1 0h1M9 6h5m4 0h1m1 0h1M9 7h5m3 0h1m1 0h1M8 8h1m1 0h5m1 0h1m1 0h1m1 0h1M11 9h1m1 0h1m3 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m3 0h1m-6 1h1m5 0h1m1 0h1m-7 2h1m1 0h1m1 0h1m-6 4h1m0 1h1m-2 1h1m0 1h1" /><path stroke="gray" d="M14 3h1m1 0h1m-3 4h1m1 0h1m-3 4h1m1 0h1m-3 2h1m1 0h1m-6 4h1m-1 1h1m-7 1h1m5 0h2m12 0h1M4 20h3m5 0h1m11 0h3M5 21h3m4 0h2m9 0h3M6 22h3m13 0h3M7 23h3m11 0h3M8 24h3m9 0h3M9 25h3m7 0h3m-12 1h3m5 0h3m-10 1h3m3 0h3m-8 1h3m1 0h3m-6 1h5m-4 1h3m-2 1h1" /><path stroke="#000" d="M15 3h1m5 0h1m-8 1h3m5 0h1m-9 1h3m5 0h1m-9 1h3m6 0h1m-9 1h1m7 0h1m-9 1h1m7 0h1m-9 1h1m7 0h1m-1 1h1m-9 1h1m6 0h1M8 12h1m5 0h3m5 0h1M9 13h1m5 0h1m5 0h1m-12 1h1m9 0h1m-11 1h1m9 0h1m-10 1h1m7 0h1M4 17h1m7 0h2m3 0h3m6 0h1M5 18h1m8 0h3m2 0h1m5 0h1M6 19h1m6 0h1m3 0h3m4 0h1M7 20h1m6 0h3m1 0h1m4 0h1M8 21h1m8 0h2m3 0h1M9 22h1m3 0h5m3 0h1m-12 1h1m3 0h3m3 0h1m-10 1h1m7 0h1m-8 1h1m5 0h1m-6 1h1m3 0h1m-4 1h1m1 0h1m-2 1h1" /><path stroke="teal" d="M8 13h1m13 0h1M7 14h1m13 0h3M6 15h1m14 0h2m1 0h1M5 16h1m14 0h2m3 0h1m-6 1h2m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-2 1h1" /><path stroke="#0ff" d="M8 14h2m-3 1h3m13 0h1M6 16h5m11 0h3M5 17h6m11 0h4M6 18h5m10 0h4M7 19h4m10 0h3M8 20h4m8 0h3M9 21h3m8 0h2m-12 1h3m6 0h2m-10 1h3m4 0h2m-8 1h7m-6 1h5m-4 1h3m-2 1h1" /><path stroke="silver" d="M12 18h1m4 0h2m-4 1h2m0 1h1m-3 1h2" /></svg>;

export const faxcover140Data = {
  '32x32_4': Faxcover140_32x32_4
};

export interface Faxcover140Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Faxcover140: React.FC<Faxcover140Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = faxcover140Data[variant];

  return <Svg {...rest} />;
};
