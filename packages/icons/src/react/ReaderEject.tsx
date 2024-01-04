import React from 'react';
import type { SVGProps } from "react";

const ReaderEject_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M15 4h2m-4 1h2m2 0h2m-8 1h2m6 0h2M9 7h2m10 0h2M7 8h2m14 0h2M6 9h1m18 0h2M6 10h1m-1 1h1m18 0h2M6 12h2m15 0h4M5 13h2m1 0h2m11 0h5M4 14h1m14 0h5M4 15h1m13 0h4m4 0h1M4 16h1m9 0h2m2 0h2m4 0h3m-11 1h2m4 0h5m-7 1h7M5 19h2m4 0h2m5 0h9M7 20h2m4 0h2m3 0h9M9 21h2m7 0h7m-14 1h2m5 0h5m-10 1h2m3 0h3m-6 1h2m1 0h1" /><path stroke="#fff" d="M15 5h2m-4 1h2m-4 1h2M9 8h2M7 9h2m-2 1h1m1 0h2m-4 1h1m3 0h2m0 1h2m0 1h2M5 14h2m10 0h2M7 15h1m-2 1h1m-2 1h1m6 0h2m0 1h2m0 1h2" /><path stroke="silver" d="M15 6h4m-6 1h8M11 8h12M9 9h16M8 10h1m2 0h16M8 11h3m2 0h12M8 12h5m2 0h8M7 13h1m2 0h2m2 0h1m2 0h4M8 14h2m6 0h1m9 0h1M5 15h1m9 0h3m6 0h2m-13 1h1m2 0h2m4 0h2m-10 1h2m4 0h2m-9 1h1m2 0h4M7 19h4m2 0h3m-7 1h4m2 0h3m-7 1h4m2 0h1m-5 1h2m2 0h1m-3 1h3m-1 1h1" /><path stroke="#000" d="M27 10h1m-1 1h1m-1 1h1m-2 1h2m-13 1h1m8 0h2m1 0h1m-15 1h2m7 0h2m3 0h1m-17 1h2m7 0h2m5 0h1m-17 1h1m6 0h2m7 0h1M4 18h9m14 0h1m-1 1h1m-1 1h1m-3 1h2m-4 1h2m-4 1h2m-4 1h2m-4 1h2" /><path stroke="green" d="M12 13h2m-7 1h1m2 0h2m2 0h1m-9 1h1m1 0h2m2 0h1m-8 1h1m4 0h1m-7 1h1m4 0h2m4 5h2" /><path stroke="#0f0" d="M12 14h2m-4 1h2m-5 1h3m-4 1h3m6 4h2" /></svg>;
const ReaderEject_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M7 0h2M5 1h2m2 0h2M3 2h2m6 0h2M1 3h2m10 0h2M1 4h1M1 5h1m12 0h1M0 6h1m1 0h2m8 0h2M0 7h1m9 0h2M0 8h1m8 0h1m4 0h1M8 9h1m3 0h3m-5 1h5M2 11h2m5 0h6M4 12h2m3 0h4m-7 1h2m1 0h2m-3 1h1" /><path stroke="#fff" d="M7 1h2M5 2h2M3 3h2M2 4h2m0 1h2M1 6h1m4 0h2M3 7h1m4 0h2M6 9h1m0 1h2" /><path stroke="silver" d="M7 2h4M5 3h8M4 4h11M2 5h2m2 0h8M4 6h2m2 0h4M1 7h1m4 0h2m6 0h1M8 8h1m3 0h2M7 9h1m2 0h2m-7 1h2m2 0h1m-6 1h5m-3 1h3m-1 1h1" /><path stroke="#000" d="M15 4h1m-1 1h1m-2 1h2m-4 1h2m1 0h1M6 8h2m2 0h2m3 0h1M4 9h2m3 0h1m5 0h1M0 10h5m10 0h1m-1 1h1m-3 1h2m-4 1h2m-4 1h2" /><path stroke="green" d="M2 7h1m1 0h1M1 8h1m1 0h1m1 0h1M0 9h1" /><path stroke="#0f0" d="M5 7h1M2 8h1m1 0h1M1 9h3" /></svg>;

export const readerEjectData = {
  '32x32_4': ReaderEject_32x32_4,
  '16x16_4': ReaderEject_16x16_4
};

export interface ReaderEjectProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const ReaderEject: React.FC<ReaderEjectProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = readerEjectData[variant];

  return <Svg {...rest} />;
};
