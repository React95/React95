import React from 'react';
import type { SVGProps } from "react";

const Moricons41_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M0 8h30M0 9h1m28 0h1M0 10h1m28 0h1M0 11h1m28 0h1M0 12h1m28 0h1M0 13h1m28 0h1M0 14h1m28 0h1M0 15h1m28 0h1M0 16h1m28 0h1M0 17h1m28 0h1M0 18h1m28 0h1M0 19h30" /><path stroke="#fff" d="M1 9h28M1 10h22m5 0h1M1 11h22m5 0h1M1 12h5m12 0h5m5 0h1M1 13h28M1 14h5m8 0h15M1 15h28M1 16h5m6 0h1m3 0h13M1 17h28M1 18h28" /><path stroke="gray" d="M30 9h1m-1 1h2m-2 1h2M6 12h12m12 0h2m-2 1h2M6 14h8m16 0h2m-2 1h2M6 16h6m1 0h3m14 0h2m-2 1h2m-2 1h2m-2 1h2M1 20h31M2 21h30" /><path stroke="red" d="M23 10h5m-5 1h1m3 0h1m-5 1h5" /><path stroke="#ff0" d="M24 11h3" /></svg>;

export const moricons41Data = {
  '32x32_4': Moricons41_32x32_4
};

export interface Moricons41Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons41Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons41Props) => {
  const Svg = moricons41Data[variant];

  return <Svg {...rest} />;
};

export const Moricons41 = React.memo(Moricons41Component);
Moricons41.displayName = 'Moricons41';
