import React from 'react';
import type { SVGProps } from "react";

const Mmsys123_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#00f" d="M13 8h6m-8 1h10m-11 1h12M9 11h14M9 12h14M8 13h16M8 14h16M8 15h16M8 16h16M8 17h16M9 18h14M9 19h14m-13 1h12m-11 1h10m-8 1h6" /></svg>;

export const mmsys123Data = {
  '32x32_4': Mmsys123_32x32_4
};

export interface Mmsys123Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mmsys123: React.FC<Mmsys123Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mmsys123Data[variant];

  return <Svg {...rest} />;
};
