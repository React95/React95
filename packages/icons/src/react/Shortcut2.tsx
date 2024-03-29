import React from 'react';
import type { SVGProps } from "react";

const Shortcut2_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M10 9h2m-5 1h3m1 0h1m-7 1h2m4 0h1m-9 1h2m6 0h1M1 13h2m8 0h1m-9 1h2m6 0h1m-8 1h1m6 0h1m-9 1h1m3 0h2m2 0h1M2 17h1m3 0h1m2 0h3M1 18h1m4 0h1m4 0h1M1 19h1m3 0h1m-6 1h1m4 0h1m-6 1h2m2 0h1m-5 1h1m1 0h1m1 0h1m-5 1h2m1 0h2m-3 1h1m1 0h1m-1 1h1" /><path stroke="#000" d="M12 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-6 1h1m4 0h1m-6 1h1m4 0h1m-7 1h1m-1 1h1m-2 1h1m-1 1h1m-1 1h1m-6 1h2m3 0h1m-4 1h2m1 0h1m-2 1h2m-1 1h1" /><path stroke="silver" d="M10 10h1m-4 1h4m-5 1h5m-8 1h1m1 0h1m1 0h4m-5 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m0 1h1m-8 1h1m-2 1h1m1 0h1m-3 1h2m-3 1h4m-3 1h2m-3 1h1m1 0h1m-2 1h1m0 1h1" /><path stroke="#fff" d="M5 12h1m-2 1h1m1 0h1m-2 1h1m1 0h1m1 0h1m-5 1h2m1 0h1m1 0h1m-7 1h3m2 0h1m-6 1h2m-3 1h1m1 0h1m-2 1h1" /></svg>;

export const shortcut2Data = {
  '32x32_4': Shortcut2_32x32_4
};

export interface Shortcut2Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Shortcut2: React.FC<Shortcut2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = shortcut2Data[variant];

  return <Svg {...rest} />;
};
