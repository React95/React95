import React from 'react';
import type { SVGProps } from "react";

const HtmlPage_16x16_8 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#868686" d="M3 0h9M3 1h1M3 2h1M3 3h1" /><path stroke="#fff" d="M4 1h7M4 2h1m7 0h1M4 3h1m-1 9h1" /><path stroke="#9e9e9e" d="M11 1h1m-1 1h1m0 2h1m0 1h1" /><path stroke="#565656" d="M12 1h1m0 1h1m-3 1h1m2 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M4 14h11" /><path stroke="#fffbf0" d="M5 2h6M5 3h2m2 0h2M8 4h1m1 1h1M5 6h2M5 8h2m1 0h1" /><path stroke="#007ab9" d="M7 3h2M4 4h4m0 1h1M4 6h1m4 0h1M4 7h6M4 8h1" /><path stroke="#323232" d="M12 3h3M2 10h1" /><path stroke="navy" d="M3 4h1M2 5h1M1 6h1" /><path stroke="#2557ff" d="M9 4h1M3 7h1M2 8h2M3 9h2m3 0h1m-5 1h4" /><path stroke="#f2f2f2" d="M10 4h1M9 5h1m0 1h1M7 8h1" /><path stroke="#cecece" d="M11 4h1m0 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M4 13h10" /><path stroke="#7a7a7a" d="M13 4h1M1 7h1M0 8h1m2 4h1m-1 1h1m-1 1h1" /><path stroke="#929292" d="M3 5h1M2 6h1M1 9h1" /><path stroke="#a6caf0" d="M4 5h1" /><path stroke="#2525ff" d="M5 5h2m0 1h1M7 9h1m-7 1h1m1 0h1m-3 1h1m0 1h1" /><path stroke="#6bffff" d="M7 5h1" /><path stroke="#e6e6e6" d="M11 5h1m-1 1h2m-3 1h3M9 8h4m-3 1h3m-4 1h4m-5 1h5m-8 1h8" /><path stroke="#ffff8e" d="M3 6h1" /><path stroke="#0af" d="M8 6h1" /><path stroke="#ffd48e" d="M2 7h1" /><path stroke="#ff8f6b" d="M1 8h1" /><path stroke="#626262" d="M0 9h1" /><path stroke="#003196" d="M2 9h1" /><path stroke="silver" d="M5 9h2" /><path stroke="#006296" d="M9 9h1m-2 1h1m-4 1h3" /><path stroke="olive" d="M0 10h1" /><path stroke="#000" d="M3 11h2" /></svg>;

export const htmlPageData = {
  '16x16_8': HtmlPage_16x16_8
};

export interface HtmlPageProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_8';
}

export const HtmlPage: React.FC<HtmlPageProps> = ({
  variant = '16x16_8',
  ...rest
}) => {
  const Svg = htmlPageData[variant];

  return <Svg {...rest} />;
};
