import React from 'react';
import type { SVGProps } from "react";

const Mmsys122_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props} />;
const Mmsys122_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props} />;

export const mmsys122Data = {
  '32x32_4': Mmsys122_32x32_4,
  '16x16_4': Mmsys122_16x16_4
};

export interface Mmsys122Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mmsys122: React.FC<Mmsys122Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mmsys122Data[variant];

  return <Svg {...rest} />;
};
