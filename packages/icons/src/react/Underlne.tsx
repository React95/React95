import React from 'react';
import type { SVGProps } from "react";

const Underlne_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="#000" d="M3 3h4m1 0h4M4 4h2m3 0h2M4 5h2m3 0h2M4 6h2m3 0h2M4 7h2m3 0h2M4 8h2m3 0h2M4 9h2m3 0h2m-7 1h2m3 0h2m-6 1h5m-7 2h9" /><path stroke="gray" d="M6 10h1m1 0h1" /></svg>;

export const underlneData = {
  '16x16_4': Underlne_16x16_4
};

export interface UnderlneProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Underlne: React.FC<UnderlneProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = underlneData[variant];

  return <Svg {...rest} />;
};
