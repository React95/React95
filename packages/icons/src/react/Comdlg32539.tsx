import React from 'react';
import type { SVGProps } from "react";

const Comdlg32539_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="#000" d="M3 3h13m3 0h10M19 4h1m8 0h1M19 5h1m8 0h1M3 6h13m3 0h1m8 0h1M19 7h1m8 0h1M19 8h1m8 0h1M3 9h13m3 0h1m8 0h1m-10 1h1m8 0h1m-10 1h1m8 0h1M3 12h13m3 0h10" /></svg>;

export const comdlg32539Data = {
  '32x32_4': Comdlg32539_32x32_4
};

export interface Comdlg32539Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Comdlg32539: React.FC<Comdlg32539Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = comdlg32539Data[variant];

  return <Svg {...rest} />;
};
