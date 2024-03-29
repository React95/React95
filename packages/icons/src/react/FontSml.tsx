import React from 'react';
import type { SVGProps } from "react";

const FontSml_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M10 2h5m-4 1h3m-2 1h1M6 7h1M6 8h1M5 9h3m-3 1h1m1 0h1m-4 1h5m-5 1h1m3 0h1m-6 1h3m1 0h3" /><path stroke="gray" d="M5 8h1m1 0h1m-4 2h1m3 0h1m-6 2h1m5 0h1" /></svg>;

export const fontSmlData = {
  '16x16_4': FontSml_16x16_4
};

export interface FontSmlProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const FontSml: React.FC<FontSmlProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = fontSmlData[variant];

  return <Svg {...rest} />;
};
