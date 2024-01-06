import React from 'react';
import type { SVGProps } from "react";

const Message_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M0 3h15M0 4h1m13 0h1M0 5h1m1 0h4m8 0h1M0 6h1m13 0h1M0 7h1m13 0h1M0 8h1m13 0h1M0 9h1m13 0h1M0 10h1m13 0h1M0 11h1m13 0h1M0 12h15" /><path stroke="#fff" d="M1 4h13M1 5h1m4 0h5m2 0h1M1 6h10m2 0h1M1 7h13M1 8h4m6 0h3M1 9h13M1 10h4m5 0h4M1 11h13" /><path stroke="maroon" d="M11 5h2m-2 1h2" /><path stroke="navy" d="M5 8h6m-6 2h5" /></svg>;

export const messageData = {
  '16x16_4': Message_16x16_4
};

export interface MessageProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Message: React.FC<MessageProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = messageData[variant];

  return <Svg {...rest} />;
};
