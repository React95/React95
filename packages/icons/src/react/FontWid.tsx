import React from 'react';
import type { SVGProps } from "react";

const FontWid_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="navy" d="M2 1h1m10 0h1M1 2h2m10 0h2M0 3h5m6 0h5M1 4h2m10 0h2M2 5h1m10 0h1" /><path stroke="#000" d="M7 5h2M6 6h4M5 7h2m2 0h2M4 8h2m4 0h2M3 9h2m6 0h2M2 10h12M1 11h2m10 0h2M0 12h4m8 0h4" /><path stroke="gray" d="M7 7h2M6 8h1m2 0h1M5 9h1m4 0h1m-8 2h1m8 0h1" /></svg>;

export const fontWidData = {
  '16x16_4': FontWid_16x16_4
};

export interface FontWidProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const FontWid: React.FC<FontWidProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = fontWidData[variant];

  return <Svg {...rest} />;
};
