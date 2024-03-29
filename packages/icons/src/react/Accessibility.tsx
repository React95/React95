import React from 'react';
import type { SVGProps } from "react";

const Accessibility_64x64_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" shapeRendering="crispEdges" viewBox="0 -0.5 64 64" {...props}><path stroke="#000" d="M13 2h7m-9 1h11M10 4h13M9 5h15M8 6h16M8 7h16M8 8h16M8 9h16M8 10h16M8 11h15M9 12h13M9 13h11M9 14h9m-8 1h8m-8 1h8m-8 1h9m-9 1h9m-8 1h8m-8 1h8m-8 1h22m-22 1h22m-21 1h21m-21 1h21m-21 1h21m-21 1h21m-20 1h8m-8 1h8m-8 1h9M9 30h1m3 0h9M8 31h3m3 0h8M7 32h4m3 0h8M6 33h5m3 0h34M5 34h6m3 0h34M5 35h7m3 0h33M4 36h8m3 0h33M4 37h8m3 0h34M3 38h9m3 0h34M3 39h7m31 0h8M3 40h7m31 0h8M3 41h7m31 0h9M3 42h7m31 0h9M3 43h7m32 0h8M3 44h7m32 0h8M3 45h7m32 0h9M3 46h7m32 0h9M3 47h8m32 0h8M3 48h8m27 0h1m4 0h8M3 49h9m25 0h2m4 0h9m4 0h4M4 50h9m23 0h3m4 0h17M5 51h9m21 0h5m4 0h16M5 52h11m17 0h7m4 0h17M6 53h12m13 0h9m4 0h17M7 54h13m9 0h11m4 0h17M8 55h33m4 0h16M9 56h31m5 0h13m-48 1h29m6 0h9m-42 1h26m7 0h5m-37 1h23m-20 1h15" /></svg>;

export const accessibilityData = {
  '64x64_1': Accessibility_64x64_1
};

export interface AccessibilityProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '64x64_1';
}

export const Accessibility: React.FC<AccessibilityProps> = ({
  variant = '64x64_1',
  ...rest
}) => {
  const Svg = accessibilityData[variant];

  return <Svg {...rest} />;
};
