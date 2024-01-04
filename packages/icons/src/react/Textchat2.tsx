import React from 'react';
import type { SVGProps } from "react";

const Textchat2_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M11 2h8M8 3h3m8 0h3M6 4h2m14 0h2M5 5h1m18 0h1M4 6h1M3 7h1M2 8h1M1 9h1m-1 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1" /><path stroke="silver" d="M11 3h1m6 0h1M8 4h1m12 0h1M6 5h1m16 0h1M2 9h1m24 0h1M1 11h1m26 0h1M1 17h1m26 0h1M2 19h1m24 0h1M6 23h1m16 0h1M8 24h1m12 0h1m-11 1h1m6 0h1m-5 1h1" /><path stroke="#fff" d="M12 3h6M9 4h12M7 5h16M5 6h20M4 7h22M3 8h3m15 0h6M3 9h24M2 10h4m18 0h4M2 11h26M1 12h5m17 0h6M1 13h28M1 14h5m20 0h3M1 15h28M1 16h5m18 0h5M2 17h26M2 18h4m19 0h3M3 19h24M3 20h3m15 0h6M4 21h22M5 22h20M7 23h16M9 24h12m-9 1h6m-3 1h3m-3 1h3m-3 1h3m-2 1h2m-1 1h1" /><path stroke="#000" d="M25 6h1m0 1h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1M3 21h1m22 0h1M4 22h1m20 0h1M5 23h1m18 0h1M6 24h2m14 0h2M8 25h3m8 0h3m-11 1h3m4 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-2 1h2" /><path stroke="#00f" d="M6 8h15M6 10h18M6 12h17M6 14h20M6 16h18M6 18h19M6 20h15" /></svg>;
const Textchat2_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M5 0h6M3 1h2m6 0h2M2 2h1M1 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1m0 1h1m0 1h1" /><path stroke="silver" d="M5 1h1m4 0h1M1 4h1m12 0h1M1 8h1m12 0h1m-6 4h1" /><path stroke="#fff" d="M6 1h4M3 2h10M2 3h12M2 4h2m7 0h3M1 5h14M1 6h3m9 0h2M1 7h14M2 8h2m8 0h2M2 9h12M3 10h10m-8 1h6m-4 1h2m-1 1h1" /><path stroke="#000" d="M13 2h1m0 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M3 11h2m6 0h2m-8 1h2m3 0h1m-4 1h1m1 0h1m-2 1h2m-1 1h1" /><path stroke="#00f" d="M4 4h7M4 6h9M4 8h8" /></svg>;

export const textchat2Data = {
  '32x32_4': Textchat2_32x32_4,
  '16x16_4': Textchat2_16x16_4
};

export interface Textchat2Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Textchat2: React.FC<Textchat2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = textchat2Data[variant];

  return <Svg {...rest} />;
};
