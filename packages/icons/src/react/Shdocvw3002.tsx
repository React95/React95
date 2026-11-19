import React from 'react';
import type { SVGProps } from "react";

const Shdocvw3002_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M0 8h8M0 9h1m-1 1h1m-1 1h1m-1 1h1m2 0h1m-4 1h1m-1 1h1" /><path stroke="#fff" d="M1 9h6m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h2m2 0h2m-6 1h3m2 0h1m-6 1h6" /><path stroke="#000" d="M7 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-8 1h8" /><path stroke="silver" d="M2 10h1m1 0h1m-1 2h1" /><path stroke="#00f" d="M3 10h1m-2 1h3m-1 2h2" /></svg>;

export const shdocvw3002Data = {
  '16x16_4': Shdocvw3002_16x16_4
};

export interface Shdocvw3002Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Shdocvw3002Component = ({
  variant = '16x16_4',
  ...rest
}: Shdocvw3002Props) => {
  const Svg = shdocvw3002Data[variant];

  return <Svg {...rest} />;
};

export const Shdocvw3002 = React.memo(Shdocvw3002Component);
Shdocvw3002.displayName = 'Shdocvw3002';
