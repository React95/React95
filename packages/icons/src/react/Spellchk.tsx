import React from 'react';
import type { SVGProps } from "react";

const Spellchk_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M3 2h1m2 0h2m3 0h2M2 3h1m1 0h1m1 0h1m1 0h1m1 0h1M2 4h3m1 0h2m2 0h1M2 5h1m1 0h1m1 0h1m1 0h1m1 0h1M2 6h1m1 0h1m1 0h2m3 0h2" /><path stroke="navy" d="M15 4h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-8 1h1m5 0h1m-8 1h3m3 0h2m-7 1h3m1 0h2m-5 1h4m-3 1h3m-2 1h1" /><path stroke="#fff" d="M15 5h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-8 1h1m5 0h1m-6 1h1m4 0h1m-5 1h1m2 0h1m-2 1h1m-1 1h1m-2 1h1" /></svg>;

export const spellchkData = {
  '16x16_4': Spellchk_16x16_4
};

export interface SpellchkProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Spellchk: React.FC<SpellchkProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = spellchkData[variant];

  return <Svg {...rest} />;
};
