import React from 'react';
import type { SVGProps } from "react";

const CdfviewIcongleam_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="red" d="M3 0h1M1 1h1m1 0h1m1 0h1M2 2h3M0 3h3m1 0h3M2 4h3M1 5h1m1 0h1m1 0h1M3 6h1" /></svg>;

export const cdfviewIcongleamData = {
  '16x16_4': CdfviewIcongleam_16x16_4
};

export interface CdfviewIcongleamProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const CdfviewIcongleamComponent = ({
  variant = '16x16_4',
  ...rest
}: CdfviewIcongleamProps) => {
  const Svg = cdfviewIcongleamData[variant];

  return <Svg {...rest} />;
};

export const CdfviewIcongleam = React.memo(CdfviewIcongleamComponent);
CdfviewIcongleam.displayName = 'CdfviewIcongleam';
