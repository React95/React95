import React from 'react';
import type { SVGProps } from "react";

const Confcp120_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props} />;
const Confcp120_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M0 2h4m3 0h9M6 3h1m0 1h1M6 5h1M4 6h1M4 7h1m-1 5h1m-1 1h1" /><path stroke="silver" d="M0 3h3m5 0h8M3 4h1m0 1h1m0 1h1M5 7h1m-1 5h1m-1 1h1" /><path stroke="#000" d="M4 3h1M0 4h3m2 0h1m2 0h8M3 5h1m3 0h1M6 6h1M6 7h1m0 1h1M7 9h1m-1 1h1m-5 1h5m-2 1h1m-1 1h1" /><path stroke="olive" d="M3 8h4M3 9h1m2 0h1m-4 1h1m2 0h1" /><path stroke="#ff0" d="M5 9h1m-1 1h1" /></svg>;

export const confcp120Data = {
  '32x32_4': Confcp120_32x32_4,
  '16x16_4': Confcp120_16x16_4
};

export interface Confcp120Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Confcp120: React.FC<Confcp120Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = confcp120Data[variant];

  return <Svg {...rest} />;
};
