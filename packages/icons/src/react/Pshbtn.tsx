import React from 'react';
import type { SVGProps } from "react";

const Pshbtn_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#fff" d="M2 4h11M2 5h1M2 6h1M2 7h1M2 8h1M2 9h1m-1 1h1" /><path stroke="#000" d="M13 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M2 11h12" /><path stroke="gray" d="M12 5h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M3 10h10" /></svg>;

export const pshbtnData = {
  '16x16_4': Pshbtn_16x16_4
};

export interface PshbtnProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Pshbtn: React.FC<PshbtnProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = pshbtnData[variant];

  return <Svg {...rest} />;
};
