import React from 'react';
import type { SVGProps } from "react";

const Comdlg32535_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M0 9h31M0 10h1m29 0h1M0 11h1m14 0h1m14 0h1M0 12h1m2 0h10m5 0h10m2 0h1M0 13h1m14 0h1m14 0h1M0 14h1m29 0h1M0 15h1m2 0h9m3 0h1m2 0h9m3 0h1M0 16h1m29 0h1M0 17h1m14 0h1m14 0h1M0 18h1m2 0h10m5 0h10m2 0h1M0 19h1m14 0h1m14 0h1M0 20h1m29 0h1M0 21h31" /><path stroke="#fff" d="M1 10h29M1 11h14m1 0h14M1 12h2m10 0h5m10 0h2M1 13h14m1 0h14M1 14h29M1 15h2m9 0h3m1 0h2m9 0h3M1 16h29M1 17h14m1 0h14M1 18h2m10 0h5m10 0h2M1 19h14m1 0h14M1 20h29" /><path stroke="gray" d="M31 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 22h31" /></svg>;

export const comdlg32535Data = {
  '32x32_4': Comdlg32535_32x32_4
};

export interface Comdlg32535Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Comdlg32535: React.FC<Comdlg32535Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = comdlg32535Data[variant];

  return <Svg {...rest} />;
};
