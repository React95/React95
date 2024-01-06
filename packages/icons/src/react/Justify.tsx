import React from 'react';
import type { SVGProps } from "react";

const Justify_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M1 3h14M1 5h14M1 7h14M1 9h14M1 11h14M1 13h14" /></svg>;

export const justifyData = {
  '16x16_4': Justify_16x16_4
};

export interface JustifyProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Justify: React.FC<JustifyProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = justifyData[variant];

  return <Svg {...rest} />;
};
