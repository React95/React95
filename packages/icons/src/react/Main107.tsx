import React from 'react';
import type { SVGProps } from "react";

const Main107_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="gray" d="M14 4h4m-4 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#00f" d="M8 5h1m15 0h1M11 8h1m9 0h1M4 9h1m23 0h1M7 10h1m4 0h1m7 0h1m4 0h1m-16 2h1m11 0h1m-11 1h1m7 0h1M2 15h1m4 0h1m2 0h1m1 0h1m7 0h1m1 0h1m2 0h1m4 0h1m-19 2h1m7 0h1m-11 1h1m11 0h1m-11 2h1m7 0h1M7 21h1m17 0h1m-16 1h1m11 0h1M4 23h1m23 0h1M7 26h1m17 0h1" /><path stroke="#fff" d="M15 5h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M16 5h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M17 5h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-4 1h4" /></svg>;

export const main107Data = {
  '32x32_4': Main107_32x32_4
};

export interface Main107Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Main107: React.FC<Main107Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = main107Data[variant];

  return <Svg {...rest} />;
};
