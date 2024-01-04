import React from 'react';
import type { SVGProps } from "react";

const Listicon_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="navy" d="M1 1h2M1 2h1m1 0h1M1 3h3m4 3h2M8 7h1m1 0h1M8 8h3m-8 3h2m-2 1h1m1 0h1m-3 1h3" /><path stroke="#fff" d="M2 2h1m6 5h1m-6 5h1" /><path stroke="#000" d="M5 2h3m4 5h3m-8 5h3" /></svg>;

export const listiconData = {
  '16x16_4': Listicon_16x16_4
};

export interface ListiconProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Listicon: React.FC<ListiconProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = listiconData[variant];

  return <Svg {...rest} />;
};
