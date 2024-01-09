import React from 'react';
import type { SVGProps } from "react";

const Rsrcmtr128_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M1 0h1m12 0h1M1 1h1m12 0h1M1 2h1m12 0h1M1 3h14M1 4h1m12 0h1M1 5h1m12 0h1M1 6h1m12 0h1M1 7h14M1 8h1m12 0h1M1 9h1m12 0h1M1 10h1m12 0h1M1 11h14M1 12h1m12 0h1M1 13h1m12 0h1M1 14h1m12 0h1M1 15h14" /><path stroke="#0f0" d="M2 9h12M2 10h12M2 12h12M2 13h12M2 14h12" /></svg>;

export const rsrcmtr128Data = {
  '16x16_4': Rsrcmtr128_16x16_4
};

export interface Rsrcmtr128Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Rsrcmtr128: React.FC<Rsrcmtr128Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = rsrcmtr128Data[variant];

  return <Svg {...rest} />;
};
