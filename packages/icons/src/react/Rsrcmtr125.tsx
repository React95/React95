import React from 'react';
import type { SVGProps } from "react";

const Rsrcmtr125_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M1 0h1m12 0h1M1 1h1m12 0h1M1 2h1m12 0h1M1 3h14M1 4h1m12 0h1M1 5h1m12 0h1M1 6h1m12 0h1M1 7h14M1 8h1m12 0h1M1 9h1m12 0h1M1 10h1m12 0h1M1 11h14M1 12h1m12 0h1M1 13h1m12 0h1M1 14h1m12 0h1M1 15h14" /><path stroke="#0f0" d="M2 5h12M2 6h12M2 8h12M2 9h12M2 10h12M2 12h12M2 13h12M2 14h12" /></svg>;

export const rsrcmtr125Data = {
  '16x16_4': Rsrcmtr125_16x16_4
};

export interface Rsrcmtr125Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Rsrcmtr125: React.FC<Rsrcmtr125Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = rsrcmtr125Data[variant];

  return <Svg {...rest} />;
};
