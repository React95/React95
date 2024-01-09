import React from 'react';
import type { SVGProps } from "react";

const Awfext326053_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M23 10h4m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-8 1h5m2 0h5m-11 1h1m5 0h4m-9 1h1m4 0h3m-7 1h1m3 0h2m-5 1h1m2 0h1m-3 1h1" /><path stroke="#000" d="M27 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m3 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="#fff" d="M24 11h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-3 1h3m-2 1h2m-1 1h1" /><path stroke="silver" d="M25 11h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-2 1h2m-1 1h1" /></svg>;
const Awfext326053_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M6 1h5M6 2h5M6 3h5M6 4h5M6 5h5M6 6h5M6 7h5M6 8h5M2 9h13M3 10h11M4 11h9m-8 1h7m-6 1h5m-4 1h3m-2 1h1" /></svg>;

export const awfext326053Data = {
  '32x32_4': Awfext326053_32x32_4,
  '16x16_4': Awfext326053_16x16_4
};

export interface Awfext326053Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Awfext326053: React.FC<Awfext326053Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = awfext326053Data[variant];

  return <Svg {...rest} />;
};
