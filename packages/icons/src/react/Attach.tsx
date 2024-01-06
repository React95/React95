import React from 'react';
import type { SVGProps } from "react";

const Attach_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M7 1h3M6 2h1m3 0h1M6 3h1m1 0h1m1 0h1M4 4h1m1 0h1m1 0h1m1 0h1M4 5h1m1 0h1m1 0h1m1 0h1M4 6h1m1 0h1m1 0h1m1 0h1M4 7h1m1 0h1m1 0h1m1 0h1M4 8h1m1 0h1m1 0h1m1 0h1M4 9h1m1 0h1m1 0h1m1 0h1m-7 1h1m1 0h1m1 0h1m1 0h1m-7 1h1m1 0h1m1 0h1m1 0h1m-7 1h1m2 0h1m2 0h1m-6 1h1m3 0h1m-4 1h3" /><path stroke="gray" d="M4 13h1m5 0h1m-6 1h1m3 0h1" /></svg>;

export const attachData = {
  '16x16_4': Attach_16x16_4
};

export interface AttachProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Attach: React.FC<AttachProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = attachData[variant];

  return <Svg {...rest} />;
};
