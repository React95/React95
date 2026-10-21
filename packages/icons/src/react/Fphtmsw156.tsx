import React from 'react';
import type { SVGProps } from "react";

const Fphtmsw156_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M15 13h2m-3 1h4m-5 1h6m-7 1h8m-9 1h10" /><path stroke="#fff" d="M11 18h11" /></svg>;

export const fphtmsw156Data = {
  '32x32_4': Fphtmsw156_32x32_4
};

export interface Fphtmsw156Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Fphtmsw156Component = ({
  variant = '32x32_4',
  ...rest
}: Fphtmsw156Props) => {
  const Svg = fphtmsw156Data[variant];

  return <Svg {...rest} />;
};

export const Fphtmsw156 = React.memo(Fphtmsw156Component);
Fphtmsw156.displayName = 'Fphtmsw156';
