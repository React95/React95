import React from 'react';
import type { SVGProps } from "react";

const Left_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M1 2h14M1 4h10M1 6h14M1 8h10M1 10h14M1 12h10" /></svg>;

export const leftData = {
  '16x16_4': Left_16x16_4
};

export interface LeftProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Left: React.FC<LeftProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = leftData[variant];

  return <Svg {...rest} />;
};
