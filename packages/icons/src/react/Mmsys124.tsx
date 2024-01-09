import React from 'react';
import type { SVGProps } from "react";

const Mmsys124_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props} />;

export const mmsys124Data = {
  '32x32_4': Mmsys124_32x32_4
};

export interface Mmsys124Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mmsys124: React.FC<Mmsys124Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mmsys124Data[variant];

  return <Svg {...rest} />;
};
