import React from 'react';
import type { SVGProps } from "react";

const Setup4501_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="red" d="M8 10h6m6 0h6M8 11h6m6 0h6m-16 1h6m2 0h6m-14 1h6m2 0h6m-12 1h10m-10 1h10m-8 1h6m-6 1h6m-8 1h10m-10 1h10m-12 1h6m2 0h6m-14 1h6m2 0h6M8 22h6m6 0h6M8 23h6m6 0h6" /></svg>;
const Setup4501_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="red" d="M4 5h3m3 0h3M5 6h3m1 0h3M6 7h5M7 8h3M6 9h5m-6 1h3m1 0h3m-8 1h3m3 0h3" /></svg>;

export const setup4501Data = {
  '32x32_4': Setup4501_32x32_4,
  '16x16_4': Setup4501_16x16_4
};

export interface Setup4501Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Setup4501Component = ({
  variant = '32x32_4',
  ...rest
}: Setup4501Props) => {
  const Svg = setup4501Data[variant];

  return <Svg {...rest} />;
};

export const Setup4501 = React.memo(Setup4501Component);
Setup4501.displayName = 'Setup4501';
