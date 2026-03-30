import React from 'react';
import type { SVGProps } from "react";

const Right_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M1 3h14M5 5h10M1 7h14M5 9h10M1 11h14M5 13h10" /></svg>;

export const rightData = {
  '16x16_4': Right_16x16_4
};

export interface RightProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const RightComponent = ({
  variant = '16x16_4',
  ...rest
}: RightProps) => {
  const Svg = rightData[variant];

  return <Svg {...rest} />;
};

export const Right = React.memo(RightComponent);
Right.displayName = 'Right';
