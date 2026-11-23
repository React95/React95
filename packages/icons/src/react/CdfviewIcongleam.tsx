import React from 'react';
import type { SVGProps } from "react";

const CdfviewIcongleam_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="red" d="M3 0h1M1 1h1m1 0h1m1 0h1M2 2h3M0 3h3m1 0h3M2 4h3M1 5h1m1 0h1m1 0h1M3 6h1" /></svg>;
const CdfviewIcongleam_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="red" d="M3 0h1m2 0h1M3 1h1m1 0h2M0 2h2m1 0h3M1 3h8M2 4h2m1 0h2M0 5h8M3 6h3m1 0h2M2 7h2m1 0h1M2 8h1m2 0h1" /></svg>;

export const cdfviewIcongleamData = {
  '16x16_4': CdfviewIcongleam_16x16_4,
  '32x32_4': CdfviewIcongleam_32x32_4
};

export interface CdfviewIcongleamProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4' | '32x32_4';
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
